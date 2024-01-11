let points = 0;

document.getElementById('clickBtn').addEventListener('click', () => {
    points += 1;
    updatePoints();
});

function updatePoints() {
    document.getElementById('points').innerText = `Points: ${points}`;
}
