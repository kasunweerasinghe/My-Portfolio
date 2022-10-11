$(window).on('load', function () {
    $('#loader').fadeOut(1000);
});
// Start Hide Other Sections When Webpage Load
$(document).ready(function () {
    $('#dashboard').show();
    $('#customerSection').hide();
    $('#itemSection').hide();
    $('#orderSection').hide();
});


//Start When home click other section hide
$('#home').click(function () {
    $('#dashboard').css('display', 'block')
    $('#customerSection').css('display', 'none');
    $('#itemSection').css('display', 'none');
    $('#orderSection').css('display', 'none');
});
// End When home click other section hide

// Start When customer click other section hide
$('#customer').click(function () {
    $('#dashboard').css('display', 'none')
    $('#customerSection').css('display', 'block');
    $('#itemSection').css('display', 'none');
    $('#orderSection').css('display', 'none');
});
// End When customer click other section hide

// Start When item click other section hide
$('#item').click(function () {
    $('#dashboard').css('display', 'none')
    $('#customerSection').css('display', 'none');
    $('#itemSection').css('display', 'block');
    $('#orderSection').css('display', 'none');
});
// End When item click other section hide

// Start When order click other section hide
$('#order').click(function () {
    $('#dashboard').css('display', 'none')
    $('#customerSection').css('display', 'none');
    $('#itemSection').css('display', 'none');
    $('#orderSection').show();

});
// End When order click other section hide