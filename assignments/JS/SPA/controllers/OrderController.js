//Load Customers Ids Into ComboBox
function loadAllCustomersForOption() {
    $("#inputCustomerID").empty();
    for (let customerElement of customers) {
        $("#inputCustomerID").append(`<option>${customerElement.id}</option>`);
    }
}


//Load Items Code Into ComboBox
function loadAllItemsForOption(){
    $('#inputItemID').empty();
    for(let itemElement of items){
        $('#inputItemID').append(`<option>${itemElement.code}</option>`);
    }
}