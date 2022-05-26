import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  nom: String,
  profId: mongoose.Types.ObjectId,
  dateDebut: Number,
  dateFin: Number,
  classe: String,
});

module.exports =
  mongoose.models.Meeting || mongoose.model("Meeting", meetingSchema);
