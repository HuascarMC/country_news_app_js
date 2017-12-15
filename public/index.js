let countries = [];
var app = function(){
 const url = 'https://restcountries.eu/rest/v2/all';
 makeRequest(url, requestComplete);

 const dropMenu = document.querySelector('#countries-list');
 dropMenu.addEventListener('change', handleSelect);
};

const makeRequest = function(url, callback) {
 const request = new XMLHttpRequest();

 request.open('GET', url);
 request.send();

 request.addEventListener('load', callback);
};

const requestComplete = function() {
 if(this.status !== 200) return;
 const jsonString = this.responseText;
 const countries = JSON.parse(jsonString);

populateDropMenu(countries);
};

const populateCountriesArray = function(country) {
 countries.push(country);
}

const populateDropMenu = function(countries) {
 const countriesList = document.querySelector('#countries-list');
 countries.forEach(function(country, index) {

  const name = document.createElement('option');

  name.innerHTML = country.name;
  name.value = index;

  countriesList.appendChild(name);

  populateCountriesArray(country);
 });
};

const handleSelect = function() {
 const countryIndex = this.value;
 displayImage(countryIndex);
 displayDetails(countryIndex);
};

const displayImage = function(index) {
 const flagContainer = document.querySelector('#flag');
 const flagImage = document.querySelector('img');

 flagImage.src = countries[index].flag;

};

const displayDetails = function(index) {
 const detailsContainer = document.querySelector('#details-list');
 const liName = document.querySelector('#name');
 const liRegion = document.querySelector('#region');
 const liPopulation = document.querySelector('#population');
 const liBorders = document.querySelector('#borders');

 console.log(countries[index].name);
 liName.innerHTML = countries[index].name;
 liRegion.innerHTML = countries[index].region;
 liPopulation.innerHTML = countries[index].population;
 liBorders.innerHTML = countries[index].borders;
}





document.addEventListener('DOMContentLoaded', app);
