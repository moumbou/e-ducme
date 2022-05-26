import nextConnect from "next-connect";
import dbConnect from "../../lib/dbConnect";
import Channel from "../../models/channel";

const handler = nextConnect();
handler.use(async (req, res) => {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
  }
  const channels = await Channel.find();
  res.status(200).json({ channels });
});

export default handler;
