const http = require("http");
const url = require("url");

http.createServer(function(request, response){

    console.log(request.url);
    let query = url.parse(request.url, true).query;
    console.log("사용자가 입력한 td값 : " + query.cnt);
    cnt = Number(query.cnt)

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    response.write("<table border = '1'>");
    response.write("<tr>");
    for(let i=0; i<cnt; i++){
        response.write(`<td>${i+1}</td>`);
    }
    response.write("</tr>");
    response.write("</table>");
    response.write("</body>");
    response.write("</html>");

    console.log("서버생성 성공");
    response.end();

}).listen(3000);