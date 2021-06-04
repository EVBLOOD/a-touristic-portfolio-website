$(document).ready(function(){
    $(window).scroll(function () {
  console.log($(this).attr("href"));
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if(scroll>599 && scroll<1309){
        $("nav").css( "background-color", "rgb(65 179 163 / 78%)");
        $("#slc1").removeClass("current");
        $("#slc3").removeClass("current");
        $("#slc2").addClass("current");
        $("#slc4").removeClass("current");
        $("#slc5").removeClass("current");
        }
        else if(scroll>1309 && scroll<2961){
            $("#slc1").removeClass("current");
            $("#slc5").removeClass("current");
            $("#slc2").removeClass("current");
            $("#slc4").removeClass("current");
            $("#slc3").addClass("current");
        }
        else if(scroll>2961 && scroll<4059){
            $("#slc1").removeClass("current");
            $("#slc2").removeClass("current");
            $("#slc5").removeClass("current");
            $("#slc3").removeClass("current");
            $("#slc4").addClass("current");

        }
        else if(scroll>4033){
            $("#slc1").removeClass("current");
            $("#slc2").removeClass("current");
            $("#slc3").removeClass("current");
            $("#slc4").removeClass("current");
            $("#slc5").addClass("current");
        }
        else{
            $("nav").css( "background-color", "transparent");
            $("#slc2").removeClass("current");
            $("#slc1").addClass("current");
            $("#slc5").removeClass("current");
            $("#slc3").removeClass("current");
            $("#slc4").removeClass("current");
        }
    });
    
    var tl = $(window).width();
    console.log(tl);
    if(tl < 980){
     // $("#menuicon").show();
     // $(".nav").hide();
      var i = 0;
      $("#menuicon").click(function (e) { 
          e.preventDefault();
          if(i==0){
            $(".nav").css({'display': 'grid', 'width': '100%'});
            i = 1;
          }
          else{
            $("#menuicon").show();
            $(".nav").hide();
            i = 0;
          }
      });
    }
    else{
      $(".nav").show();
      $("#menuicon").hide();
    }
  });