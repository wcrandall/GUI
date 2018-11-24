$(document).ready(function() {
    $("button").click(function(){
        var order = $("#order-id").val();
        var item = $("#item-id").val();
        var number = $("#number").val();
        if(item!="" && number!="") {
               confirm("Are you sure you want to add " + number + " of item " + item- + " toorder " order "?");
        }
    });
});
