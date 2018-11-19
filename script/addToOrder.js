
$(document).ready(function() {
    $("button").click(function(){
        var order = $("#orderID").val();
        var item = $("#itemID").val();
        var amount = $("#number").val();
        if(item!="" && amount!="") {
            confirm("Are you sure you want to add " + amount + " of item " + item + " to order " order "?");
        }
    });
});
