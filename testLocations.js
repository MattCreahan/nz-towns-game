const towns = [{
        name: 'Auckland',
        lat: -36.8509,
        long: 174.7645,
        population: 1657000,
        isFound: false
    },
    {
        name: 'Christchurch',
        lat: -43.5320,
        long: 172.6306,
        population: 381500,
        isFound: false
    }
];

let numCorrect = 0;

function checkInput() {
    const input = document.getElementById('townInput').value;
    const townObject = towns.find(town => town.name.toLowerCase() === input.toLowerCase());
    if (!(townObject==null) && !townObject.isFound) {
        townObject.isFound = true;
        clearInputBox();
        addMarker(townObject);
        incrementScore();
    }
}

function clearInputBox() {
    document.getElementById('townInput').value = '';
}

function addMarker(townObject) {
    const lngLat = [townObject.long, townObject.lat];
    const popup = new mapboxgl.Popup({
        closeButton: false
    });
    popup.setLngLat(lngLat).setHTML(generateDescription(townObject));
    const marker = new mapboxgl.Marker({
        color: '#5E9E3E'
    }).setLngLat(lngLat).setPopup(popup);
    marker.addTo(map);
}

function generateDescription(townObject) {
    return `<p class='popup'>${townObject.name}</p><p class='popup'>Population: ${townObject.population}</p>`;
}

function incrementScore() {
    document.getElementById('score').innerHTML = `You have named ${++numCorrect} ${numCorrect > 1 ? 'towns/cities' : 'town/city'}!`;
}