const express = require("express");
const app = express();

const user = { benjamin: "thomas" };

const middleware = (req, res, next) => {
  res.statusCode = 401;
  res.setHeader("WWW-Authenticate", 'Basic realm="Secure Area"');

  let auth = req.headers["authorization"];
  if (auth) {
    var tmp = auth.split(" ");

    var buf = new Buffer(tmp[1], "base64");
    var auth_decode = buf.toString();

    console.log("Decoded Authorization ", auth_decode);
  }
};

app.use(middleware);

app.get("/", function(req, res, next) {
  res.send("Hello World");
});

app.listen(3000);
