var city = "India";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=imperial&appid=eec4cd3363da05da6ef51456a5c59250", function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" +data.weather[0].icon+ ".png";
    var weather = data.weather[0].main;
    var temp = Math.floor(data.main.temp);

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
});