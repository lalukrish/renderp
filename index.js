const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
var cors = require("cors");
const PORT = 7000;
const mongoose = require("mongoose");
require("./model/user");
app.use(cors());
app.use(express.json());
app.use(require("./routes/auth"));
mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected");
});

mongoose.connection.on("error", (err) => {
  console.log("err connect", err);
});

app.listen(PORT, () => {
  console.log("its running");
});
