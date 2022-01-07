$(document).ready(function (){
    $("#b1").click(function(){
        $("#kwadrat").fadeIn("fast");
        $("#trojkat").fadeIn("slow");
        $("#kolo").fadeIn(speed = 800);
    });
});   

$(document).ready(function (){
    $("#b2").click(function(){
        $("#kwadrat").fadeOut("fast");
        $("#trojkat").fadeOut("slow");
        $("#kolo").fadeOut(speed = 800);
    });
});   

$(document).ready(function (){
    $("#b3").click(function(){
        $("#kwadrat").fadeToggle("fast");
        $("#trojkat").fadeToggle("slow");
        $("#kolo").fadeToggle(speed = 800);
    });
});   

$(document).ready(function (){
    $("#b4").click(function(){
        $("#kwadrat").fadeTo("fast" , 0.6);
        $("#trojkat").fadeTo("slow", 0.6);
        $("#kolo").fadeTo(speed = 800, 0.6);
    });
});   

$(document).ready(function(){
    $("#v1").click(function(){ 
        $("p").slideDown();
    });
});

$(document).ready(function(){
    $("#v2").click(function(){ 
        $("p").slideUp();
    });
});

$(document).ready(function(){
    $("#v3").click(function(){ 
        $("p").slideToggle();
    });
});
//drugi efekt (stop)
$(document).ready(function(){
$("#stop").click(function(){
    $("#Panel").stop();
  });
});

$(document).ready(function(){
    $("#A").on( "click" , function(){ 
        var h5= $("h5");
        h5.animate({height: '200px', width: '200px', backgroundColor: "#FF8C00", color: "#FFC0CB", fontSize: 10});
        h5.animate({height: '400px', width: '400px', backgroundColor: "#FFD700", color: "#afdsae",fontSize: 20});
        h5.animate({height: '300px', width: '300px', backgroundColor: "#ADFF2F", color: "#FF0000", fontSize: 30});
        h5.animate({height: '600px', width: '600px', backgroundColor: "#87CEFA", color: "#0000FF", fontSize: 40});
        h5.animate({height: '100px', backgroundColor: "#7B68EE", color: "#7B68EE" , fontSize: 20});
        h5.animate({ width: '100px', backgroundColor: "#800080", color: "#2E8B57", fontSize: 15});

        //pierwszy efekt (callback)
        h5.animate({ backgroundColor: "#800080" }, function(){
            alert("Animacja zakończona!")
        } );
        
    });
});
//trzecik efekt (chaining)
$(document).ready(function(){
    $("#Slide").click(function(){
        $("h5")
        .animate({left:'-150px'},1000)
        .animate({height: "200px", width: "200px"})
        
      });
    });
//czwarty efekt (chaining)
    $(document).ready(function(){
        $("#Slide2").click(function(){
            $("h5")
            .animate({right:'-150px'},1000)
            .animate({height: "300px", width: "300px"})
            
          });
        });
    

 