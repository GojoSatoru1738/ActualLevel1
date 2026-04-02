var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000/60;
var timer;

// Create the ball
var ball = new Ball();

// Center Starting point
ball.x = canvas.width/2;
ball.y = canvas.height/2;

// Move right
ball.vx = 2;
ball.vy = 0;

timer = setInterval(animate, interval);

function animate()
{
    // Clear the Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Move the Ball
    ball.move();

    // Update the Canvas (draw)
    ball.draw();
}