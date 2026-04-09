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
   
// Moving ball
ball.move();


if (ball.y < 0) {
    ball.y = 0;                  
    ball.y += ball.height/2;     
    ball.vy = -ball.vy;          
}

if (ball.y > canvas.height) {
    ball.y = canvas.height;      
    ball.y -= ball.height/2;     
    ball.vy = -ball.vy;          
}


ball.draw();
}