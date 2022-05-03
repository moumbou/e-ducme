import nextConnect from "next-connect";
import { decodedToken } from "../JWT/decodeToken";
import dbConnect from "../lib/dbConnect";
import User from "../models/user";

const verifyToken = nextConnect();

verifyToken.use(async (req, res, next) => {
  const token = req.headers["x-access-token"];
  const id = decodedToken(token);
  if (!id) return res.status(401);

  try {
    await dbConnect();
  } catch (error) {
    return res.status(500).json({ err: true, message: error.message });
  }

  const user = await User.findById(id);
  if (user) {
    req.user = user;
    return next();
  } else return res.status(405);
});

export default verifyToken;
