//Disable Add to cart Button
$('#btnAddToCart').attr("disabled", true);
//
// //Disable Place Order Button
$('#btnPlaceOrderButton').attr("disabled", true);

//Load Customers Ids Into ComboBox
function loadAllCustomersForOption() {
    $("#inputCustomerID").empty();
    $('#inputCustomerID').prepend('<option>Select Customer</option>');
    for (let customerElement of customers) {
        $("#inputCustomerID").append(`<option>${customerElement.id}</option>`);
    }
}


//Load Items Code Into ComboBox
function loadAllItemsForOption() {
    $('#inputItemID').empty();
    $('#inputItemID').prepend('<option>Select Item</option>');
    for (let itemElement of items) {
        $('#inputItemID').append(`<option>${itemElement.code}</option>`);
    }
}

//when select customer id fill other data
$('#inputCustomerID').change(function () {
    let cusID = $('#inputCustomerID').val();
    let customer = searchCustomer(cusID);
    if (customer != null) {

        $('#txtCusName').val(customer.name);
        $('#txtCusAddress').val(customer.address);
        $('#txtCusSalary').val(customer.salary);

    }
});

//btn add to cart
$('#btnAddToCart').click(function () {
    let QtyOnHand = parseInt($('#itemonHand').val());
    let orderQty = parseInt($('#itemorderQty').val());
    if ($("#itemorderQty").val() != "") {

        if (QtyOnHand < orderQty) {
            alert("This Item No Available for this Quantity.")
        } else {
            updateQty();
            addToCart();
            loadAllCart();
        }
    } else {
        alert("please Enter Order Quantity..");
    }

    $('#btnPlaceOrderButton').attr("disabled", false);
});

//function add to cart
function addToCart() {
    let oid = $('#txtOrderID').val();
    let itm_code = $('#inputItemID').val();
    let itm_name = $('#itemName').val();
    let itm_price = $('#itemPrice').val();
    let order_qty = $('#itemorderQty').val();
    let total = itm_price * order_qty;


    for (let cartElement of cart) {
        if(cartElement.cartICode==itm_code){
            var newQty =+ cartElement.cartOrderQty+ +order_qty;
            let newTotal= itm_price*newQty;
            cartElement.cartOrderQty=newQty;
            cartElement.cartTotal=newTotal;
            return;
        }
    }

    let cartOrder = cartModel(oid, itm_code, itm_name, itm_price, order_qty, total);

    cart.push(cartOrder);

    $("#txtBalance,#txtCash,#txtDiscount").val("");

    clearField();
}

//load all data ro table
function loadAllCart() {
    $("#tblCart").empty();

    for (let cartItem of cart) {
        var cartRow = `<tr><td>${cartItem.CartOid}</td><td>${cartItem.cartICode}</td><td>${cartItem.cartIName}
        </td><td>${cartItem.cartIPrice}</td><td>${cartItem.cartOrderQty}</td><td>${cartItem.cartTotal}</td><td><i class="bi bi-trash text-danger"></i></td></tr>`;

        // var cartRow = `<tr><td>${cartItem.CartOid}</td><td>${cartItem.cartICode}</td><td>${cartItem.cartIName}
        // </td><td>${cartItem.cartIPrice}</td><td>${cartItem.cartOrderQty}</td><td>${cartItem.cartTotal}</td><td><button id="deleteData">delete</button></td></tr>`;

        $("#tblCart").append(cartRow);
        // bindDeleteEvent();
    }
}

//update qty after add order qty
function updateQty() {
    let qtyOnHand = $('#itemonHand').val();
    let order_qty = $('#itemorderQty').val();
    let newQty= qtyOnHand - order_qty;
    let tempItem;
    for (let item of items) {
        if($("#inputItemID").val()===item.code){
            item.qtyonhand=newQty;
            $('#itemonHand').val(item.qtyonhand);

           loadAllItems();

        }
    }


}


//when select item id fill other data
$('#inputItemID').change(function () {
    let code = $('#inputItemID').val();
    let item = searchItem(code);

    if (item != null) {

        $('#itemName').val(item.name);
        $('#itemPrice').val(item.price);
        $('#itemonHand').val(item.qtyonhand);
    }

    $('#btnAddToCart').attr("disabled", false);
});


function generateOrderID() {
    // $("#txtOrderID").val("OID-0001");
    // let orderId = [order.length - 1].CartOid;
    // let tempId = parseInt(orderId.split("-")[1]);
    //
    // tempId = tempId + 1;
    //
    // if (tempId <= 9) {
    //     $("#txtOrderID").val("OID-000" + tempId);
    // } else if (tempId <= 99) {
    //     $("#txtOrderID").val("OID-00" + tempId);
    // } else if (tempId <= 999) {
    //     $("#txtOrderID").val("OID-0" + tempId);
    // } else {
    //     $("#txtOrderID").val("OID-" + tempId);
    // }

    if (order.length > 0) {
        var lastId = order[order.length - 1].CartOid;
        var digit = lastId.substring(6);
        var number = parseInt(digit) + 1;
        return lastId.replace(digit, number);
    } else {
        return "OID-001";
    }
}

function clearField(){
    $('#inputCustomerID').val('');
    $('#txtCusName').val('');
    $('#txtCusAddress').val('');
    $('#txtCusSalary').val('');

    $('#inputItemID').val('');
    $('#itemName').val('');
    $('#itemonHand').val('');
    $('#itemPrice').val('');
    $('#itemorderQty').val('');


}


