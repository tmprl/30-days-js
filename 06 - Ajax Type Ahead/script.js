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
    const matchArray = findMatches(searchInput.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
            <span class = "name">${cityName}, ${place.state}</span>
            <span class = "population">${place.population}</span>
        </li>`;
    }).join('');
    suggestionInput.innerHTML = html;
}

const searchInput = document.querySelector('.search')
const suggestionInput = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayCities)
searchInput.addEventListener('keyup', displayCities)

