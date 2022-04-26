import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    await dbConnect();
  } catch (error) {
    return res
      .status(500)
      .json({ err: err.message, messsage: `erreur serveur !` });
  }

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //* IF NO USER FOUND THEN RESPOND WITH ERROR MESSAGE
    if (!user)
      return res
        .status(400)
        .json({ err: true, message: `mot de passe ou email incorrect !` });

    //* CHECK FOR VALIDATION PASSWORD
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return res
        .status(400)
        .json({ err: true, message: `mot de passe ou email incorrect !` });

    //* CHECK IF THE USER ACCOUNT IS VALIDATE
    if (user.validation)
      return res
        .status(200)
        .json({ err: false, message: `connexion établie !`, user });

    //* RESPOND WITH ERROR MESSAGE IF NO VALIDATION FOUND
    return res.status(200).json({
      err: true,
      message: `votre compte n'a toujours pas était vérifié !`,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ err: error.message, message: `erreur serveur !` });
  }
}