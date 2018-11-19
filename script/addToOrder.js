
$(document).ready(function() {
    $("button").click(function(){
        var itemID = $("#itemID").val();
        var amount = $("#number").val();
        var orderID = $("#orderID").val();
        if(itemID!="" && amount!="" && orderID!="") {
            confirm("Are you sure you want to add " + amount + " of item " + itemID + " to order " + orderID "?");
        }
    });
});
