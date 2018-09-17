var position = document.getElementById("curLocId")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(myPosition) {
        var latitude = myPosition.coords.latitude
        var longitude = myPosition.coords.longitude
        var altitude = myPosition.coords.altitude
        var speed = myPosition.coords.speed

        var positionString = latitude + ":" + longitude + "<br>" + ":" + altitude + ":" + speed;

        position.innerHTML = positionString
    })
}