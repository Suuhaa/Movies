let movies = [];
var nameValue=document.getElementById("name");
var emailValue=document.getElementById("email");
var ageValue=document.getElementById("age");
var phoneValue=document.getElementById("phone");
var passwordValue=document.getElementById("password");
var repasswordValue=document.getElementById("repassword");
var btn=document.getElementById("btn")
var navOptions=document.getElementsByClassName("nav-options");
var nowPlaying="https://api.themoviedb.org/3/movie/now_playing?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var pouplar="https://api.themoviedb.org/3/movie/popular?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var trinding="https://api.themoviedb.org/3/trending/all/day?api_key=b25208a1b964675a3a9228d44cee7ab8";
var topReated="https://api.themoviedb.org/3/movie/top_rated?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var upcoming="https://api.themoviedb.org/3/movie/upcoming?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var url="https://api.themoviedb.org/3/movie/now_playing?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var option="";

async function serachbyWord(text){
    let allResponse=await fetch(`https://api.themoviedb.org/3/search/movie?query=${text}&api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&include_adult=false`)
    let finalAll=await allResponse.json();
    movies=finalAll.results;
    displayMoive();

}

function serachTrending(text)
{
    let cartona=``;
    for(let i=0;i<movies.length;i++)
    {
        if(movies[i].title.toLowerCase().includes(text.toLowerCase())){
         cartona+=`<div class="col-md-4" >
         <div class="movie rounded  my-2">  
         <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}"  class=" img-fluid rounded w-100">
             <div class="layer">
              <div class="movie-info p-3"> 
                    <h2>${movies[i].title}</h2>
                    <p>${movies[i].overview}</p>
                    <p>rate:${movies[i].vote_average}</p>
                    <p>${movies[i].release_date}</p>
              </div> 
              </div>
         </div>
         </div>`
        }
        document.getElementById('serachResult').innerHTML=cartona;
    }
}

for(var i=0 ; i<navOptions.length;i++){
    navOptions[i].addEventListener("click", function(e) {
   option=e.target.innerHTML;
   if(option=="Now Playing")
   {
       url=nowPlaying;
       getMovies()
   }
   if(option=="Poupler")
   {
       url=pouplar;
       getMovies()
   }
   if(option=="Top Reated")
   {
       url=topReated;
       getMovies()
   }
   if(option=="Trending")
   {
       url=trinding;
       getMovies()
   }
   if(option=="up coming")
   {
       url=upcoming;
       getMovies()
   }
    
})};




function getMovies(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",url);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange",function(){
     
        if (httpRequest.readyState==4 && httpRequest.status==200) {
            movies=JSON.parse(httpRequest.response).results;
        }
        displayMoive();
    })
   
}


function displayMoive() {
    let moviesCartona = ``;
    for (let i = 0; i < movies.length; i++) {
        moviesCartona += `<div class="col-md-4" >
       <div class="movie rounded  my-2">  
       <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}"  class=" img-fluid rounded w-100">
           <div class="layer">
            <div class="movie-info p-3"> 
                  <h2>${movies[i].title}</h2>
                  <p>${movies[i].overview}</p>
                  <p>rate:${movies[i].vote_average}</p>
                  <p>${movies[i].release_date}</p>
            </div> 
            </div>
       </div>
       </div>`
    }
    document.getElementById('movieData').innerHTML = moviesCartona;

}




$("#movieData").hover(function(){
    if ($(".movie .movie-info").css("top") == "550px") {
        $(".movie .movie-info").animate({ "top": 0 }, 1000)
    }
    else {
        $(".movie .movie-info").animate({ "top": "550px" }, 1000)
    }
})
getMovies();


function nameValdition(){

  
    var nameRejex=/^([a-zA-Z]){50}$/;
    if(!nameRejex.test(nameValue.value)){
        $('#namealert').show();
        btn.disabled="true";
    }
    else{
        $('#namealert').hide();
        btn.removeAttribute("disabled");
    }
}

function ageValdition(){

  
    var ageRejex=/^[0-9]?[1-9]|[1-9]0$/;
    if(!ageRejex.test(ageValue.value)){
        $('#agealert').show();
        btn.disabled="true";
    }
    else{
        $('#agealert').hide();
        btn.removeAttribute("disabled");
    }
}

function phoneValdition(){

  
    var phoneRejex=/^0(1|2)[0-9]{9}$/;
    if(!phoneRejex.test(phoneValue.value)){
        $('#phonealert').show();
        btn.disabled="true";
    }
    else{
        $('#phonealert').hide();
        btn.removeAttribute("disabled");
    }
}

function passwordValdition(){

  
    var passwordRejex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!passwordRejex.test(passwordValue.value)){
        $('#passwordalert').show();
        btn.disabled="true";
    }
    else{
        $('#passwordalert').hide();
        btn.removeAttribute("disabled");
    }
}

function repasswordValdition(){

    if(repasswordValue.value==passwordValue.value){
        $('#repasswordalert').hide();
        btn.removeAttribute("disabled");
    }
    else{
        $('#repasswordalert').show();
        btn.disabled="true";
    }
}

function emailValdition(){

    var emailRejex=/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,3})$/;
    if(!emailRejex.test(emailValue.value)){
        $('#emailalert').show();
        btn.disabled="true";
    }
    else{
        $('#emailalert').hide();
        btn.removeAttribute("disabled");
    }
}
nameValue.onkeyup=function(){
    nameValdition();
}
ageValue.onkeyup=function(){
    ageValdition();
}
phoneValue.onkeyup=function(){
    phoneValdition();
}
passwordValue.onkeyup=function(){
    passwordValdition();
}
repasswordValue.onkeyup=function(){
    repasswordValdition();
}
emailValue.onkeyup=function(){
    emailValdition();
}

$(".menuicon").click(function(){
    let navwidth = $(".navlinks").outerWidth();
    if($(".nav").css("left")=="0px"){
        $(".nav").animate({"left":-navwidth},500)
        $(".menuicon ").toggleClass("fa fa-align-justify fa fa-align-justify fa-times");
        $(".nav a").animate({
            opacity: "0",
            paddingTop: "500px"
        },500)

    }
    else{
        $(".nav").animate({"left":0},500),
        $(".nav .option0").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 600),
        $(".nav .option1").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 700),
        $(".nav .option2").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 800),
        $(".nav .option3").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 900),
        $(".nav .option4").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1000),
        $(".nav .option5").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1100),
        $(".menuicon ").toggleClass("fa fa-align-justify fa fa-align-justify fa-times");
    }
 })