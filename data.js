/* data conversion 
type conversion */
let num =5;
console.log(num,typeof(num));
let num1 =string(num);
console.log(num1 , typeof(num1));
/* coersion */
let x;
console.log(x,typeof x);
x=7;
console.log(x, typeof x );
x= x + " ";
console.log(x, typeof x);

x =x-5;
console.log(x, typeof x);

x=!x;
console.log(x, typeof x);
console.log(boolean(7));
console.log(boolean(0));