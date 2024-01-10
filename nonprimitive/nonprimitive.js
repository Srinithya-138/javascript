let student={
    fullName:"srinithya",age:22,cgpa:9,isPass:true //if we want to change the object we hace to change the full collection.only by changing the name the object does not change .
    //to change the object and become error free we have to change the address in the memory 
    // we cannot change the const var but we can change the key .to change the object we have to change the collections 
};
console.log(student);
console.log(student["cgpa"]);
console.log(student.fullName);

student["age"]=student["age"]+1;//here we have to change the object and address in the memory to become error free 
console.log(student.age);