const mappakey = 'pk.pk.eyJ1IjoiZXhwZXJpbWVudGFsbW9iaWxlcGxheSIsImEiOiJja2p2Y2xydTIwN2s0MndvYWpmazB4M2IzIn0.q3CYZLs_taS8F7-pA1eF7g.6fZAUJL9xrsg5Mi-DHH-ZA';
const mappa = new cMappa('MapboxGL', mappakey);
const version = "21";
let myMap;
let canvas;
let myFont;

// Options for map
const options = {
  lat: 53.0793, // center in bremen
  lng: 8.8017,
  zoom: 0,
  style: 'mapbox://styles/mapbox/dark-v9',
  //style: 'mapbox://styles/mapbox/streets-v11',
  // style: 'mapbox://styles/rlfbckr/ckgtcdn6y0xc619p6xw4ncqtk',
  pitch: 0,
};        

let uid = gen_uid(); // unique brower/user id wird als db key benutze...
let name = "-"; // player name
let direction = -1; // wohin wird gekucked
let lat = -1; // wo bin ich
let long = -1;


function preLoad() {
  myFont = loadFont('Ligconsolata-Regular.otf'); // Eigene Font fehlt!
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textFont(myFont, 20);
  textSize(20);
  watchPosition(positionChanged); // gps callback
}

function draw() {
  drawPlayer();
  drawGui();
}

function drawPlayer() {
  clear();

  push();
  var mypos = myMap.latLngToPixel(lat, long);
  size = map(myMap.zoom(), 1, 6, 5, 7);
  noStroke();
  fill(255, 0, 255);
  ellipse(mypos.x, mypos.y, size, size);
  fill(255);

  if (player != null) {
    var keys = Object.keys(players);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      // console.log("Key: " + k + "   lat: " + players[k].lat + "   Name: " + players[k].long);
      if (k != uid) {
        // not myself
        var pos = myMap.latLngToPixel(players[k].lat, players[k].long);
        size = map(myMap.zoom(), 1, 6, 5, 7);
        noStroke();
        fill(0, 255, 255)
        ellipse(pos.x, pos.y, size, size);
        fill(255);
        text(players[k].name+"\nrotationZ = " + players[k].direction, pos.x + 20, pos.y);
        stroke(0, 255, 255);
        fill(0, 255, 255);
        if (players[k].direction != "") {
          let dirvec = createVector((cos(players[k].direction) * (size * 10)), (sin(players[k].direction) * (size * 10)));
          drawArrow(createVector(pos.x, pos.y), dirvec, 255);
        }
        stroke(255);
        for (var j = 0; j < keys.length; j++) {
          var ko = keys[j];
          if (ko != k) { // selfcheck
            var pos_other = myMap.latLngToPixel(players[ko].lat, players[ko].long);
            line(pos.x, pos.y, pos_other.x, pos_other.y);
          }
        }
      }
    }
  }
  pop();
}

function drawGui() {
  textSize(15);
  fill(0);
  noStroke();
  rect(0, (windowHeight * 0.90), windowWidth, windowHeight);
  noStroke();
  fill(255);
  var info = "version = " + version + "\ndirection = " + rotationZ + "\n";
  if (geoCheck() == true) {
    info += 'lat = ' + lat + '\nlong = ' + long;
  } else {
    info += 'no geo';
  }
  text(info, 30, (windowHeight * 0.90) + 20);
  stroke(0, 255, 0);
}

function positionChanged(position) {
  lat = position.latitude;
  long = position.longitude;
}

function updatePlayerData() {
  if (rotationZ != null) {
    direction = rotationZ;
  } else {
    direction = ""; // no gps
  }
}

function gen_uid() {
  /*
   erzeuge eine user id anhänig von bildschirmaufläsung; browser id, etc....
   https://pixelprivacy.com/resources/browser-fingerprinting/
   https://en.wikipedia.org/wiki/Device_fingerprint
  */
  var navigator_info = window.navigator;
  var screen_info = window.screen;
  var uid = navigator_info.mimeTypes.length;
  uid += navigator_info.userAgent.replace(/\D+/g, '');
  uid += navigator_info.plugins.length;
  uid += screen_info.height || '';
  uid += screen_info.width || '';
  uid += screen_info.pixelDepth || '';
  return uid;
}


  /*

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
  */

