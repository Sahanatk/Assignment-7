/*eslint-env browser*/
//rock,scissors,paper game
function playgame(){
    var autostr;
    var choice;
    var auto = Math.floor(Math.random() * 3) + 1  ;
    window.alert("I played my turn");
    choice = window.prompt("Enter your choice(rock,scissors or paper)");
   // var auto1 =(Math.floor(Math.random())*10);
    document.write(auto);
    if(auto == 1) {
        autostr = "rock";
    } else if(auto == 2) {
        autostr = "paper";
    } else if(auto == 3) {
        autostr = "scissors";
    }
   if(choice == "rock" && autostr == "paper"){
            window.alert("computer wins!!");
           exit();}
        else if(choice == "paper" && autostr == "scissors"){
            window.alert("computer wins!!");
          exit();}
        else if(choice == "rock" && autostr == "scissors"){
            window.alert("user wins!!");
           exit();}
        else if(choice == "paper" && autostr == "rock"){
            window.alert("user wins!!");
            exit();}
        else if(choice == "scissors" && autostr == "paper"){
            window.alert("user wins!!");
           exit();}
        else if(choice == "scissors" && autostr == "rock"){
            window.alert("computer wins!!");
           exit();}
        else if(choice == autostr){
            window.alert("Its a draw");
            exit();}
        else {
            window.alert("You can't enter other than the three options!/null values");
           exit();
    }
}
function main(){
    "use strict";
    alert("Welcome to the rock,paper,scissors game");
    playgame();
  
}

function exit(){
      var choice = "y";
    choice = window.prompt("Do you want to continue the game (y/n)");
    if(choice == "y"){
         playgame();
    }
    window.alert("Hope you really enjoyed it.Thanks for playing!!");
}

main();
