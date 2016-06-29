


$(document).ready(function(){       
  $(".main-content").velocity({ height: 520 }, 500);
  console.log("butts");
  $("#link1").click(function(){
    $(".info2").fadeOut(400);
    $(".main-content").velocity({ height: 360 }, 500);
    console.log("1");
    setTimeout(function () {
       window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
    }, 300);
    
  });
  $("#link3").click(function(){
    $(".info2").fadeOut(400);
    $(".main-content").velocity({ height: 360 }, 500);
    console.log("1");
    setTimeout(function () {
       window.location.href = "index3.html"; //will redirect to your blog page (an ex: blog.html)
    }, 300);
    
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



//$(window).unload(function(){  
   
//    $(".main-content2").velocity("reverse");
//});