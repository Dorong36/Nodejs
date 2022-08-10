const express= require("express");
const router = express.Router();

router.get("/sessionSave", function(request, response){
    request.session.user = {
        "name" : "yeong",
        "age" : "26"
    }
    console.log("세션등록 성공!!!");
    response.end();   // 안쓰면 계속 응답 기다려서 저장이 안됨

    // 실행 후 mysql에서 select * from sessions 실행시 정보가 넘어와있음
})

router.get("/sessionLoad", function(request, response){
    console.log("세션에 저장된 이름값 : " + request.session.user.name); 
    console.log("세션에 저장된 나이값 : " + request.session.user.age);

    // 세션을 삭제하는 경우 ===> 브라우저 종료 / 로그아웃 등 세션 제거 기능 실행 시

    response.end();
})

router.get("/sessionDelete", function(request, response){

    delete request.session.user;

    console.log("세션 삭제 성공!!");

    response.end();
})

module.exports = router;