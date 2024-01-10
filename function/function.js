// let function countVowels(str)=>{
//     let count=0;
//      for(const char of str){
//         if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
//             count++;
//         }
//      }
//      return count;
// }
// countVowels(srinithya);
// function redmi(){
//     console.log("this is redmi");
// }
// redmi();
// let a=10;
// let b=12;
// function add(){
//     console.log(a+b);
// }
// add();
// function area(l,b){
//     console.log(l*b);
// }
// area(1,5);
// let arrmul=(a,b)=>{
// return a*b;
// }
// console.log(arrmul(4,5));

const arro=(a,b)=>{
    console.log(a*b);
}
arro(3,4);
const arrow=(a,b)=>{
    return a*b;
}
console.log(arrow(1,5));
function input(str){
    let count=0;
    for (let char of str){
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
           count++;
        }
    }
    console.log(count);
}
input("aejh");

let countVowels=(str)=>{
    let count=0;
    for(let char of str){
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            count++;
         }  
    }
    return count;
}
console.log(countVowels("srinithya"))