console.log('Node 동작성공!!');


//모듈 : Nodejs에서 만들어둔 기능들의 단위
const http = require("http");
//require : 모듈을 가져오는 명령어
//http모듈 : 현재 파일을 서버로 만들어주는 모듈

http.createServer(function(request, response){
    //console.log("서버실행중");
    let ip = request.connection.remoteAddress;
    //request : Client의 모든 정보를 갖고있는 객체

    //현재 ip출력하면 ipv6기준으로 나와서 앞에 ffff가 붙음
    //substring으로 잘라주자!! ()안의 수만큼 앞글자를 자름
    let ip_res = ip.substring(7);
    console.log("접근한 Client의 IP : " + ip_res);

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    //서버와 클라이언트가 소통하는 방식은 패킷단위
    //패킷은 (Header / Body) 두 가지로 나뉨
    //writeHead : 패킷에 Header값을 지정
    // response : Server가 Client에게 응답을 해주는 객체
    //              (html 페이지 생성 / 페이지 이동)
    response.write("<html>");
    response.write("<body>");
    response.write("환영합니다~!");
    response.write("당신의 IP : " + ip_res)
    response.write("</body>");
    response.write("</html>");
    response.end();

}).listen(3000);
//listen ==> port번호 설정(방번호)










