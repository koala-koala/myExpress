var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var action = require("./action");
var app = express();

var corsOptions = {
  origin: "http://localhost:9000",
  credentials: true
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app
  .route("/list")
  .get((req, res) => {
    res.json(action.getList());
  })
  .post((req, res) => {
    res.json(action.postItem(req.body));
  });

app
  .route("/list/:id")
  .get((req, res) => {
    res.json(action.getItem(req.params.id));
  })
  .put((req, res) => {
    res.json(action.putItem(req.body));
  })
  .delete((req, res) => {
    res.json(action.delItem(req.params.id));
  });
