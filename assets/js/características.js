document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const areas = ['Player´s House', 'Ancient Egypt-Wild West-Pirate Seas-Far Future', 'Big Wave Beach-Lost City-Jurassic Marsh', 'Dark Ages', 'Modern Day', 'Frostbite Caves'];
    const niveles = [5, 25, 32, 20, 34, 30];

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: areas,
            datasets: [{
                label: 'Niveles',
                data: niveles,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(225, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ]
                
                
            }]
        }
        
        
    });
});