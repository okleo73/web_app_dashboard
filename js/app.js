let alert3 = document.getElementById('alert2');

alert3.innerHTML = 
    `<div class="alert-banner">
        <p><strong>Alert:</strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p class="alert-banner-close">X</p>
    </div>`
alert3.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alert3.style.display= 'none'
    }
});

const userName = document.getElementById('user-field');
const userMessage = document.getElementById('messages');
const sendBttn = document.getElementById('send');

sendBttn.addEventListener('click', () => {
    if(userName.value === "" && userMessage.value == "") {
        alert("Please input a valid message and user name.");
    } else if (userName.value === "" || userMessage.value == "") {
        alert("Please input a valid message or user name.");
    } else {
        alert(`Message was successfully sent to ${userName.value}!`);
    }
});


//Not working. Suppose to add class to active navigation
// let navBtn = document.querySelector('.nav-bttns');
// navBtn.addEventListener('click', (event) => {
//     let navPath = document.querySelector('.nav-paths');
//     // let nav = e.target;
//     navPath.classList.add("active-nav-bttn");
// });
const activeNavBttn = () => {
    let navPath = document.querySelector('.nav-paths');
    navPath.classList.add("active-nav-bttn");
}


var ctx = document.getElementById('traffic-chart');
var ctx2 = document.getElementById('daily-chart');
var ctx3 = document.getElementById('mobile-chart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: '# of Votes',
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)',
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)'
            // ],
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
// let trafficOptions {
//     aspectRatio: 2.5,
//     animation: {
//         duration: 0
//     }
//     legend {
//         display: none;
//     }
// }
// let trafficChart = new Chart(trafficCanvas, {
//     type: 'line',
//     display: myChart,
//     options: trafficOptions
// });
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '# of Votes',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
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
var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            label: '# of Votes',
            data: [2000, 550, 500],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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