let cities=["A","B","C","D"];
for(let city of cities){
    console.log(city)
}

for(let city of cities){
    console.log(city.toLowerCase());
}
let sum=0;
let marks=[85,97,44,37,76,60];
for(let mark of marks){
sum=sum+mark;
}
//console.log(sum);
let length=marks.length
let avg=sum/length;
console.log("average marks of students is ",avg);

// let i=0;
let prices=[250,645,300,900,50];
// for(let price of prices){
//     console.log(`price at index ${i}=${price}`)
//     let offer=price/10;
//     price=price-offer;
//     prices[i]=prices[i]-offer;
//     console.log(`value after offer =${price}`);
//     i++
// }

for(let i=0;i<prices.length;i++){
    let offer=prices[i]/10;
    prices[i]=prices[i]-offer;
   
}
console.log(`value after offer =${prices}`);

let num=[1,2,3,4,5,6];
console.log(num.slice(1,3));//deos not change with the original array
console.log(num)
console.log(num.splice(1,3,12,13,14));//here staring from 1 index it will delete totally 3 items and it is replaced with the nearby items
console.log(num);
