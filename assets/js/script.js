var citySearchEl = document.querySelector(".textBox");
var searchButton = document.querySelector("#searchBtn")
var resultContentEl = document.querySelector("#result-content");
var resultTextEl = document.querySelector("#result-text");

var APIKey = "b2972dde250b34760d86f87c6e7c4c49";

//var formSubmitHandler = function (event){
  //  event.preventDefault();
    //var cityName = citySearchEl.nodeValue.trim();

    //if(cityName){}
//}


var weather =  {
    getWeather: function(citySearchEl){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+citySearchEl+"&appid=" +APIKey)
    .then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
                displayWeather(data);;
            });
        }else{
            alert('Error: ' + response.statusText);
        }
    });
    },    
};
var displayWeather = function(data){
    const {name} = data;
    const {temp,humidity} = data.main;
    const {speed} = data.wind;
    console.log(name, humidity, speed);
    document.querySelector("#city-name").innerHTML = name;

}


    
        