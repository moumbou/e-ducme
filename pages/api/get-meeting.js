import nextConnect from "next-connect";
import dbConnect from "../../lib/dbConnect";
import verifyToken from "../../middleware/verifyToken";
import Meeting from "../../models/meeting";

const handler = nextConnect();
handler.use(verifyToken);

handler.use(async (req, res) => {
  const user = req.user;

  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: true, message: `erreur serveur !` });
  }

  const exist = await Meeting.findOne({ profId: user._id });
  res.status(200).json({ err: false, exist });
});

export default handler;
