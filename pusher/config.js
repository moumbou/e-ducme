const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1413944",
  key: "aafde64eb21cf5247385",
  secret: "3c5cf16b54f6ea8bed0f",
  cluster: "eu",
  useTLS: true,
});

export default pusher;
