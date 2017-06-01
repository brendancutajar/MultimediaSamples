var App = (function(){
    
    var errorPosition = function(error){
        console.error(error)
        alert("Could not get current position");
    };
    var geoOptions = {enableHighAccuracy:true, maximumAge:3000, timeout:5000};
    var watchId = null;
    var initialize =function(){
        navigator.geolocation.getCurrentPosition(function(position){
            var elem = document.getElementById("initial-position");
            elem.innerText = "Longitude: " + position.coords.longitude + ", Latitude: " + position.coords.latitude + ", Accuracy: " + position.coords.accuracy;
        }, errorPosition, geoOptions );

        watchId = navigator.geolocation.watchPosition(function(position){
            var elem = document.getElementById("current-position");
            elem.innerText = "Longitude: " + position.coords.longitude + ", Latitude: " + position.coords.latitude;
        });

        var btnClearWatch = document.getElementById("clear-watch");
        btnClearWatch.addEventListener("click", function(event){
            if(watchId){
                navigator.geolocation.clearWatch(watchId);
                watchId = null;
            }
        })
    }
    
    
    window.onload = initialize;
})();300