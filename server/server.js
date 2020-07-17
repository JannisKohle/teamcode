const express = require('express');
const accountsRoutes = require("./routes/accounts");
const roomsRoutes = require("./routes/rooms");
const app = express();

app.use(express.json());

app.use("/accounts", accountsRoutes);
app.use("/rooms", roomsRoutes);

module.exports = app;
