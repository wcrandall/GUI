
$(document).ready(function() {
    $("button").click(function(){
        var orderID = $("#orderID").val();
        var itemID = $("#itemID").val();
        var amount = $("#number").val();
        if(itemID!="" && amount!="") {
            confirm("Are you sure you want to add " + amount + " of item " + itemID + " to order " + orderID "?");
        }
    });
});
