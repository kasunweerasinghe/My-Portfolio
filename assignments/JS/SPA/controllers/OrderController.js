//Disable Add to cart Button
$('#btnAddToCart').attr("disabled", true);

//Disable Place Order Button
$('#btnPlaceOrderButton').attr("disabled", true);


$("#inputCustomerID").change(function () {
    var customer = searchCustomer($(this).val());
    $("#cusName").val(customer.cusName);
    $("#cusAddress").val(customer.cusAddress);
    $("#cusSalary").val(customer.cusSalary);
});

//Load Customers Ids Into ComboBox
function loadAllCustomersForOption() {
    // $("#inputCustomerID").empty();
    let count=0;
    for (let customerElement of customers) {
        $("#inputCustomerID").append(`<option>${customerElement.id}</option>`);
        count++;
    }
}


//Load Items Code Into ComboBox
function loadAllItemsForOption(){
    // $('#inputItemID').empty();
    let count=0;
    for(let itemElement of items){
        $('#inputItemID').append(`<option>${itemElement.code}</option>`);
        count++;
    }
}