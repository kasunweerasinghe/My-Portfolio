$(function () {
    var canvas = $('#canvas')[0];

    //select context of canvas
    var ctx = canvas.getContext('2d');

    //snake array
    var snake = [
        {x: 50, y: 100, oldX: 0, oldY: 0},
        {x: 50, y: 90, oldX: 0, oldY: 0},
        {x: 50, y: 80, oldX: 0, oldY: 0}

    ];

    var snakeWidth = snakeHeight = 10;
    var blockSize = 10;

    //create a key values for variables
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    var keyPressed = DOWN;

    setInterval(gameLoop, 1000);

    //create function for loop the game
    function gameLoop() {
        console.log("loop run");
        clearCanvas();
        moveSnake();
        drawSnake();
    }


    //function for Move Snake
    function moveSnake() {
        $.each(snake, function (index, value) {
            snake[index].oldX = value.x;
            snake[index].oldY = value.y;
            if (index == 0) {
                //down key event
                if (keyPressed == DOWN) {
                    snake[index].y = value.y + blockSize;
                } else if (keyPressed == UP) { //up key event
                    snake[index].y = value.y - blockSize;
                } else if (keyPressed == RIGHT) { //right key event
                    snake[index].x = value.x + blockSize;
                } else if (keyPressed == LEFT) { //left key event
                    snake[index].x = value.x - blockSize;
                }
            } else {
                snake[index].x = snake[index - 1].oldX;
                snake[index].y = snake[index - 1].oldY;
            }
        });
    }


    //draw snake function
    function drawSnake() {
        $.each(snake, function (index, value) {
            ctx.fillStyle = 'red';
            //add rectangle to canvas
            ctx.fillRect(value.x, value.y, snakeWidth, snakeHeight);
            //add border to snake
            ctx.strokeStyle = 'white';
            ctx.strokeRect(value.x, value.y, snakeWidth, snakeHeight);
        });
    }

    //clear canvas
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


    $(document).keydown(function (e) {
        keyPressed = e.which;
    });


});