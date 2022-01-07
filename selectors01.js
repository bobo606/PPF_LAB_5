$(document).ready(function (){
    $("#button_01").click(function(){
        $("p").hide(speed=500);
    });
});

$(document).ready(function (){
    $("#button_02").click(function(){
        $("#p_03").hide();
    });
});

$(document).ready(function (){
    $("#button_03").click(function(){
        $(".cp_01").hide();
    });
});   





$(document).ready(function (){
    $("#g1").click(function(){
        $("*").hide();
    });
});   

$(document).ready(function (){
    $("#g2").click(function(){
        $("this").hide();
    });
});   

$(document).ready(function (){
    $("#g3").click(function(){
        $("ul li:first").hide();
    });
});   

$(document).ready(function (){
    $("#g4").click(function(){
        $("ul li:first-child").hide();
    });
});   


$(document).ready(function (){
    $("#pokaz").click(function(){
        $("p").show();
    });
});   

$(document).ready(function (){
    $("#tog").click(function(){
        $(".cp_01").toggle();
    });
});   