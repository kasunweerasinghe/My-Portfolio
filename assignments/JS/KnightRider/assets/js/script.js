
var knightRider = {
    count:0,
    temArray:[],
    leftColorArray: ['white', 'white', 'white', 'white', 'white', 'white',"#b9a7a7", '#a67d7d', '#966161', '#bc6060', '#b84747', '#dc4141'],
    rightColorArray: ['white', 'white', 'white', 'white', 'white', 'white','#dc4141','#b84747','#bc6060','#966161', '#a67d7d',"#b9a7a7" ],
    animateLeft: function () {
        var lastColor = this.temArray.pop();
        this.temArray.unshift(lastColor);
    },
    animateRight:function (){
        var firstColor = this.temArray.shift();
        this.temArray.push(firstColor);
    },
    animate:function (){
        this.count++;
        if(this.count<=this.leftColorArray.length){
            this.temArray=this.leftColorArray;
            this.animateLeft();
        }else{
            if (this.count>=(this.rightColorArray.length*2)){
                this.count=0;
            }
            this.temArray=this.rightColorArray;
            this.animateRight();
        }
    }
}

renderDivs();

function renderDivs() {
    $('#container').empty();
    for (let i = 0; i < (knightRider.temArray.length) / 2; i++) {
        $('#container').append(`<div style="background-color: ${knightRider.temArray[i]}"></div>`);
    }
    knightRider.animate();
}

var id=setInterval(renderDivs, 90);


$("#btnStart").click(function (){
    clearInterval(id);
    id=setInterval(renderDivs, 90);
    console.log("ID when Start btn Called",id)
});

$("#btnEnd").click(function (){
    clearInterval(id);
    console.log("ID when End Btn Called",id)
});
