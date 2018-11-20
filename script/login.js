$(document).ready(function(){
    $("#go").click(function(){


        if($("#exampleCheck1").is(":checked"))
        {

            $("form").attr('action','maingui.html');
        }
        else
        {
            $("form").attr('action','employeeMenu.html');
        }
    });
});