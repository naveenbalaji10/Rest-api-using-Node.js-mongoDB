const app = require("express")();
const http = require("http");
const PORT = 5000;
const router = require("./routes/cardroute");
const mongoose = require("mongoose");
const parser = require("body-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(parser.json());
app.use("/routes", router);
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
mongoose.connect(process.env.CONNECT_DB, { useNewUrlParser: true }, () => {
  console.log("connected to MONGO");
});
