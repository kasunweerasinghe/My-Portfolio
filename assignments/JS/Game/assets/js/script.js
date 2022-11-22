$(function () {
    var canvas = $('#canvas')[0];

    //select context of canvas
    var ctx = canvas.getContext('2d');

    var cHeight = canvas.height;
    var cWidth = canvas.width;
    var snakeHeight = 10;
    var snakeWidth = 10;
    var blockSize = 10;

    var score = 0;

    //snake array
    var snake = [{
        x: 200,
        y: 40,
        oldX: 0,
        oldY: 0,
        drawn: false
    },
        {
            x: 200,
            y: 30,
            oldX: 0,
            oldY: 0,
            drawn: false
        },
        {
            x: 200,
            y: 20,
            oldX: 0,
            oldY: 0,
            drawn: false
        },
        {
            x: 200,
            y: 10,
            oldX: 0,
            oldY: 0,
            drawn: false
        },
    ];

    //food variable
    var food = {
        x: 50,
        y: 50,
        eaten: false
    };


    //create a key values for variables
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    var keyPressed = DOWN;

    var game;

    $('#btnStart').click(function (){
        startGame();
    });



    function startGame() {
        game = setInterval(gameLoop, 300);
    }

    // game = setInterval(gameLoop, 300);

    //game over function
    function stopGame() {
        clearInterval(game);
        alert('Game over');
    }


    //create function for loop the game
    function gameLoop() {
        console.log("loop run");
        clearCanvas();
        drawFood();
        moveSnake(keyPressed);
        drawSnake();
    }

    //draw snake function
    function drawSnake() {
        ctx.fillStyle = 'red';
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'white';
        $.each(snake, function (index, value) {
            ctx.fillRect(value.x, value.y, snakeWidth, snakeHeight);
            ctx.strokeRect(value.x, value.y, snakeWidth, snakeHeight);
            snake[index].drawn = true;
            if (index == 0) {
                if (collided(value.x, value.y)) {
                    stopGame();
                } else {
                    if (caughtFood(value.x, value.y)) {
                        updateScore();
                        updateFoodEatenFlag();
                        makeSnakeBigger();
                    }
                }
            }

        });
    }

    function updateScore() {
        score++;
        $('#score').text(score);
    }

    function updateFoodEatenFlag() {
        food.eaten = true;
    }

    //after eat food snake will bigger
    function makeSnakeBigger() {
        snake.push({
            x: snake[snake.length - 1].x,
            y: snake[snake.length - 1].y
        });
    }

    //snake collided function
    function collided(x, y) {
        return snake.filter((item, index) => {
            return index != 0 && item.x == x && item.y == y
        }).length > 0 || x < 0 || x > cWidth || y < 0 || y > cHeight;
    }

    //check the food eaten
    function caughtFood(x, y) {
        return (x == food.x && y == food.y);
    }

    //draw food for snake
    function drawFood() {
        ctx.fillStyle = 'white';
        let xy = getPositionForFood();
        food = {
            x: xy.x,
            y: xy.y,
            eaten: false
        };
        ctx.fillRect(food.x, food.y, snakeWidth, snakeHeight);
    }

    //change food position after snake eat it
    function getPositionForFood() {
        let xy;
        if (food.eaten == true) {
            let xArray = yArray = [];
            $.each(snake, function (index, value) {
                if ($.inArray(value.x, xArray) == -1) {
                    xArray.push(value.x);
                }
                if ($.inArray(value.y, yArray) == -1) {
                    yArray.push(value.y);
                }
            });
            xy = getEmptyBlock(xArray, yArray);
        } else {
            xy = food;
        }
        return xy;
    }

    function getEmptyBlock(xArray, yArray) {
        let newXY = {};
        newX = getRandomNumber(cWidth - 10, 10);
        newY = getRandomNumber(cHeight - 10, 10);
        if ($.inArray(newX, xArray) == -1 && $.inArray(newY, yArray) == -1) {
            newXY.x = newX;
            newXY.y = newY;
            return newXY;
        } else {
            return getEmptyBlock(xArray, yArray);
        }
    }

    //get random number
    function getRandomNumber(max, multipleOf) {
        let result = Math.floor(Math.random() * max);
        result = (result % 10 == 0) ? result : result + (multipleOf - result % 10);
        return result;
    }

    //clear canvas
    function clearCanvas() {
        ctx.clearRect(0, 0, cWidth, cHeight);
    }

    $(document).keydown(function (e) {
        if ($.inArray(e.which, [LEFT, UP, RIGHT, DOWN]) != -1) {
            keyPressed = checkKeyAllowed(e.which);
        }
    });

    //in this function snake stop go up when it still going down. and when moving left uts stop go right
    function checkKeyAllowed(tempKey) {
        let key;
        if (tempKey == DOWN) {
            key = (keyPressed != UP) ? tempKey : keyPressed;
        } else if (tempKey == UP) {
            key = (keyPressed != DOWN) ? tempKey : keyPressed;
        } else if (tempKey == LEFT) {
            key = (keyPressed != RIGHT) ? tempKey : keyPressed;
        } else if (tempKey == RIGHT) {
            key = (keyPressed != LEFT) ? tempKey : keyPressed;
        }
        return key;
    }

    //function for Move Snake
    function moveSnake(keyPressed) {
        $.each(snake, function (index, value) {
            if (snake[index].drawn == true) {
                snake[index].oldX = value.x;
                snake[index].oldY = value.y;
                if (index == 0) {
                    //down key event
                    if (keyPressed == DOWN) {
                        snake[0].y = snake[0].y + blockSize;
                    } else if (keyPressed == UP) { //up key event
                        snake[0].y = snake[0].y - blockSize;
                    } else if (keyPressed == LEFT) { //left key event
                        snake[0].x = snake[0].x - blockSize;
                    } else if (keyPressed == RIGHT) { //right key event
                        snake[0].x = snake[0].x + blockSize;
                    }
                } else {
                    snake[index].x = snake[index - 1].oldX;
                    snake[index].y = snake[index - 1].oldY;
                }
                snake[index].drawn = false;
            }

        });
    }



});