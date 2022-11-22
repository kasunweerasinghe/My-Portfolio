$(function () {
    var canvas = $('#canvas')[0];

    //select context of canvas
    var ctx = canvas.getContext('2d');

    var snake = [
        {x: 50, y: 100,},
        {x: 50, y: 90,},
        {x: 50, y: 80,}

    ];

    var snakeWidth = snakeHeight = 10;
    drawSnake();

    function drawSnake(){
        $.each(snake, function (index, value){
            ctx.fillStyle = 'red';
            //add rectangle to canvas
            ctx.fillRect(value.x, value.y,snakeWidth,snakeHeight);
            //add border to snake
            ctx.strokeStyle = 'white';
            ctx.strokeRect(value.x, value.y,snakeWidth,snakeHeight);
        });
    }

});