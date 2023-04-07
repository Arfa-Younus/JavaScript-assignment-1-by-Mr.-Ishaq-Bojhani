//5.	Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade

let marks =[90,99,98,96,94,97]
let total = 0;
for(let num of marks)
{
total += num;
}
let avg = total/marks.length;
let grade;
if (avg<60){
  grade =  "F";
}
if (avg<70){
  grade =  "D";
}
if (avg<80){
  grade =  "C";
}
if (avg<90){
  grade =  "B";
}
else{
  grade = "A"
}
console.log("average marks is: " + avg);
console.log("grade is: " + grade);