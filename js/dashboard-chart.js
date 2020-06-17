
const createChart = (component, typeChat, dataChart) => {
    new Chart(component, {
        type: typeChat,
        data: dataChart,
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display: true
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });
}

(() => {
    let ctxWalk = document.getElementById('chart-walk').getContext('2d');
    let ctxHeartbeat = document.getElementById('chart-heartbeat').getContext('2d');
    let ctxAttendance = document.getElementById('chart-attendance').getContext('2d');
    let ctxPeopleWeight = document.getElementById('people-weight').getContext('2d');

    createChart(ctxWalk, 'line', {
        labels: ['16h00', '16h30', '17h00', '17h30'],
        datasets: [{
            label: 'Desempenho',
            fill: true,
            borderColor: 'rgb(255, 238, 0)',
            data: [0, 3, 5, 2]
        }]
    });

    createChart(ctxHeartbeat, 'line', {
        labels: ['16h00', '16h05', '16h10', '16h15'],
        datasets: [{
            label: 'Batimentos',
            fill: true,
            lineTension: 0,
            borderColor: 'rgb(255, 238, 0)',
            data: [180, 110, 160, 85]
        }]
    });

    createChart(ctxAttendance, 'bar', {
        labels: ['Jan', 'Fev', 'Mar', 'Abr'],
        datasets: [{
            label: 'Atendimentos',
            fill: true,
            borderWidth: 2,
            borderColor: 'rgb(255, 238, 0)',
            data: [180, 110, 160, 200]
        }]
    });

    createChart(ctxPeopleWeight, 'bar', {
        labels: ['Jan', 'Fev', 'Mar', 'Abr'],
        datasets: [{
            label: 'Peso',
            fill: true,
            borderWidth: 2,
            borderColor: 'rgb(255, 238, 0)',
            data: [160, 152, 148, 130]
        }]
    });
})();