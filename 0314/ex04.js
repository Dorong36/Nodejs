const http = require("http");
const url = require("url");
const temp = require("./ex04temp.js");

http.createServer(function(request, response){

    console.log(request.url);
    let query = url.parse(request.url, true).query;
    let res = temp.template_grade(query);

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write(res);
    response.end();

}).listen(3000);