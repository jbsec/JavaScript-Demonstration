/*
var grade = "Premium";

switch ( grade ) {
	case "Regular":
		alert("It's $3.15");
		break;
	case "Premium":
		alert("It's $3.35");
		break;
	case "Diesel":
		alert("It's $3.47");
		break;
	default: 
		alert("That's not a valid grade");
}
*/

/*
function myFunction() {
	var a = 5;
	var b = 10;
	var c = 20;
	var d = a + b + c;
	alert("The value of d is: " + d);
}

myFunction();
*/

/*
function addTwoNumbers(a,b) {
	var result = a + b;
	return result;
}

var x = addTwoNumbers(5,10);
alert(x);
addTwoNumbers(500,100);
addTwoNumbers(5000, -2500);
*/

/*
var amount = 0;

// create the index
var i = 0;

//check the condition
while (i < 10) {
	amount = amount + 100;
	//increment index
	i++;
}

alert("The value is " + amount);
*/

/*
var myArray = [500,500,500,500,500];

var total = 0;

for ( var i = 0 ; i < myArray.length ; i++ ) {
	// add the current element to the total
	total = total + myArray[i];
}

// after we are done with the loop 
alert("The total is: " + total);
*/

/*
var headline = document.getElementById("mainHeading");

headline.onclick = function() {
	headline.innerHTML = "You clicked the headline.";
};
*/

/*
//define several functions
function firstFunction(){
	secondFunction();
}
function secondFunction(){
	thirdFunction();
}
function thirdFunction(){
	fourthFunction();
}
function fourthFunction(){
	headline.innerHTML = "You clicked the headline!";
}

// grab the headline element

var headline = document.getElementById("mainHeading");

// add a click event handler

headline.onclick = function() {
		firstFunction(); 
};
*/

