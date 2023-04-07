//3.Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console
let num1= Number(prompt("enter first number"));
let num2= Number(prompt("enter second number"));
let num3= Number(prompt("enter third number"));
let num4= Number(prompt("enter forth number"));
let num5= Number(prompt("enter fifth number"));
let largestNum = num1;
if(largestNum<num2){
    largestNum=num2;
}
if(largestNum<num3){
    largestNum=num3;
}
if(largestNum<num4){
    largestNum=num4;
}
if(largestNum<num5){
    largestNum=num5;
}
console.log("the largest number from all number that you have given is : " + largestNum);
