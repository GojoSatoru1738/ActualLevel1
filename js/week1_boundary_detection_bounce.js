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
   
ball.move();

// Right Side
if (ball.x > canvas.width) {
    ball.x = canvas.width;         
    ball.x -= ball.width/2;         
    ball.vx = -ball.vx;             
}

// Left Side
if (ball.x < 0) {
    ball.x = 0;                     
    ball.x += ball.width/2;         
    ball.vx = -ball.vx;             
}

ball.draw();
}