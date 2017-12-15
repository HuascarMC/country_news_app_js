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
}

document.addEventListener('DOMContentLoaded', app);
