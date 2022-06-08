import nextConnect from "next-connect";
import dbConnect from "../../lib/dbConnect";
import verifyToken from "../../middleware/verifyToken";
import Meeting from "../../models/meeting";

const handler = nextConnect();
handler.use(verifyToken);

handler.use(async (req, res) => {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error.message);
    res.status(400).json({});
  }

  const meetings = await Meeting.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "profId",
        foreignField: "_id",
        as: "prof",
      },
    },
    {
      $unwind: {
        path: "$prof",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        prof: { $concat: ["$prof.nom", " ", "$prof.prenom"] },
        nom: 1,
        classe: 1,
        dateDebut: 1,
        dateFin: 1,
      },
    },
    {
      $sort: {
        dateDebut: 1,
      },
    },
  ]);

  res.status(200).json({ meetings });
});

export default handler;
