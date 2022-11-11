
var cueData={
    persons:[
        {name:"Kasun",color:"red"},
        {name:"Dasun",color:"green"},
        {name:"Vimal",color:"orange"}
    ],
    nextPerson:function(){
        var lastPerson= this.persons.pop();
        this.persons.unshift(lastPerson);
    }
}


