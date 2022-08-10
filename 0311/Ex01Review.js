const http = require("http")

http.createServer(function(request, response){
    console.log("서버생성 성공");
}).listen(3000);



