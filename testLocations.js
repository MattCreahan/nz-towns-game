const towns = [{
        Name: 'Auckland',
        lat: -36.8509,
        long: 174.7645,
        population: 1657000
    },
    {
        Name: 'Christchurch',
        lat: -43.5320,
        long: 172.6306,
        population: 381500
    }
];

function checkInput() {
    const input = document.getElementById('townInput').value;
    if (isValidTown(input)) {
        console.log(`${input} is a valid town!`);
        document.getElementById('townInput').value = '';
    }
}

function isValidTown(input) {
    return towns.some(town => town['Name'].toLowerCase() === input.toLowerCase());
}