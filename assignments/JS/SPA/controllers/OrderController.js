//Load Customers Ids Into ComboBox
function loadAllCustomersForOption() {
    for (let customerElement of customers) {
        $("#inputCustomerID").append(`<option>${customerElement.id}</option>`);
    }
}


//Load Items Code Into ComboBox
function loadAllItemsForOption(){
    for(let itemElement of items){
        $('#inputItemID').append(`<option>${itemElement.code}</option>`);
    }
}