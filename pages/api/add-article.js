import formidable from "formidable";
import mongoose from "mongoose";
import fs from "fs";
import Type from "../../models/articleTypes";
import Article from "../../models/article";
import dbConnect from "../../lib/dbConnect";
import nextConnect from "next-connect";
import verifyToken from "../../middleware/verifyToken";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect();
handler.use(verifyToken);

handler.use(async (req, res) => {
  const form = new formidable.IncomingForm({ multiples: true });

  try {
    //? WAITING FOR THE CONNECTION TO THE MONGODB
    await dbConnect();
    form.parse(req, async (err, fields, files) => {
      const file = files.file;
      const data = JSON.parse(fields.data);
      const user = req.user;

      //? DESTRUCTOR THE DATA
      const { description, article, add_article, titre } = data;

      //? VERIFY IF THE ARTICLE TITLE ALSO EXISTE
      const articleTitle = await Article.findOne({ titre });
      if (articleTitle)
        return res.status(400).json({
          err: true,
          message: `le titre que vous avez inscris existe déja !`,
        });

      //? CHECK FOR IMAGE VALIDATION AND PICTURE
      let path = null,
        id = null;
      const isValide = ["image/jpeg", "image/png", "image/gif"].includes(
        file.mimetype
      );
      if (file && isValide) {
        id = mongoose.Types.ObjectId();
        const fileData = fs.readFileSync(file.filepath);
        fs.writeFileSync(
          `./public/upload/articles/${id.toString()}.${
            file.mimetype.split("/")[1]
          }`,
          fileData
        );
        path = `./public/upload/articles/${id.toString()}.${
          file.mimetype.split("/")[1]
        }`;
      } else {
        return res.status(400).json({
          err: true,
          message: `votre article doit contenir une image !`,
        });
      }

      //? CHECK IF ARTICLE TYPE NAME ALSO EXIST
      const articleType = await Type.findOne({ name: add_article });

      if (add_article && !articleType) {
        await Type.create({
          name: add_article,
        });
      }

      //? CREATE THE ARTICLE
      await Article.create({
        titre,
        picture: path,
        type: add_article ? add_article : article,
        description,
        publisher: `${user.nom} ${user.prenom}`,
        publisherID: user._id,
      });

      res.status(200).json({
        err: false,
        message: `l'article ${titre} a était ajouté avec succée !`,
      });
    });
  } catch (error) {
    console.log(error.message, `File: pages/api/add-article -- Line: 71`);
    res.status(501).json({ err: true, message: `erreur serveur !` });
  }
});

export default handler;
