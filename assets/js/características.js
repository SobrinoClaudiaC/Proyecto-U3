
const ctx = document.getElementById('myChart')
const areas = ['Player´s House','Ancient Egytp','Wild West','Pirate Seas','Big Wave Beach','Far future','Neon Mixtape Tour','Lost City','Dark Ages','Jurassic Marsh','Modern Day','Frosbit Caves']
const niveles = [5, 25, 25, 25, 32, 25,32,32,20,32,34,30]

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: areas,
        datasets: [{
            label: 'Niveles',
            data: niveles,
            backgroundColor: [
              'rgba(255, 99, 132, 9.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(225, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
        }]
    }
})