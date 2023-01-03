$(function () { 
  getLocation();

})

function getLocation(){
    //檢查有沒有geolocation
    if(navigator.geolocation == undefined){
        alert("找不到地理位置");
        return;
    }
    let settings = {
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(result,error,settings);

}

function result(position){
    
    let thisCoords = position.coords;
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
    // window.location.href = `https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
}   
function error(err){
    alert(err);
}