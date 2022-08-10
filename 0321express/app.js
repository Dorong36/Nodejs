const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// 패킷의 body부분 해석하는 모듈 불러오기
app.use(bodyParser.urlencoded({extended:false}));
// body parser 이용 등록시키기
const router = require("./router/router.js");

app.use(router);
app.listen(3000);