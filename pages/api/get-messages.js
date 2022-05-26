import nextConnect from "next-connect";
import dbConnect from "../../lib/dbConnect";
import Message from "../../models/message";
import verifyToken from "../../middleware/verifyToken";
import mongoose from "mongoose";

const handler = nextConnect();
handler.use(verifyToken);
handler.use(async (req, res) => {
  const { channelID } = req.body;

  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
  }

  const messages = await Message.aggregate([
    {
      $match: { channelID: mongoose.Types.ObjectId(channelID) },
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },
    {
      $project: {
        userName: "$user.nom",
        userPrenom: "$user.prenom",
        dateTime: "$dateTime",
        message: "$message",
      },
    },
  ]);

  res.status(200).json(messages);
});

export default handler;
