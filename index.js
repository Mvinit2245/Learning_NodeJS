const http = require("http");

const server = http.createServer(function(req, res){
    res.write("This is the firts server ! Created By viit morankar");
    res.end();
});

server.listen(3000, function(){
    console.log("Server Started");
});