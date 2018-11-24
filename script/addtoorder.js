$(document).ready(function() {
    $("button").click(function(){
        var order = $("#order").val();
        var item = $("#item").val();
        var amount = $("#number").val();
        if(item!="" && amount!="") {
            if(order!=""){
               confirm("Are you sure you want to add " + amount + " of item " + item + " to order " order "?");
            }
        }
    });
});
