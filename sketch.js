
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135,206,250);
}

let map;

function initMap() {
  // Map options
  var options = {
    zoom: 16,
    center: { lat: 53.075801, lng: 8.807000},
    mapTypeId: 'terrain'
  }

  // New map
  var map = new
  google.maps.Map(document.getElementById("map"), options);

  /*
  //info fenster geolocation
  var infoWindow = new google.maps.InfoWindow({map: map});

  //get geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');

  */

  // Array of markers
  var markers = [
    // Marker Roland
    {
      coords:{lat: 53.075902515451865, lng: 8.807305771833713}, 
      iconImage: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
      // Marker Roland Tipp 1
      {
        coords:{lat: 53.07472, lng: 8.80499}, 
        iconImage: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      },
      // Marker Roland Tipp 2
      {
        coords:{lat: 53.0735, lng: 8.81277}, 
        iconImage: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      },
      // Marker Roland Tipp 3
      {
        coords:{lat: 53.07532, lng: 8.80301}, 
        iconImage: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      },
  ];

  //Der erste grüne tipp
  const markerg1 = new google.maps.Marker({
    position: {lat: 53.07472, lng: 8.80499},
    map,
    title: "Grüner Tipp 1",
  });

  const gtipp1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tipp 1</h1>' +
    '<div id="bodyContent">' +
    "<p>Das ist der erste Tipp für das grüne Ziel</p>" + +
    "</div>" +
    "</div>";

  const windowgtipp1 = new google.maps.InfoWindow({
    content: gtipp1,
  });

  markerg1.addListener("click", () => {
    windowgtipp1.open(map, markerg1);
  });
  
  //Der zweite grüe tipp
  const markerg2 = new google.maps.Marker({
    position: {lat: 53.0735, lng: 8.81277},
    map,
    title: "Grüner Tipp 2",
  });

  const gtipp2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tipp 2</h1>' +
    '<div id="bodyContent">' +
    "<p>Das ist der zweite Tipp für das grüne Ziel</p>" + +
    "</div>" +
    "</div>";

  const windowgtipp2 = new google.maps.InfoWindow({
    content: gtipp2,
  });

  markerg2.addListener("click", () => {
    windowgtipp2.open(map, markerg2);
  });

  //Der dritte grüe tipp
  const markerg3 = new google.maps.Marker({
    position: {lat: 53.07532, lng: 8.80301},
    map,
    title: "Grüner Tipp 2",
  });

  const gtipp3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tipp 3</h1>' +
    '<div id="bodyContent">' +
    "<p>Das ist der dritte Tipp für das grüne Ziel</p>" + +
    "</div>" +
    "</div>";

  const windowgtipp3 = new google.maps.InfoWindow({
    content: gtipp3,
  });

  markerg3.addListener("click", () => {
    windowgtipp3.open(map, markerg3);
  });

  
}