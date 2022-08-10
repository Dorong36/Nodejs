const express= require("express");
const router = express.Router();

router.get("/ex01view", function(request, response){

    let num1 = request.query.num1;
    response.render("ex01", {             // 생성할 ejs 파일 파일명 확장자 없이 가져옴
        num1_router : num1        // 보내줘야할 변수 써주면 자동으로 넘어감     name값 : 실제 넘겨주는 value값
    });         
    // ejs파일을 생성
    // ejs는 꼭 response 통해서 생성시켜줘야함!!(html과 다름!!)

});

router.get("/ex02grade", function(request, response){

    let name = request.query.name;
    let java = request.query.java;
    let web = request.query.web;
    let iot = request.query.iot;
    let android = request.query.android;

    
    response.render("ex02", {
        name:name, java:java, web:web, iot:iot, android:android
    });

});

router.get("/evenOdd", function(request, response){

    let num1 = request.query.num1;
    let num2 = request.query.num2;
    response.render("ex03", {
        num1 : num1, num2 : num2
    });

});


module.exports = router;