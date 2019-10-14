/*eslint-env browser*/
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
