//question number 1
//1.	Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.
let firstNum = prompt("Enter First Number: ");
let secondNum = prompt("Enter Second Number: ");
if(firstNum>secondNum)
{
    console.log(firstNum +" is greater than " + secondNum );
}
else if(secondNum>firstNum)
{
    console.log(secondNum +" is greater than " + firstNum);
}
else
{
    console.log("both numbers are equal");
}

