import nextConnect from "next-connect";
import dbConnect from "../../lib/dbConnect";
import verifyToken from "../../middleware/verifyToken";
import Meeting from "../../models/meeting";
import Presence from "../../models/presence";

const handler = nextConnect();
handler.use(verifyToken);

handler.use(async (req, res) => {
  try {
    await dbConnect();
  } catch (e) {
    res.status(500).json({});
  }

  const meetingName = req.body.meeting;
  const meeting = await Meeting.find({ nom: meetingName });
  if (meeting.length) {
    const selectedMeeting = meeting[0];
    const index = selectedMeeting.nom.lastIndexOf("-");
    const meetingName = selectedMeeting.nom.substring(0, index);

    const exists = await Presence.find({
      $and: [
        { profId: selectedMeeting.profId },
        { empreinteId: req.user._id },
        { meeting: meetingName },
        { classe: selectedMeeting.classe },
      ],
    });

    if (!exists.length)
      await Presence.create({
        empreinteId: req.user._id,
        profId: selectedMeeting.profId,
        meeting: meetingName,
        classe: selectedMeeting.classe,
      });
  }

  res.status(200).json({});
});

export default handler;
