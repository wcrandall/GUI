$(document).ready(function() {
    $("button").click(function(){
        var item = $("#item-id").val();
        var amount = $("#number").val();
        if(name!="" && amount!="") {
            confirm("Are you sure you want to add " + amount + " " + item + " to order?");
        }
    });
});
