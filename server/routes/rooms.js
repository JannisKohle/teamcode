const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.send("get list of rooms");
});
router.post('/', (req, res) => {
  res.send("create room");
});
router.delete("/", (req, res) => {
  res.send("delete room");
});
router.patch("/", (req, res) => {
  res.send("update room");
});

///////////////////

router.get("/:roomId", (req, res) => {
  res.send("get info about room");
});
router.put("/:roomId", (req, res) => {
  res.send("update room");
});
router.patch("/:roomId", (req, res) => {
  res.send("update room");
});

///////////////////

router.get("/:roomId/members", (req, res) => {
  res.send("get members");
});
router.post("/:roomId/members", (req, res) => {
  res.send("add member");
});
router.delete("/:roomId/members", (req, res) => {
  res.send("delete member");
});
router.put("/:roomId/members", (req, res) => {
  res.send("update members");
});
router.patch("/:roomId/members", (req, res) => {
  res.send("update member");
});

///////////////////

router.get("/:roomId/messages", (req, res) => {
  res.send("get messages");
});
router.post("/:roomId/messages", (req, res) => {
  res.send("post message");
});
router.delete("/:roomId/messages", (req, res) => {
  res.send("delete message");
});
router.patch("/:roomId/messages", (req, res) => {
  res.send("update message");
});

///////////////////

router.get("/:roomId/messages/:messageId", (req, res) => {
  res.send("get message");
});
router.put("/:roomId/messages/:messageId", (req, res) => {
  res.send("update message");
});

module.exports = router;
