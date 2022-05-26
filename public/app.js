                                                            //    START OF CODE

                                                    //    Question no 1

var a ;
 var a = prompt ( "Please enter a number" );

if (a === "3" || a === "6" || a === "9" || a ==="12" || a ==="15") {
      alert ( "Divisible by 3" );
}
else if (a !== "2" || a !== "5" || a !== "8") {
      alert ( "Not divisible by 3" );
}
                                                // Question no 2

var b ;
b = prompt( "Please enter a number" );
if (b === "1" || b === "3" || b === "5" || b === "7" || b === "9") {
  alert ( "It is an odd number" );
}
else if (b === "0" || b === "2" || b === "4" || b === "6" || b === "8" || b ==="10") {
  alert ( "it is an even number" );
}
                                              // Question no 3

var age ;
age = prompt ( "Please enter your age" );
if (age >= 20) {
  alert ( "You are Aged" );
}
else if (age < 18) {
  alert ( "You are Young" );
}
                                             // Question no 4

alert("Please identify yourself");
var names ;
names = prompt("Enter your first name");
if (names === "FAHAD" || names === "Fahad" || names === "fahad") {
  alert("Hello Fahad! How are you doing?");
}
else if (names !=="Hey" || n !=="Hey there" || n !=="Hello") {
    alert ( "Hey There! How are you?" ) 
}               
                                             // Question no 5  

var time ;
time = prompt("Please enter time in region format");
if (time >= "0600" && time < "1200") {
  alert ("Good Morning");
}
else if (time >= "1200" && time < "1700") {
  alert ("Good Afternoon");
}
else if (time >= "1700" && time < "2100") {
  alert ("Good Evening");
}
else {
  alert ("Good Night");
}
                                             // Question no 6

var birthyear ;
birthyear = prompt("Please enter your birth year");
if (birthyear === "2001" || birthyear === "2002" || birthyear === "2003" || birthyear === "2013" || birthyear === "2017" || birthyear === "2021") 
  alert ("You are born in leap year");

else if (birthyear !=="2000" || birthyear !=="2004" || birthyear !== "2008" || birthyear !== "2012" || birthyear !== "2015" || birthyear !== "2019"){
  alert ("You are not born in any leap year")
}
                                             // Question no 7

var password ;
password = prompt("Please enter your password");
if (password === "123456789") {
  alert ("The password you enter is correct!");
}
else {
  alert ("Incorrect password! check your password again") 
}
                                            // Question no 8

var negno ;
negno = prompt("Enter a number to check if its positive,negative,nuetral.");
if (negno > 0) {
  alert("Number is positive");
}
else if (negno === "0") {
  alert ("Number is neutral");
}
else if (negno === "-1"){
  alert ("Number is negative");
}
                                    //    Question no 9

alert ("Identify that alphabet is vowel or not");
var vowel ;
vowel = prompt("Enter an alphabet");
if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
  alert ("It is a vowel");
}
else {
  alert ("It is not a vowel");
}
                                // Question no 10
                                
alert ("Check your age according to operator");
var age ;
age = prompt("enter your age");
if (age >= 18) {
  alert("Old Enough");
}
else if (age < 18) {
  alert ("Too Young");
}
alert ("Thank you for your Input")
                                                                 // END OF CODE