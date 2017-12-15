var initialize = function(){

  var mapDiv = document.getElementById('main-map');
  // latLong = country.latlng;
  var center = { lat: 0, lng: 0 };

  let mainMap = new MapWrapper(mapDiv, center, 5);

  const handleSelect = function() {
   const countryIndex = this.value;
   const country = countries[countryIndex];

   displayImage(countryIndex);
   displayDetails(countryIndex);
   var center = { lat: country.latlng[0], lng: country.latlng[1] };
   mainMap.setLocation(center);
   mainMap.addMarker(center)
  };

  const countriesList = document.querySelector('#countries-list');

   countriesList.addEventListener('change', handleSelect);

  // mainMap.addMarker(center);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, "Start spreadin' the news, I'm leavin' today <br>I want to be a part of it <br> <b>New York, New York</b>");

  var findLocation = function(){
    mainMap.geoLocate();
  }
}

window.addEventListener('load', initialize);
