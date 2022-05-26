import nextConnect from "next-connect";
import dbConnect from "../../lib/dbConnect";
import verifyToken from "../../middleware/verifyToken";
import Message from "../../models/message";
import pusher from "../../pusher/config";

const handler = nextConnect();
handler.use(verifyToken);
handler.use(async (req, res) => {
  const userId = req.user._id;
  const { message, dateTime, channelID } = req.body;

  try {
    await dbConnect();
  } catch (error) {
    console.log(error.message);
  }

  let addedMessage = null;

  try {
    addedMessage = await Message.create({
      userId,
      message,
      dateTime: new Date(dateTime),
      channelID,
    });
  } catch (error) {
    return res.status(500).json({ err: true, message: `error server` });
  }

  pusher.trigger("messages", "message", JSON.stringify(addedMessage));
  res.status(200).json();
});

export default handler;
