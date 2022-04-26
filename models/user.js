import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  picture: String,
  email: String,
  password: String,
  role: String,
  validation: Boolean,
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
