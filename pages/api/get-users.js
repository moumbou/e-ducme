import nextConnect from "next-connect";
import dbConnect from "../../lib/dbConnect";
import verifyToken from "../../middleware/verifyToken";
import User from "../../models/user";

const handler = nextConnect();
handler.use(verifyToken);

handler.use(async (req, res) => {
  const user = req.user;

  if (user.role === "admin") {
    try {
      await dbConnect();
    } catch (error) {
      res.status(500).json({ err: true, message: `erreur au niveau serveur` });
    }

    const users = await User.find({ role: { $ne: "admin" } }).select(
      "-password"
    );
    console.log(users);
    res.status(200).json({ users });
  } else {
    res.status(400).json({ err: true, message: `vous n'etes pas autoriser !` });
  }
});

export default handler;
