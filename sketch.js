
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
    // Marker Schnoor
    {
      coords:{lat: 53.07320, lng: 8.81006},
      iconImage: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    },
      // Marker Schnoor Tipp 1
      {
        coords:{lat: 53.07366, lng: 8.80995},
        iconImage: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      },
      // Marker Schnoor Tipp 2
      {
        coords:{lat: 53.07384, lng: 8.80776},
        iconImage: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      },
      // Marker Schnoor Tipp 3
      {
        coords:{lat: 53.07112, lng: 8.8114},
         iconImage: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
       },
    // Marker Mühle
    {
      coords:{lat: 53.08022, lng: 8.80689},
      iconImage: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    },
      // Marker Mühle Tipp 1
       {
        coords:{lat: 53.07907, lng: 8.81116},
         iconImage: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
      },
      // Marker Mühle Tipp 2
      {
      coords:{lat: 53.07642, lng: 8.80949},
      iconImage: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
      },
      // Marker Mühle Tipp 3
       //{
       //coords:{lat: 53.07851, lng: 8.80457},
       //iconImage: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
       //}
        
  ];

  // loop through markers
  for(var i = 0; i < markers.length; i++){
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position: props.coords,
      map:map,
      animation: google.maps.Animation.DROP,
      //icon:props.iconImage 
    });

    // Check for custom icon
    if(props.iconImage){
     // Set icon image
      marker.setIcon(props.iconImage);
    }
  }

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: {lat: 53.07851, lng: 8.80457},
    map,
    title: "Marker Mühle Tipp 3",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}