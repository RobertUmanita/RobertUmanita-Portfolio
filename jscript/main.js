

$(document).ready(function(){
  var pagn = 1;
  var sb = false;
  $("#link1").click(function(){
    pagn = 2;
    $('.scrollbox').fadeOut(400);
    $(".info2").fadeOut(400);
    $(".info3").fadeOut(400);
    $(".info4").fadeOut(400);
    $(".main-content").velocity({ height: 360, width: 505 }, 400);
    $(".main-content").velocity({translateX: "0"});
    
    console.log("1");
    setTimeout(function () {
       
       //$(".info2").css("display", "visible");
       $(".info").fadeIn(400);
    }, 1000);
    
  });


  $("#link2").click(function(){
    pagn = 2;
    $('.scrollbox').fadeOut(400);
    $(".info").fadeOut(400);
    $(".info3").fadeOut(400);
    $(".info4").fadeOut(400);
    $(".main-content").velocity({ height: 360, width: 505 }, 400);
    $(".main-content").velocity({translateX: "0"});
    
    console.log("1");
    setTimeout(function () {
       $(".main-content").velocity({ height: 520 }, 500);
       //$(".info2").css("display", "visible");
       $(".info2").fadeIn(400);
    }, 1000);
    
  });
  $("#link3").click(function(){
    pagn = 3;
    $(".info").fadeOut(400);
    $(".info2").fadeOut(400);
    $(".info4").fadeOut(400);
    $(".main-content").velocity({ height: 360 }, 500);
    
    $(".main-content").velocity({ height: 520, width: 900 }, 600);
    $(".main-content").velocity({translateX: "0"});
    
    console.log("1");
    if (!sb) {
      sb = true;
      setTimeout(function () {
      $('.scrollbox').enscroll();
      $(".info3").fadeIn(1800);
      
    }, 1400);
    } else {
      setTimeout(function () {
      $('.scrollbox').fadeIn(400);
      $(".info3").fadeIn(1800);
      
    }, 1400);
      
    }
    
    
  });

  $("#link4").click(function(){
    pagn = 4;
    $('.scrollbox').fadeOut(400);
    $(".info").fadeOut(400);
    $(".info2").fadeOut(400);
    $(".info3").fadeOut(400);
    $(".main-content").velocity({ height: 360, width: 505 }, 400);
    $(".main-content").velocity({translateX: "0"});
    
    console.log("1");
    setTimeout(function () {
       $(".info4").fadeIn(400);
    }, 1000);
    
  });

}); 


   

;(function ($) {
    'use strict';
    var $body    = $('html, body'),
        content  = $('#main').smoothState({
            prefetch: true,
            pageCacheSize: 4,
            onStart: {
                duration: 500,
                render: function (url, $container) {
                    content.toggleAnimationClass('is-exiting');
                    $body.animate({
                        scrollTop: 0
                    });
                }
            }
        }).data('smoothState');
})(jQuery);

