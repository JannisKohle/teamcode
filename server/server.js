const express = require('express');
const accountsRoutes = require("./routes/accounts");
const app = express();

app.use(express.json());

app.use("/accounts", accountsRoutes);

module.exports = app;
