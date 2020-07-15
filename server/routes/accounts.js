const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.send("get list of accounts");
});
router.post('/', (req, res) => {
  res.send("create account");
});
router.delete("/", (req, res) => {
  res.send("delete account");
});
router.patch("/", (req, res) => {
  res.send("update account");
});

///////////////////

router.get("/:username", (req, res) => {
  res.send("get info about account");
});
router.put("/:username", (req, res) => {
  res.send("update account");
});
router.patch("/:username", (req, res) => {
  res.send("update account");
});

module.exports = router;
