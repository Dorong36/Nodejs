exports.template = function(query){
    console.log("template 함수 호출!!!");
    
    let sum = "";

    for(let i=1; i<=9; i++){
        sum += `<tr><td>${query.cnt} * ${i} = ${parseInt(query.cnt)*i}</td></tr>`
    }

    let res = "<html><body><table border = '1'>" + sum + "</table></body></html>";

    return res;

}

