import mongoose from "mongoose";
import nextConnect from "next-connect";
import verifyToken from "../../middleware/verifyToken";
import Meeting from "../../models/meeting";

const handler = nextConnect();
handler.use(verifyToken);

handler.use(async (req, res) => {
  const user = req.user;
  const meetingName = req.body.meetingName;

  const id = mongoose.Types.ObjectId();
  const meeting = await Meeting.create({
    nom: `${meetingName}-${id.toString()}`,
    profId: user._id,
    date: new Date(),
  });

  res.status(200).json({
    err: false,
    message: `le meeting a etait créer avec succée !`,
    meeting,
  });
});

export default handler;
