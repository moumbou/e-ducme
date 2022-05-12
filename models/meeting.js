import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  nom: String,
  profId: mongoose.Types.ObjectId,
  date: Number,
});

module.exports =
  mongoose.models.Meeting || mongoose.model("Meeting", meetingSchema);
