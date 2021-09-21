const towns = [{
        name: 'Auckland',
        lat: -36.8509,
        long: 174.7645,
        population: 1657000
    },
    {
        name: 'Christchurch',
        lat: -43.5320,
        long: 172.6306,
        population: 381500
    }
];

let numCorrect = 0;

function checkInput() {
    const input = document.getElementById('townInput').value;
    const townObject = towns.find(town => town.name.toLowerCase() === input.toLowerCase());
    if (!(townObject==null)) {
        clearInputBox();
        addMarker(townObject);
        incrementScore();
    }
}

function clearInputBox() {
    document.getElementById('townInput').value = '';
}

function addMarker(townObject) {
    const marker = new mapboxgl.Marker({
        color: '#5E9E3E'
    }).setLngLat([townObject.long, townObject.lat]);
    marker.addTo(map);
}

function incrementScore() {
    document.getElementById('score').innerHTML = `You have named ${++numCorrect} ${numCorrect > 1 ? 'towns/cities' : 'town/city'}!`;
}