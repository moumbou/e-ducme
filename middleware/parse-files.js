import nextConnect from "next-connect";
import multiparty from "multiparty";

const parse_files_middleware = nextConnect();

parse_files_middleware.use(async (req, res, next) => {
  const form = new multiparty.Form();

  await form.parse(req, function (err, fields, files) {
    req.body = fields;
    req.files = files;
    next();
  });
});

export default parse_files_middleware;
