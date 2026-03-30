const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python'],
        datasets: [{
            label: 'Skill Level',
            data: [80, 70, 60, 50],
            backgroundColor: '#38bdf8'
        }]
    }
});

function sendMsg() {
    document.getElementById("msg").innerText =
        "Message sent! (This is a demo)";
}
