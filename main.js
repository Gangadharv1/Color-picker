function initialColor() {
    colorGenerator();
}

function colorGenerator() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('title').innerText = randomColor;
    document.getElementById('colorDisplay').style.backgroundColor = randomColor;
}

function copyColor() {
    const color = document.getElementById('title').innerText;
    navigator.clipboard.writeText(color).then(() => {
        const feedback = document.getElementById('copyFeedback');
        feedback.style.display = 'block';
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 2000);
    });
}