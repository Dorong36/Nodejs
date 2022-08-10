const http = require("http");
const url = require("url");
let temp = require("./ex03Temp");

http.createServer(function(request, response){

    //console.log(request.url);
    let query = url.parse(request.url, true).query;
    // console.log("사용자가 입력한 td값 : " + query.cnt);
    //cnt = Number(query.cnt)

    let res = temp.template(query);

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write(res);

    //response.write("pm2 설치 성공!!!!")
    //console.log("서버생성 성공");
    response.end();

}).listen(3000);