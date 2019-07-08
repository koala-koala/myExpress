var http = require("http");
var url = require("url");
var net = require("net");

// var onRequest = function(req, res) {
//   res.end("hello");
// };
// var server = http.createServer(onRequest);
// server.listen(8888);

var server = net.createServer(function(socket) {
  console.log("something connected");

  socket.on("data", function dataHandler(data) {
    console.log(
      socket.remoteAddress,
      socket.remotePort,
      "send",
      data.toString()
    );
    socket.write("server recieved \n");
  });

  socket.on("close", function closeHandler() {
    console.log(
      socket.remoteAddress,
      socket.remotePort,
      "send",
      "disconnected"
    );
  });
});

server.listen(8888, "127.0.0.1");
