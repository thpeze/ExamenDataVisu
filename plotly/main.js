function sortByCountryPopulation(data) {
    return data.sort((a, b) => a.population - b.population);
}

function runVisualization(data) {
    const sortedData = sortByCountryPopulation(data);

    const top30Countries = sortedData.slice(-30);

    const countries = top30Countries.map(country => country.country);
    const populations = top30Countries.map(country => country.population);

    const trace = {
        x: countries,
        y: populations,
        type: 'bar'
    };

    const layout = {
        title: 'Data distribution of countries population',
        xaxis: {
            title: 'Country',
            tickangle: -45
        },
        yaxis: {
            title: 'Population'
        }
    };

    Plotly.newPlot('chart', [trace], layout);
}

fetch('data.json')
    .then(response => response.json())
    .then(data => runVisualization(data))
    .catch(error => console.error('Error loading data:', error));