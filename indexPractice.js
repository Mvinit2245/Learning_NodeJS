const http = require("http");

const server = http.createServer(function(req, res){
    //res.write("This is the firts server ! Created By viit morankar");
      //res.end();
      
    if(req.url === "/"){
         res.write("You are in the Home page");
        res.end();
    }else if (req.url === "/about"){
        res.write("You are in the about page");
        res.end();
    }else{
         res.write("Page Not Found");
         res.end();
    }
    
});

server.listen(3000, function(){
    console.log("Server Started");
});