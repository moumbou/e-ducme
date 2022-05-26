import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  channel: String,
  creator: mongoose.Types.ObjectId,
});

module.exports =
  mongoose.models.Channel || mongoose.model("Channel", channelSchema);
