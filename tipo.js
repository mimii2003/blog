$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
    $(document).ready(function() {
        $(".carousel").carousel({
          interval: 2000
        });
        $(".carousel").on("slid", function() {
          var to_slide;
          to_slide = $(".carousel-item.active").attr("data-slide-no");
          $(".myCarousel-target.active").removeClass("active");
          $(".carousel-indicators [data-slide-to=" + to_slide + "]").addClass("active");
        });
        $(".myCarousel-target").on("click", function() {
          $(this).preventDefault();
          $(".carousel").carousel(parseInt($(this).attr("data-slide-to")));
          $(".myCarousel-target.active").removeClass("active");
          $(this).addClass("active");
        });
      });
      



    $(document).ready(function() {
        $('#Carousel').carousel({
            interval: 5000
        })
    });