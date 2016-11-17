$(document).ready(function(){
    
    $("#lookup").click(function(){
        $.ajax({
            type: "GET",
            url: "world.php",
            datatype: "html",
            data: {country_name: $("#country").val(), all: $("#all").val()},
            success: function(text){
                $("#result").html(text)
            }
        });
    });
});