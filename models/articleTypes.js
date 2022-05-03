import mongoose from "mongoose";

const articleTypeSchema = new mongoose.Schema({
  name: String,
});

module.exports =
  mongoose.models.Type || mongoose.model("Type", articleTypeSchema);
