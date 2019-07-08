var express = require("express");
var morgan = require("morgan");
var app = express();

app.use(express.static("public"));
app.use(morgan());
app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});

// 同一个路由的不同方法处理
app
  .route("/article")
  .get(function(req, res) {
    res.end("get");
  })
  .post(function(req, res) {
    res.end("post");
  });

app.param("newsId", function(req, res, next, newsId) {
  req.newsId = newsId;
  next();
});

app.get("/news/:newsId", function(req, res) {
  res.end("newsId:" + req.newsId + "\n");
});
