const fs = require('fs');
fs.readFile('arquivo.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    const dados= data.toString();
    const [numb1,numb2]= dados.split(',');
     const num1= parseInt(numb1);
     const num2= parseInt(numb2);
    var resultado = num1+num2;
    console.log("o resultado é: "+resultado);
})