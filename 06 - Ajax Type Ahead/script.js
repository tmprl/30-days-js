const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
      .then(blob => blob.json())
      .then(data => cities = data)

function findMatches(wordToFind, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToFind, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayCities() {
    console.log(this.value);
}

const searchInput = document.querySelector('.search')
const suggestionInput = document.querySelector('.suggestions')

searchInput.addEventListener('change',findMatches)

