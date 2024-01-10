let age=22;
if(age>18){
    console.log("you are eligible to vote");
}
else{
    console.log("you are not eligible to vote");
}

if(age%2===0){
    console.log("even");
}
else{
    console.log("odd");
}

if(age<18){
    console.log("junior");
}else if(age>65){
    console.log("senior");
}else{
    console.log("middle");
}

let ae =18;
//let res=ae>=18?"adult":"not adult";
//console.log(res);
console.log(res=ae>=18?"adult":"not adult");


let num=prompt("enter the number you want");
if (num%5==0){
    console.log(num,"is divisible");
}else{
    console.log(num,"not divisible");
}

let marks=prompt("enter YOUR marks");

if(marks>=80&&marks<=100){
    console.log("A grade");
}
else if(marks>=70&&marks<=89){
    console.log("B grade");
}
else if(marks>=60&&marks<=69){
    console.log("C grade");
}
else if(marks>=50&&marks<=59){
    console.log("D grade");
}
else if (marks>=0&&marks<=49){//we are giving condition here so we have to use the if part if there is no condition then we can simply put else without condition
    console.log("F grade");
}
   


    
