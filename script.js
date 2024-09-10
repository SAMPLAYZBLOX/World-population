document.addEventListener("DOMContentLoaded", function() {
    const populationElement = document.getElementById('population-count');
    
    // Starting population as of now (rough estimate)
    let population = 8005176000;
    
    // Estimated population growth rate (2.4 people per second)
    const growthRatePerSecond = 2.4;

    // Function to update the population count
    function updatePopulation() {
        population += growthRatePerSecond;
        populationElement.innerText = Math.floor(population).toLocaleString('en-US');
    }

    // Update the population every second
    setInterval(updatePopulation, 1000);
});
