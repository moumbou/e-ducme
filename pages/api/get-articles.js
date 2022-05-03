import nextConnect from "next-connect";
import dbConnect from "../../lib/dbConnect";
import verifyToken from "../../middleware/verifyToken";
import Type from "../../models/articleTypes";

const handler = nextConnect();

handler.use(verifyToken);
handler.use(async (req, res) => {
  console.log("get-articles");
  await dbConnect();
  const articles = await Type.aggregate([
    {
      $lookup: {
        from: "articles",
        localField: "name",
        foreignField: "type",
        as: "articles",
      },
    },
    {
      $project: {
        type: "$name",
        articles: "$articles",
      },
    },
  ]);

  res.status(200).json({ articles });
});

export default handler;
