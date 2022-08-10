const express = require("express");
const app = express();
const router = require("./router/router.js");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session")
const mysql_session = require("express-mysql-session")
    // session 관련 내용은 0328express_Session 폴더 참고
let DB_info = {
    host : '127.0.0.1',
    user : 'root',
    password : '1234',
    port : '3306',
    database : 'nodejs'
}

let m_s = new mysql_session(DB_info);

app.use(session({
    secret : "smart",
    resave : false,
    saveUninitialized : true,
    store : m_s
}))
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.listen(3000);