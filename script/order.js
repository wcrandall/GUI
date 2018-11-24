$(document).ready(function() {
    $("button").click(function(){
        var name = $("#product-name").val();
        var amount = $("#number").val();
        if(name!="" && amount!="") {
            confirm("Are you sure you want to add " + amount + " " + name + " to order?");
        }
    });
});
