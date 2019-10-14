/*eslint-env browser*/

//1.half-number

/*function halfNumber (number){
    var result = number / 2 ;
    window.console.log(" Half of " + number + " is " + result + ".");
} 
halfNumber(7);
halfNumber(8);
halfNumber(5);
halfNumber(3);*/


//2.Square-number
/*function squareNumber( number){
    var result = number * number;
    window.console.log(" The result of squaring the number " + number + " is " + result + ".");
}
squareNumber(3);
squareNumber(12);
squareNumber(25);
squareNumber(99);*/

//3.Percentage-of
/*function percentOf( num1,num2){
    var result = num1 / 100 * num2;
    window.console.log(result + " is " +num1 +"% of " + num2 + ".");
}
percentOf(25,5);
percentOf(50,4);
percentOf(75,9);
percentOf(15,40);*/

//find modulus
/*function findModulus( num1,num2){
    var res = num1 % num2 ;
   
    window.console.log(res +" is the modulus of " +num1 + " and " +num2 + "." );
}
findModulus(10,4);
findModulus(4,10);
findModulus(15,10);*/

//5.addition of prompted numbers
/*var inp = window.prompt("Enter the numbers seperated by comma");
var numArray = inp.split(",");
for (var i = 0 ; i < numArray.length; i += 1) {
    numArray[i] = +numArray[i];
}

function add(){
    var sum = 0 ;
    document.write("Inside function");
    document.write(arguments[0])
    for ( var i = 0 ; i < arguments.length; i += 1){
       sum = sum + arguments[i];
    }
    window.console.log("The sum of numbers is " +sum);
}
add(numArray);*/

//rock,scissors,paper game 


function playgame(){
    var autostr;
    var choice;
    var auto = Math.floor(Math.random());
    var auto1 =(Math.floor(Math.random())*10);
    document.write(auto);
    if(auto == 0 || auto == 1){
        var x = auto.toString();
        autostr = "rock";
        x = autostr; }
    else{
        var y = auto.toString();
        autostr = "paper";
        y = autostr;}
    if(auto1 > 1){
        var z = auto.toString();
        autostr = "scissors";
        z = autostr;}
    window.alert("I played my turn");
    while(true) {
        choice = window.prompt("Enter your choice(rock,scissors or paper)");
        if(choice == "rock" && autostr == "paper"){
            window.alert("computer wins!!");
            main();}
        else if(choice == "paper" && autostr == "scissors"){
            window.alert("computer wins!!");
            main();}
        else if(choice == "rock" && autostr == "scissors"){
            window.alert("user wins!!");
            main();}
        else if(choice == "paper" && autostr == "rock"){
            window.alert("user wins!!");
            main(); }
        else if(choice == "scissors" && autostr == "paper"){
            window.alert("user wins!!");
            main(); }
        else if(choice == "scissors" && autostr == "rock"){
            window.alert("computer wins!!");
            main(); }
        else if((choice == "paper" && autostr == "paper")||(choice == "rock" && autostr == "rock")||(choice == "scissors" && autostr == "scissors")){
            window.alert("Its a draw");
            main();}
        else if(choice == "something" && choice == ""){
            window.alert("You can't enter other than the three options!");
            main();
        }
    }
}
function main(){
    "use strict";
    alert("Welcome to the rock,paper,scissors game");
    var choice = "y";
    while(choice == "y"){
        choice = window.prompt("Do you want to continue the game (y/n)");
        playgame();
    }
    window.alert("Hope you really enjoyed it.Thanks for playing!!");
}


