//Banner alert Section
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
//End banner alert section


//Message user section
const userName = document.getElementById('user-field');
const userMessage = document.getElementById('messages');
const sendBttn = document.getElementById('send');
sendBttn.addEventListener('click', () => {
    if(userName.value === "" && userMessage.value == "") {
        alert("Please input a valid message and user name.");
    } else if (userName.value === "") {
        alert("Please input a valid user name.");
    } else if(userMessage.value === ""){
        alert("Please input a valid message.");
    } else {
        alert(`Message was successfully sent to ${userName.value}!`);
    }
});
//End message user section


//Navigation not working. Suppose to add class to active navigation
// let navBtn = document.querySelector('.nav-bttns');
// navBtn.addEventListener('click', (event) => {
//     let navPath = document.querySelector('.nav-paths');
//     // let nav = e.target;
//     navPath.classList.add("active-nav-bttn");
// });
const activeNavBttn = () => {
    let navPath = document.querySelector('.nav-paths');
    // navPath.classList.add("active-nav-bttn");
}
//End of Navigation button section


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
                'rgba(116, 119, 191, 0.3)'
            ],
            borderColor: [
                'rgba(116, 119, 191, 1)'
            ],
            borderWidth: 2,
            // lineTension: 0, //??
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

var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '# of Votes',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: [
                "#7477bf",
                "#7477bf",
                "#7477bf",
                "#7477bf",
                "#7477bf",
                "#7477bf",
                "#7477bf",
            ],
            borderColor: [
                'rgba(116, 119, 191, 1)'
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
                '#7477BF',
                '#78CF82',
                '#51B6C8'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
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