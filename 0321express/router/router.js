const express = require("express");
const router = express.Router();

router.get("/review", function(request, response){

    console.log("사용자가 보낸 색상 : " + request.query.color);
    color = request.query.color;

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write(`<body bgcolor = ${color}>`);
    response.write("</body>");
    response.write("</html>");
    response.end();

})

router.post("/post", function(request, response){
    // router기능 post로 바꿔주는거 필수!!!! 
    //console.log("post 라우터 호출 성공");

    console.log("사용자가 보낸 ID : ", request.body.id);
    //get방식처럼 쿼리스트링으로 가져오는게 아님!! body로 가져오기1!
    console.log("사용자가 보낸 PW : ", request.body.pw);
    console.log("사용자가 보낸 hobby : ", request.body.hobby);
    console.log("사용자가 보낸 gender : ", request.body.gender);


    response.end();
})


router.post("/join", function(request, response){
    // router기능 post로 바꿔주는거 필수!!!! 

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    response.write(`id : ${request.body.id}<br>`);
    response.write(`name : ${request.body.username}<br>`);
    response.write(`email : ${request.body.email}<br>`);
    response.write(`tel : ${request.body.tel}<br>`);
    response.write(`gender : ${request.body.gender}<br>`);
    response.write(`hobby : ${request.body.hobby}<br>`);
    response.write(`birthday : ${request.body.bDay}<br>`);
    response.write(`color : ${request.body.color}<br>`);
    response.write(`country : ${request.body.country}<br>`);
    response.write(`talk : ${request.body.talk}<br>`);
    response.write("</body>");
    response.write("</html>");
    response.end();
})


router.post("/move", function(request, response){

    //사용자가 move라우터 들어왔을때 페이지 이동
    //response.redirect("http://www.naver.com")   <==== 외부페이지 이동
    //response.redirect("http://127.0.0.1:5500/0321express/public/ex01.html")    <===내부 페이지 이동
    if(request.body.siteChoose == 'naver'){
        urls = "http://naver.com";
    }else if(request.body.siteChoose == 'google'){
        urls = "http://google.com";
    }else if(request.body.siteChoose == 'daum'){
        urls = "http://daum.net";
    }
    response.redirect(urls)
    // return과 비슷한 역할
    response.end();

    
})


module.exports = router;
// 이 파일의 라우터가 가진 정보를 밖으로 내보내주는 역할