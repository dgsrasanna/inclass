const num2 = Math.floor(Math.random()* 10+1);
console.log(num2);
let x=0;

function guess(){


    if(x<3){

const num1 = Number(document.getElementById('num1').value);
let result;


if(num1<num2){
    x++;

    result="too low. \n You have"+x+"left";


}else if(num1>num2){
    result="too high.\n You have"+x+"left";
    x++;


}else if (num1==num2){
    result="Your Guessing is correct.\n You have"+x+"left";
    x++;


}

document.getElementById('result').innerText = result;

    }else{
        document.getElementById('result').innerText = "Sorry! Your Attempt is Over";

    }




}

           

