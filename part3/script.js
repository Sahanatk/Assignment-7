/*eslint-env browser*/


//Program 1
/*var myarr = ["3 Idiots","Joker","God Father","Lord of the Rings","Dark Knight"];
var res = myarr[1];
window.console.log(res);*/

//Program 2
/*var movies = new Array(5);
movies[0] = "3 Idiots";
movies[1] = "God Father";
movies[2] = "Pursuit of happiness";
movies[3] = "Lord of the Rings";
movies[4] = "Dark Knight";
window.console.log(movies[1]);*/

//Program 3
/*var movies = new Array(5);
movies[0] = "3 Idiots";
movies[1] = "God Father";
movies[2] = "Pursuit of happiness";
movies[3] = "Lord of the Rings";
movies[4] = "Dark Knight";
movies.splice(2,0,'breaking Bad') ;
window.console.log(movies.length);
window.console.log(movies[2]);*/

//Program 4
/*var movies = [];
movies[0] = "3 Idiots";
movies[1] = "Pursuit of happiness";
movies[2] = "Lord of the Rings";
movies[3] = "Dark Knight";
movies[4] = "Breaking Bad";
delete movies[3];
window.console.log(movies);*/

//Program 5
/*var movies = [];
movies[0] = "3 Idiots";
movies[1] = "Pursuit of happiness";
movies[2] = "Lord of the Rings";
movies[3] = "Dark Knight";
movies[4] = "Breaking Bad";
movies[5] = "Toy Story";
movies[6] = "Ratatoullie";
for ( var i=0 ; i<movies.length; i+=1){
    window.console.log(movies[i]);
}*/

//Program 6
/*var movies = [];
movies[0] = "3 Idiots";
movies[1] = "Pursuit of happiness";
movies[2] = "Lord of the Rings";
movies[3] = "Dark Knight";
movies[4] = "Breaking Bad";
movies[5] = "Toy Story";
movies[6] = "Ratatoullie";
for (var items in movies ){
    window.console.log(movies[items]);
}*/

//Program 7
/*var movies = [];
movies[0] = "3 Idiots";
movies[1] = "Pursuit of happiness";
movies[2] = "Lord of the Rings";
movies[3] = "Dark Knight";
movies[4] = "Breaking Bad";
movies[5] = "Toy Story";
movies[6] = "Ratatoullie";
var sortArr = movies.sort();
for (var items in movies ){
    window.console.log(sortArr[items]);
}*/

//Program 8
/*var movies = [];
movies[0] = "3 Idiots";
movies[1] = "Pursuit of happiness";
movies[2] = "Lord of the Rings";
movies[3] = "Dark Knight";
movies[4] = "Breaking Bad";
movies[5] = "Toy Story";
movies[6] = "Ratatouille";
window.console.log("Movies i like:");
for ( var i=0 ; i<movies.length; i+=1){
    window.console.log(movies[i]);
}
var leastFavMovies = ["Dilwale","Godzilla","Gentleman"];
window.console.log("Movies i regret watching:");
var samp = leastFavMovies.splice(2,0,"<br>");
for ( var items = 0 ; items<leastFavMovies.length; items+=1){
    window.console.log(samp[items]);
}*/

//Program 9
/*var movies = [];
movies[0] = "3 Idiots";
movies[1] = "Pursuit of happiness";
movies[2] = "Lord of the Rings";
movies[3] = "Dark Knight";
movies[4] = "Breaking Bad";
movies[5] = "Toy Story";
movies[6] = "Ratatouille";
window.console.log("Movies i like:");
for ( var i=0 ; i<movies.length; i+=1){
    window.console.log(movies[i]);
}
window.console.log("<br>");
window.console.log("Movies i regret watching:");
var leastFavMovies = ["Dilwale","Godzilla","Gentleman"];
for ( var items = 0 ; items<leastFavMovies.length; items+=1){
    window.console.log(leastFavMovies[items]);
}
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies);*/

//Program 10
/*var movies = [];
movies[0] = "3 Idiots";
movies[1] = "Pursuit of happiness";
movies[2] = "Lord of the Rings";
movies[3] = "Dark Knight";
movies[4] = "Breaking Bad";
movies[5] = "Toy Story";
movies[6] = "Ratatouille";
var samp = movies.length -1 ;
window.console.log(movies[samp]);*/







