const users = require("./users.json");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//CLI INTERFACE
var argv = require("yargs")
  .option("p", {
    alias: "port",
    describe: "port to open the auth server on",
    type: "number",
    nargs: 1,
    demand: false,
    default: "8086",
  })
  .usage("Usage: $0 <command> [options]")
  .help("h")
  .alias("h", "help").argv;

//HTTP IO
app.post("/", (req, res) => {
  try {
    console.log("recieved: ", req.body);
    if (validateUser(req.body) == true) {
      res.sendStatus(201);
    } else {
      res.sendStatus(404);
    }
  } catch {
    console.log("An error occured");
  }
});

//USER VALIDATION
function validateUser(data) {
  var found = checkUserProfile(data);
  if (found == true) {
    console.log("authenticated as", data.usr);
  } else {
    console.log("not authenticated");
  }
  console.log();
  return found;
}

function checkUserProfile(data) {
  var foundUser = false;
  users.forEach((element) => {
    if (element.usr == data.usr) {
      if (element.pwd == data.pwd) {
        foundUser = true;
      }
    }
  });
  return foundUser;
}

//START SERVER
app.listen(argv.port, () =>
  console.log(`Started server at http://localhost:${argv.port}!`)
);
