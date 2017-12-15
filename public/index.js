var app = function(){
 const url = 'https://restcountries.eu/rest/v2/all';
 makeRequest(url, requestComplete);

 const dropMenu = document.querySelector('#countries-list');
 dropMenu.addEventListener('change', displayImage);
}

const makeRequest = function(url, callback) {
 const request = new XMLHttpRequest();

 request.open('GET', url);
 request.send();

 request.addEventListener('load', callback);
}

const requestComplete = function() {
 if(this.status !== 200) return;
 const jsonString = this.responseText;
 const countries = JSON.parse(jsonString);

populateDropMenu(countries);
}

const populateDropMenu = function(countries) {
 const countriesList = document.querySelector('#countries-list');
 countries.forEach(function(country) {

  const name = document.createElement('option');
  // const liRegion = document.createElement('option');
  // const liPopulation = document.createElement('option');

  name.innerHTML = country.name;
  name.value = country;
  // liRegion.innerText = country.region;
  // liPopulation.innerText = country.population;

  countriesList.appendChild(name);
  // liName.appendChild(liRegion);
  // liRegion.appendChild(liPopulation);

 });
}

const displayImage = function(country) {
 const flagContainer = document.querySelector('#flag');
 const flagImage = document.createElement('img');
 
 flagImage.src = country.flag;

 flagContainer.appendChild(flagImage);
}



document.addEventListener('DOMContentLoaded', app);
