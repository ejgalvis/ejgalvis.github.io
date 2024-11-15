// Create content for scatter plot
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('myScatterChart').getContext('2d');
  const scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{
              label: 'Scatter Dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [{
                  x: -8,
                  y: 2.5
              },{
                  x: -7,
                  y: 1
              },{
                  x: -3,
                  y: -4
              },{
                  x: -9,
                  y: -1.5
              },{
                  x: -10,
                  y: 0
              }, {
                  x: 0,
                  y: 10
              }, {
                  x: 10,
                  y: 5
              }, {
                  x: 0.5,
                  y: 5.5
              }, {
                  x: 0.3,
                  y: 5.1
              }, {
                  x: 0.1,
                  y: 0.5
              }, {
                  x: 2.5,
                  y: 4.5
              }]
          }]
      },
      options: {
        responsive: true,  // Make sure chart is responsive
        maintainAspectRatio: false,  // Adjust aspect ratio according to the size of container
          scales: {
              x: {
                  type: 'linear',
                  position: 'bottom'
              }
          }
      }
  });
});

// Create content for bar chart
document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('myBarChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'],
          datasets: [{
              label: 'Number of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(255, 205, 86, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(255, 159, 64, 0.5)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 205, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,  // Make sure chart is responsive
          maintainAspectRatio: false,  // Adjust aspect ratio according to the size of container
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});