
//question 1. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var student =  { 
    name : "raman raj", 
    sclass : "VI", 
    rollno : 12  };
  console.log(student);
  delete student.rollno;
  console.log(student);
  
 // Get the current date 
var today = new Date();
var day = today.getDay();

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is: " + daylist[day] + ".");

// Get the current time
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 
 
//Write a JavaScript program to get the current date.
var today = new Date();

var dd = today.getDate();

var mm = today.getMonth() + 1;

var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
} 

if (mm < 10) {
    mm = '0' + mm;
} 

today = mm + '-' + dd + '-' + yyyy;
console.log(today);

today = mm + '/' + dd + '/' + yyyy;
console.log(today);

today = dd + '-' + mm + '-' + yyyy;
console.log(today);

today = dd + '/' + mm + '/' + yyyy;
console.log(today); 


 //Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
 function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
  
  Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
  };
  
  var cyl = new Cylinder(7, 4);
 
  console.log('volume = ' + cyl.Volume().toFixed(4));

  //Write a JavaScript program to calculate circle area and perimeter.
  function circle(radius)
{
    this.radius = radius;

    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

//Check two given numbers and return true if one of the number is 50 or if their sum is 50

function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))
