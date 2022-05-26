import nextConnect from "next-connect";
import verifyToken from "../../middleware/verifyToken";
import pusher from "../../pusher/config";
import Channel from "../../models/channel";
import dbConnect from "../../lib/dbConnect";

const handler = nextConnect();
handler.use(verifyToken);

handler.use(async (req, res) => {
  const role = req.user.role;
  if (role !== "prof" && role !== "admin")
    return res.status(401).json({
      err: true,
      message: `you are not authorized to add a channel !`,
    });

  const { channel } = req.body;

  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
  }

  let theChannel;
  try {
    theChannel = await Channel.create({
      channel,
      creator: req.user._id,
    });
  } catch (error) {
    return res.status(500).json({ err: true, message: "error server" });
  }

  pusher.trigger("channels", "channel", JSON.stringify(theChannel));
  res
    .status(200)
    .json({ err: false, message: `la salle a etait ajouté avec succés !` });
});

export default handler;
