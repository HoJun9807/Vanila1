function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng)

}
function onGeoError(){
    alert("Can't find you. No weather for yoy.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

//https://api.openweathermap.org/data/2.5/weather?lat=37.6641656&lon=127.0460668&appid=02727a7acd967b05c2c0a4b56542558c