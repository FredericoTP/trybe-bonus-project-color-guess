const ball = document.getElementsByClassName('ball');

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 101);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

function backgroundBall() {
    for (let index = 0; index < ball.length; index += 1) {
        ball[index].style.backgroundColor = randomColor();
    }
}

backgroundBall();
