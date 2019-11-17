// Map via Mapbox GL

mapboxgl.accessToken = 'pk.eyJ1IjoicmVlY2UtcmljYWRvIiwiYSI6ImNrMHg3Mnp6YjAzbGkzY2xka2VlYzNzZHQifQ.uSiRT3i5yczpbpBFv4M7yw';



var _map = null;

// THIS IS WHERE MY GEOJSON DATAGOES

var geoJson1 = {
  "id": "route",
  "type": "line",
  "source": {
    "type": "geojson",
    "data": {
      "type": "Feature",
      "properties":  {
        "color": '#F7455D', // red
        "stroke": "#22aa00",
        "stroke-width": 5,
        "stroke-opacity": 1
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            174.7673535346985,
            -36.8661800475971
          ],
          [
            174.76364135742188,
            -36.86717572554445
          ],
          [
            174.761860370636,
            -36.86717572554445
          ],
          [
            174.76145267486572,
            -36.866094212683784
          ],
          [
            174.76059436798093,
            -36.8650985206424
          ],
          [
            174.7609806060791,
            -36.863759466059626
          ],
          [
            174.75926399230957,
            -36.86339894735485
          ]
        ]
      }
    }
  },
  "layout": {
    "line-join": "round",
    "line-cap": "round"
  },
  "paint": {
    //F7455D
    "line-color": "#008b00",
    "line-width": 8
  }
};

var geoJson2 = {
  "id": "route2",
  "type": "line",
  "source": {
    "type": "geojson",
    "data": {
      "type": "Feature",
      "properties":  {
        "color": '#F7455D', // red
        "stroke": "#22aa00",
        "stroke-width": 5,
        "stroke-opacity": 1
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            174.7673535346985,
            -36.8661800475971
          ],
          [
            174.76364135742188,
            -36.86717572554445
          ],
          [
            174.761860370636,
            -36.86717572554445
          ],
          [
            174.76145267486572,
            -36.866094212683784
          ],
          [
            174.76059436798093,
            -36.8650985206424
          ],
          [
            174.7609806060791,
            -36.863759466059626
          ],
          [
            174.75926399230957,
            -36.86339894735485
          ]
        ]
      }
    }
  },
  "layout": {
    "line-join": "round",
    "line-cap": "round"
  },
  "paint": {
    //F7455D
    "line-color": "#F7455D",
    "line-width": 8
  }
};

var rerouteJson = {
  "id": "route3",
  "type": "line",
  "source": {
    "type": "geojson",
    "data": {
      "type": "Feature",
      "properties":  {
        "color": '#F7455D', // red
        "stroke": "#22aa00",
        "stroke-width": 5,
        "stroke-opacity": 1
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            174.7673213481903,
            -36.86619721456819
          ],
          [
            174.76372718811035,
            -36.867244392510806
          ],
          [
            174.76346969604492,
            -36.86701264125201
          ],
          [
            174.76343750953674,
            -36.86671222190732
          ],
          [
            174.76408123970032,
            -36.864660755379866
          ],
          [
            174.76154923439026,
            -36.86412856678091
          ],
          [
            174.76086258888245,
            -36.86372513101818
          ],
          [
            174.75897431373596,
            -36.86334744454389
          ]
        ]
      }
    }
  },
  "layout": {
    "line-join": "round",
    "line-cap": "round"
  },
  "paint": {
    //F7455D
    "line-color": "#008b00",
    "line-width": 8
  }
};




























var _map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v9", //stylesheet location
  center: [174.761519, -36.8633955], // starting position
  zoom: 5 // starting zoom
});

_map.on('styledata', function () {
 
  // _map.on('mousemove', function (e) {
  //   document.getElementById('info').innerHTML =
  //   // e.lngLat is the longitude, latitude geographical position of the event
  //   JSON.stringify(e.lngLat.wrap());
  //   });
});

function addLayer(geoJson) {
  _map.addLayer(geoJson);
}


// geocoding
_map.addControl(new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
}));

// event handlers
_map.on("load", mapLoaded);
mapLoaded();




var geocoder = null;


function updateGeoJson2() {
  _map.removeLayer('route')
  addLayer(geoJson2);
  addDisruptionMarker();
}

function mapLoaded() {

  // do stuff here
  addLayer(geoJson1);
}

function addReroute() {
  //_map.removeLayer('route2')
  addLayer(rerouteJson);

}

function AddMarker() {
  flyToLocation();

  var img = document.createElement("img");
  img.setAttribute("src", "https://img.icons8.com/cotton/64/000000/tour-bus--v2.png");
  img.setAttribute("height", 64);
  img.setAttribute("width", 64);

  var el = document.createElement('div');
  el.className = 'marker';
  el.appendChild(img);

  var coordinatesValue = {};
  coordinatesValue.lat = -36.86550597383571;
  coordinatesValue.lng =  174.76585311066697;

  // add marker to map
  new mapboxgl.Marker(el)
    .setLngLat(coordinatesValue)
    .addTo(_map);
}

function addDisruptionMarker() {

  var img = document.createElement("img");
  img.setAttribute("src", "https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519791-101_Warning-512.png");
  img.setAttribute("height", 64);
  img.setAttribute("width", 64);

  var el = document.createElement('div');
  el.className = 'markerDisruptuion';
  el.appendChild(img);
   
  var coordinatesValue = {};
  coordinatesValue.lat = -36.866896498275494;
  coordinatesValue.lng =  174.76035994661083;

  // add marker to map
  new mapboxgl.Marker(el)
    .setLngLat(coordinatesValue)
    .addTo(_map);

    var toast = new iqwerty.toast.Toast();
    toast.setText('This is a basic toast message!')
    .show();


}

function flyToLocation() {

  _map.flyTo({
    center: [174.76335664460555,-36.867154],
    zoom: 15
    });
}