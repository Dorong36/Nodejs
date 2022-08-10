exports.template_grade = function(query){
    
    let avg = (Number(query.java) + Number(query.web) + Number(query.iot) + 
    Number(query.android))/4;;

    let grade = '';
    if(avg >= 95){
        grade = 'A+';
    }else if(avg>=90){
        grade = 'A';
    }else if(avg>=85){
        grade = 'B+';
    }else if(avg>=80){
        grade = 'B';
    }else if(avg>=75){
        grade = 'C';
    }else{
        grade = 'F';
    }
    
    let res = `<html><body>이름 : ${query.name}<br>JAVA 점수 : ${query.java}<br>
    WEB 점수 : ${query.web}<br>IOT 점수 : ${query.iot}<br>Android 점수 : ${query.android}<br>
    평균 : ${avg}<br>등급 : ${grade}</body></html>`

    return res;

}