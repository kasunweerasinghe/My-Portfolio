var cueData = {
    persons: [
        {name: "Kasun", color: "red"},
        {name: "Hashan", color: "green"},
        {name: "Lakmal", color: "blue"},
        {name: "Sajith", color: "purple"}
    ],
    nextPerson: function () {
        var lastPerson = this.persons.pop();
        this.persons.unshift(lastPerson);
    }
}

renderDivs();

function renderDivs() {
    $("#container").empty();
    for (let i = 0; i < cueData.persons.length; i++) {
        $("#container").append(`<div style="background-color: ${cueData.persons[i].color}"><h1>${cueData.persons[i].name}</h1></div>`);
    }
    cueData.nextPerson();
}

setInterval(renderDivs,500);

$("#btnQue").click(function (){
    let inputName= $("#txtName").val();
    let selectedColor= $("#txtColor").val();
    var person={name:inputName,color:selectedColor};
    cueData.persons.unshift(person);
});

