var app = function(){

}

const makeRequest = function(url, callback) {
 const request = new XMLHttpRequest();

 const url = 'https://restcountries.eu/rest/v2/all';

 request.open('GET', url);
 request.send();

 request.addEventListener('load', callback);
}



document.addEventListener('DOMContentLoaded', app);
