import mongoose from "mongoose";

const presenceSchema = new mongoose.Schema({
  empreinteId: mongoose.Types.ObjectId,
  profId: mongoose.Types.ObjectId,
  meeting: String,
  classe: String,
});

module.exports =
  mongoose.models.Presence || mongoose.model("Presence", presenceSchema);
