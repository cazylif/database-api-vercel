const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app  = express();
global.__basedir = __dirname;
var corsOption = {origin: "*"};
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=> {
  res.json({ message: "Welcome to the Mange Account API."});
});

require("./app/route/user.routes")(app);
require("./app/route/file.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log("Server is running on port" + PORT);
});