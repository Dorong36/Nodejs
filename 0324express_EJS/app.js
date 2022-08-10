const express = require("express");
const app = express();
const router = require("./router/router.js");
const bodyparser = require("body-parser");
const ejs = require("ejs");

app.set("view engine", "ejs");
// express 내부적으로 engine이 설정되어있기 때문에 use아닌 set 사용!!!   +) use는 외부에 있는거 불러와서 저장하는거!!
app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.listen(3000);