import nextConnect from "next-connect";
import verifyToken from "../../middleware/verifyToken";

const getUser = nextConnect();
getUser.use(verifyToken);

getUser.use(async (req, res) => {
  const user = req.user;
  res.status(200).json({ user });
});

export default getUser;
