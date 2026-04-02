var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer;
var interval = 1000/60;

// Create the ball
var ball = new Ball();

// Start in the center
ball.x = canvas.width/2;
ball.y = canvas.height/2;

timer = setInterval(animate, interval);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.move();

    // Bounce off edges
    if(ball.x + ball.width/2 > canvas.width || ball.x - ball.width/2 < 0){
        ball.vx *= -1;
    }
    if(ball.y + ball.height/2 > canvas.height || ball.y - ball.height/2 < 0){
        ball.vy *= -1;
    }

    ball.draw();
}