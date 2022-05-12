import nextConnect from "next-connect";
import dbConnect from "../../lib/dbConnect";
import verifyToken from "../../middleware/verifyToken";
import Meeting from "../../models/meeting";

const handler = nextConnect();
handler.use(verifyToken);

handler.use(async (req, res) => {
  const id = req.body.id;

  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: true, message: `erreur serveur !` });
  }

  await Meeting.deleteOne({ _id: id });
  res.status(200).json({
    err: false,
    message: `votre meeting a était arrété avec succée !`,
  });
});

export default handler;
