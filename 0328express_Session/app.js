const express = require("express");
const app = express();
const router = require("./router/router.js");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session")
// session 기능을 사용하기 위한 모듈
const mysql_session = require("express-mysql-session")
// session 기능을 저장하기 위한 모듈  ==> mysql에 임시로 저장

let DB_info = {
    host : '127.0.0.1',
    user : 'root',
    password : '1234',
    port : '3306',
    database : 'nodejs'
}

let s_m_s = new mysql_session(DB_info);
// 그냥만 있으면 아무 의미 없는 mysql_session에 DB정보 입력

app.use(session({
    secret : "smart",
    resave : false,      // 저장할때매다 새로 등록?
    saveUninitialized : true,      //저장 할거??
    store : s_m_s
}))
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.listen(3000);