//Disable Add to cart Button
$('#btnAddToCart').attr("disabled", true);

//Disable Place Order Button
$('#btnPlaceOrderButton').attr("disabled", true);

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

$('#inputCustomerID').change(function () {
    let cusID=$('#inputCustomerID').val();
    let customer = searchCustomer(cusID);
    if (customer != null) {

        $('#txtCusName').val(customer.name);
        $('#txtCusAddress').val(customer.address);
        $('#txtCusSalary').val(customer.salary);


    }
});