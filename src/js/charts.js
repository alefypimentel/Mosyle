var ctx = document.getElementById('userChart').getContext('2d');
var userChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Student', 'Teacher', 'Primary Leader', 'Location Leader', 'Leader', 'Staff', 'MSP Admin'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(25, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(25, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
    }
});

var ctx = document.getElementById('commandsChart').getContext('2d');
var commandsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Student', 'Teacher', 'Primary Leader', 'Location Leader', 'Leader', 'Staff', 'MSP Admin'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 5]
        }],
        fill: false,
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Sent Commands'
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }],
          xAxes: [{
						display: true,
					}],
      }
    }
});

