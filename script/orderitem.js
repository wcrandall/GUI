$(document).ready(function() {
    $("button").click(function(){
        var order = $("order-id").val();
        var name = $("#item-id").val();
        var amount = $("#number").val();
        if(name!="" && amount!="") {
            confirm("Are you sure you want to add " + amount + " " + name + " to order " + order "?");
        }
    });
});
