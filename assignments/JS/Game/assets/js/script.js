$(function () {
    var canvas = $('#canvas')[0];

    //select context of canvas
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';

    //add rectangle to canvas
    ctx.fillRect(50,100,10,10);

});