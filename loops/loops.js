// let sum=0;
// for(let i=1;i<=5;i++){
//      sum=sum+i;
// }
// console.log(sum);

let i=1;
 let sum=0;
 while(i<=5){
    sum=sum+i;
    i++;
    console.log(sum);
 } 


do{
    console.log("hello world");
}while(i<0);

let sum1=0;

do{
   
    sum1=sum1+i;
    i++;
    console.log(sum);
}while(i<=5);

let size=0;
let str="srinithya"
for(let i of str){
    console.log("i = ",i);
    size++;
}
console.log("string size is ",size);

let student={
    name:"srinithya",
    age:22,
    cgpa:9,
    isPass:true
};
for(let key in student){
    console.log("key : ",key,"value is :",student[key]);
}
//let str="srinithya";
let sie=str.length;//it is getting ffrom line 30
console.log(sie)
console.log(str[2]);

let obj={
    price:10,
    value:"pen",
};

let output=`the price of ${obj.value} is ${obj.price}`;//here 10 is not highlighted
console.log(output);
console.log("the price of",obj.value,"is",obj.price);//here 10 is highlighted