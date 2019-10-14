/*eslint-env browser*/


//Arrays
/*var myarr = ["3 Idiots","Joker","God Father","Lord of the Rings","Dark Knight"];
var res = myarr[1];
window.console.log(res);*/

//constructor arrays
var movies = [];
function samp(movies){
    movies[0]="3 Idiots";
    movies[1]="Joker";
    movies[2]="God Father";
    movies[3]="Lord of the Rings";
    movies[4]="Dark Knight";
}
var mySamp = new samp(5);
window.console.log(mySamp[1]);

