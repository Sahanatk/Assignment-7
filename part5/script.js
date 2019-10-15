/*eslint-env browser*/


/*function myMessage(){
      "use strict";
    window.alert("I have been clicked");
}*/

/*var samp = window.document.getElementById("myButton");
samp.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};*/

/*document.getElementById("myButton").addEventListener("click", function(){ 
"use strict";
window.alert("I have been clicked");
});*/
function myFunc(x,calback){
    callback(x);
}
myFunc(2,function(){
    document.getElementById("myButton").addEventListener("click", function(){ 
    "use strict";
    window.alert("I have been clicked");
});
});