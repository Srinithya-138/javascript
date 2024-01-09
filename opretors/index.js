let a=6;
let b=3;
console.log("a  =",a ," & b = ",b);
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b);

console.log("a++ =",a++);
console.log("++a= ",++a);
console.log("a*=4",a*=4);
console.log("a+=4",a+=4);

console.log("a==b",a==b);
console.log("a!=b",a!=b);

let c = 5;//num
let d="5";//string
let e=2;
console.log("c==d",c==d);//it checks only for the number and not for the datatype
console.log("c===d",c===d);
console.log("c>d",c>d);
console.log("c<d",c<d);
console.log("c>e",c>e);

let f = 5;
let g=2;
let h=f>g;
let i=f===3;
console.log( "h&&i is ",h&&i);
console.log( "h||i is ",h||i);
console.log("!(5<3)",!(5<3));

let age =18;
let res=age>=18?"adult":"not adult";
console.log(res);