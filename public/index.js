var app = function(){
 const url = 'https://restcountries.eu/rest/v2/all';
 makeRequest(url, requestComplete);
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

populateList(countries);
}

const populateList = function(countries) {
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



document.addEventListener('DOMContentLoaded', app);
