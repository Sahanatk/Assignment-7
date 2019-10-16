/*eslint-env browser*/

function main(){
    "use strict";
    displayMenu();
    var command;
    var inventory =[
                    [1234,"Trousers",2,'$30.99'],
                    [4328,"Blanket",1,'$15.99'],
                    [7329,"Jumpsuits",3,'$20.50'],
                    [6851,"Jeans",4,'$20.99'],     
                    [8923,"T-shirts",6,'$30.99']
                    ];
    for(;;){
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                show(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
     window.console.log("Program terminated.");
}

function displayMenu(){
    "use strict";
    window.console.log("Welcome to Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - view all products");
    window.console.log("update - update an existing product");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function show(inventory){
    "use strict";
    inventory.forEach(function (item){
        window.console.log(item[0] + " " + item[1] + " " + item[2] + " " + item[3]);
    });
}

function update(inventory){
    "use strict";
    var skuno,quant;
    skuno = window.prompt("Enter a sku number to update the product");
    quant = window.prompt("Enter a new quantity");
    inventory.forEach(function(item){
        if(skuno == item[0]){
           item[2]  = quant;
        }
    });
    window.console.log("");
    window.console.log("Product " +skuno + " has been updated");
    window.console.log("");
}

main();


