import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  dateTime: Number,
  message: String,
  channelID: mongoose.Types.ObjectId
});

module.exports =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
