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

const populateDropMenu = function(countries) {
 const countriesList = document.querySelector('#countries-list');
 countries.forEach(function(country, index) {

  const name = document.createElement('option');

  name.innerHTML = country.name;
  name.value = index;

  countriesList.appendChild(name);
 });
};

const populateCountriesArray = function(country) {
 countries.push(country);
}

const handleSelect = function() {
 displayImage();
};



const displayImage = function() {
 const flagContainer = document.querySelector('#flag');
 const flagImage = document.createElement('img');

 flagImage.src = countries[this.value].flag;

 flagContainer.appendChild(flagImage);
};





document.addEventListener('DOMContentLoaded', app);
