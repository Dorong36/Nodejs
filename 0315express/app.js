// express 프레임워크를 활용한 서버
const express = require("express");
//express 기능 가져오는 코드
const app = express();
//express 기능 실행하는 코드
const router = express.Router();
//express 기능 중에서 router 기능을 가져오는 코드

router.get("/plus", function(request, response){
    console.log("사용자가 입력한 num1값 : " + request.query.num1)
    console.log("사용자가 입력한 num2값 : " + request.query.num2)
    let result = 0
    let num1 = Number(request.query.num1);
    let num2 = Number(request.query.num2);
    let opr = request.query.opr;
    // express를 사용하게되면 request에 내부적으로 url을 분석해주기 때문에
    // request가 갖고있는 query기능을 바로 사용 가능

    if(opr == '+'){
        result = num1 + num2
    }else if(opr == '-'){
        result = num1 - num2
    }else if(opr == '*'){
        result = num1 * num2
    }else{
        result = num1 / num2
    }

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    response.write(`num1 ${opr} num2 = ${result}`);
    response.write("</body>");
    response.write("</html>");
    response.end();
})

router.get("/td", function(request, response){
    
    console.log("사용자가 입력한 td값 : " + request.query.cnt);
    cnt = Number(request.query.cnt)

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
    response.end();
})


app.use(router);// 미들웨어 - 서버가 동작하는데 있어서 필요한 기능 정의
//현재 서버에서 사용할 수 있게 app에 router 등록
app.listen(3000);
//port 번호 설정