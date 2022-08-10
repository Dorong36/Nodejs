const express= require("express");
const session = require("express-session");
const router = express.Router();
// const mysql = require("mysql");         공통되는 부분이라 따로 config에 빼주면서 주석처리 한거임!!
// 설치했던 노드와 mysql이어주는 모듈 불러오기  (mysql프로그램을 가져오는건 아님!!!)

const conn = require("../config/DB.js"); // 반복되는 mysql 접속문 따로 파일로 빼주고 불러오기

router.post("/login", function(request, response){

    let id = request.body.id;
    let pw = request.body.pw;

    let sql = "select * from nodejs_member where id=? and pw=?";
    conn.query(sql,[id, pw], function(err, rows){
            console.log(rows.length);
            if (rows.length >0){

                request.session.user = {     // session에서 가져올때는 ""로 가져옴
                    "id" : rows[0].id,
                    "nick" : rows[0].nick
                }
                response.render("loginS", {       // ejs로 갈때는 "" 필요없음
                    id : id
                })
            }else{
                response.redirect("http://127.0.0.1:5500/0322express_DB/public/loginF.html");
            }
    })

})


router.post("/join", function(request, response){

    // 사용자가 입력한  id가 'smart'
    //                 pw가 '123'일때, 성공, 실패시 각각 이동
    let id = request.body.id;
    let pw = request.body.pw;
    let nick = request.body.nick;

    // // mySQL연결 
    // let conn = mysql.createConnection({         // mysql로 아래 필요정보들 넘겨서 허가 떨어지면 conn안에서 기능 활용 가능
    //     host : '127.0.0.1',        // ip
    //     user : 'root',
    //     password : '1234',
    //     port : '3306',
    //     database : 'nodejs'
    // })

    // conn.connect();                   DB로 따로 빼주기!!!!

    let sql = "insert into nodejs_member values(?,?,?)";    // sql문 안의 ;는 안가져와도 됨!!!!   (리터럴도 가능은함)
    conn.query(sql, [id, pw, nick], function(err, rows){              // sql문 실행 후 입력했을때 오류가 나면 err로, 성공하며 rows로 결과값이 들어감!!
        //           ↑사용자가 입력한 값 받아주기 위해서 sql에 ?로 값 비어두고 이 자리에서 순서대로 지정!!!

        if(rows){     //만약 rows에 값이 있다면(true 라면)~~
            // console.log("입력 성공");
            // console.log(rows);
            response.redirect("http://127.0.0.1:3000/Main")
        }else{
            // console.log("입력 실패");
            console.log(err);    // sql문 틀리면 여기에 저장되어 보여줌!!!!
        }
    });

})

router.post("/delete", function(request, response){

    let id = request.body.id;

    let sql = "delete from nodejs_member where id=?";
    conn.query(sql, [id], function(err, rows){

        if(rows){
            response.redirect("http://127.0.0.1:3000/Main")
        }else{
            console.log(err);
        }
    });

})

router.get("/btndelete", function(request, response){


    console.log("btn delete 호출 성공");
    let id = request.query.id;

    console.log("삭제할 id : " + id);

    let sql = "delete from nodejs_member where id=?";
    conn.query(sql, [id], function(err, rows){

        if(rows){
            response.redirect("http://127.0.0.1:3000/select");
        }else{
            console.log(err);
        }
    });

})

router.post("/update", function(request, response){

    let id = request.body.id;
    let select = request.body.select;
    let data = request.body.data;

    let sql = ""
    if(select == 'pw'){
        sql = "update nodejs_member set pw = ? where id = ?";          // sql문을 여기서 선언해버리면 지역변수로 실행문 빠져나가면 사라져버린다!!!
    }else if(select == 'nick'){
        sql = "update nodejs_member set nick = ? where id = ?";
    }

    conn.query(sql, [data, id], function(err, rows){
        if(rows){
           response.redirect("http://127.0.0.1:3000/Main")
        }else{
            console.log(err);
        }
    });
    
})

router.get("/select", function(request, response){         
    // 사이트에서 html로 넘어가서 거기에 사용되는 라우터가 아니라
    // 링크를 통해서 서버 라우터를 바로 호출할 때는 get방식으로 설정

    let sql = "select * from nodejs_member";
    conn.query(sql, function(err, rows){

        if(rows){               // 조회한 값이 모두 rows에 (행 단위로)배열형태로 들어감
            console.log(rows)
            response.render("select", {
                rows : rows
            });
            // response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
            // response.write("<html>");
            // response.write("<body>");
            // response.write("<table border = '1'>");
            // response.write("<tr>");
            // response.write("<th>ID</th>");
            // response.write("<th width = 100>Password</th>");
            // response.write("<th>NickName</th>");

            // response.write("</tr>");

            // for(let i = 0; i<rows.length; i++){
            //     response.write("<tr>");
            //     response.write(`<td>${rows[i].id}</td>`);
            //     response.write(`<td>${rows[i].pw}</td>`);
            //     response.write(`<td>${rows[i].nick}</td>`);
            //     response.write("<td><a href = 'http://127.0.0.1:3000/btndelete?id="+rows[i].id+"'><button>삭제</button></a></td>");
            //     response.write("</tr>");
            // }
            
            // response.write("</table>");
            // response.write("</html>");
            // response.write("</body>");
            // response.end();
            
        }else{
            console.log(err);
        }
    });

})

router.post("/selectOne", function(request, response){
    // 사용자가 입력한 아이디 값에 해당하는 정보 출력

    let id = request.body.id

    let sql = "select * from nodejs_member where id=?";
    conn.query(sql,[id], function(err, rows){
        if(rows){               // 조회한 값이 모두 rows에 (행 단위로)배열형태로 들어감
            response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
            response.write("<html>")
            response.write("<body>")
            response.write("<table border = '1'>")
            response.write("<tr>")
            response.write("<th>ID</th>")
            response.write("<th width = 100>Password</th>")
            response.write("<th>NickName</th>")
            response.write("</tr>")
            response.write("<tr>")
            response.write(`<td>${rows[0].id}</td>`)
            response.write(`<td>${rows[0].pw}</td>`)
            response.write(`<td>${rows[0].nick}</td>`)
            response.write("</tr>")
            response.write("</table>")
            response.write("</html>")
            response.write("</body>")
            response.end();
        }else{
            console.log(err);
        }
    });

})

router.get("/Main", function(request, response){

    response.render("Main", {
        user : request.session.user
    })

})

router.get("/logout", function(request, response){
    
    delete request.session.user;
    response.render("Main", {
        user : request.session.user
    })
    
})

module.exports = router;