let cityData = [
    { name: "", lat: "", lon: "" },
    { name: "台北", lat: 25.0856513, lon: 121.421409 },
    { name: "台中", lat: 24.1852333, lon: 120.4946381 },
    { name: "高雄", lat: 22.7000444, lon: 120.0508691 },
];
    let weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey = "3733351d6bb6a1c22ab18ecbbd089b72";

    let params = {
        appid: weatherMapAPIKey,
        units: 'metric',
        lang: 'zh_tw'
    };

$(function(){
    for(let x=0;x<cityData.length;x++){
        $("#citySelect").append(`<option value='${x}'>${cityData[x].name}</option>`);
    }
    $("#citySelect").on("change",loadServerData);
    $("button").on("click",loadServerData);
    

});




function loadServerData(){


    $("#result").empty();
    if(this.id=="currentLocationBtn"){
        $("#citySelect").val(0);
        if (navigator.geolocation == undefined) {
            alert("Fail to get location");
            return;
        }
        let settings = {
            enableHighAccuracy: true
        };
        navigator.geolocation.getCurrentPosition(result, error, settings);

    }else{
        if (this.value == 0) return;
        console.log("choose city");
        params.lat = cityData[this.value].lat;
        params.lon = cityData[this.value].lon;
        getLocation(weatherAPI_URL, params);
    }
    
    
}



function result(position){
    
    let thisCoords = position.coords;
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);

    
    params.lat = thisCoords.latitude;
    params.lon = thisCoords.longitude;

    getLocation(weatherAPI_URL, params);
    
}   
function error(err){
    alert(err);
}

function getLocation(weatherAPI_URL, params){

    $.getJSON(weatherAPI_URL, params
    )
    .done(function(data){
        $("#result").append(`<p>氣溫: ${data.main.temp_min} ~ ${data.main.temp_max}</p>`);
        $("#result").append(`<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`);
    })
    .fail(function(){ console.log("Error");})
    .always(function(){console.log("Always");});

}