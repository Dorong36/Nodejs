const http = require("http");
const url = require("url");

http.createServer(function(request, response){

    console.log(request.url);
    // /?num1=123&num2=123
    // /           ?       num1  =    123      &num2=123
    // 위의 의미   시작     name       value
    // QueryString : url을 통해서 서버로 값을 보내는 방식
    let query = url.parse(request.url, true).query;
    console.log(query);
    console.log("사용자가 입력한 num1값 : " + query.num1)
    console.log("사용자가 입력한 num2값 : " + query.num2)
    // console.log("num1+num2 : " + (Number(query.num1)+Number(query.num2)));

    let number1 = Number(query.num1)
    let number2 = Number(query.num2)
    // let sumNum = number1 + number2
    let result = 0
    if(query.opr == '+'){
        result = number1 + number2
    }else if(query.opr == '-'){
        result = number1 - number2
    }else if(query.opr == '*'){
        result = number1 * number2
    }else{
        result = number1 / number2
    }

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    response.write(`num1 ${query.opr} num2 = ${result}`);
    response.write("</body>");
    response.write("</html>");






    console.log("서버생성 성공");
    response.end();

}).listen(3000);