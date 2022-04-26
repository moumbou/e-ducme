import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    await dbConnect();
  } catch (error) {
    return res
      .status("500")
      .json({ err: error.message, message: `erreur serveur !` });
  }

  try {
    const exist = await User.findOne({
      email: req.body.email,
    });

    if (exist)
      return res.status(400).json({
        err: true,
        message: `cette email existe déja !`,
      });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;
    const user = await User.create(req.body);
    return res.status(200).json({
      err: null,
      data: user,
      message: `votre compte sera pris en charge dans les plus brefs délais !`,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ err: error.message, message: `erreur serveur !` });
  }
}
