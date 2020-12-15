
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

    mapTypeId: 'e97ae85210183977'

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

  //Das unsichtbare bild für Ziele
  const transparent = "transparent.png"
  
  //Das grüne Bild für Hinweise
  const greenpin = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";

  //Der erste grüne tipp
  const markerg1 = new google.maps.Marker({
    position: {lat: 53.07472, lng: 8.80499},
    map,
    title: "Grüner Tipp 1",
    icon: greenpin,
  });

  const gtipp1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tipp 1</h1>' +
    '<div id="bodyContent">' +
    "<p>Errichtet in 1404 steht es seitdem</p>" + +
    "</div>" +
    "</div>";

  const windowgtipp1 = new google.maps.InfoWindow({
    content: gtipp1,
  });

  markerg1.addListener("click", () => {
    windowgtipp1.open(map, markerg1);
  });
  
  //Der zweite grüne tipp
  const markerg2 = new google.maps.Marker({
    position: {lat: 53.0735, lng: 8.81277},
    map,
    title: "Grüner Tipp 2",
    icon: greenpin,
  });

  const gtipp2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tipp 2</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Auszug aus einem Gedicht von Friedrich Rückert:</b></p>" +
    "<p>______, der Ries', am</p>" +
    "<p>_______ zu Bremen</p>" +
    "<p>Steht er im Standbild</p>" +
    "<p>Standhaft und wacht.</p>" +
    "<p>______, der Ries', am</p>" +
    "<p>_______ zu Bremen,</p>" +
    "<p>Kämpfer einst Kaisers</p>" +
    "<p>Karls in der Schlacht.</p>" +
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
    title: "Grüner Tipp 3",
    icon: greenpin,
  });

  const gtipp3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Tipp 3</h1>' +
    '<div id="bodyContent">' +
    "<p>Gehe dem Ostwind entgegen und du wirst dein Ziel finden</p>" + +
    "</div>" +
    "</div>";

  const windowgtipp3 = new google.maps.InfoWindow({
    content: gtipp3,
  });

  markerg3.addListener("click", () => {
    windowgtipp3.open(map, markerg3);
  });

  //Das grüne Ziel
  const markergziel = new google.maps.Marker({
    position: {lat: 53.075902515451865, lng: 8.807305771833713},
    map,
    title: "Grüne Ziel",
    icon: transparent,
  });

  const gziel =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Grünes Ziel: Der Roland</h1>' +
    '<div id="bodyContent">' +
    "<p>Woohoo! (/ *o*)/</p>" + 
    "<p>Du hast dein Ziel gefunden! </p>" +
    "</div>" +
    "</div>";

  const windowgziel = new google.maps.InfoWindow({
    content: gziel,
  });

  markergziel.addListener("click", () => {
    windowgziel.open(map, markergziel);
  });

  
}
