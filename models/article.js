import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  titre: String,
  picture: String,
  type: String,
  description: String,
  publisher: String,
  publisherID: mongoose.Types.ObjectId,
});

module.exports =
  mongoose.models.Article || mongoose.model("Article", articleSchema);
