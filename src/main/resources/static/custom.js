let map;
let coords = {lat: 39.9612, lng: -82.9988}
function initMap() {
    map = new google.maps.Map(document.getElementById("map"),
        { center: coords,
        scrollwheel: false,
        zoom: 15
        }
    );
}

let image = {
    url: '/iphone.jpg',
    scaledSize: new google.maps.Size(50,50)
}
let marker = new google.maps.Marker(
    {
        position: coords,
        map: map,
        icon: image,
        animation: google.maps.Animation.BOUNCE
    }
);

let contentString = '<h2>' + city + ', ' + state + '</h2>';

let infoWindow = new google.maps.InfoWindow({
    content: contentString
});

google.maps.event.addListern(marker, click, function() {
    infoWindow.open(map, marker);
})