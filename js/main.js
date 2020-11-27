// 스크롤라
// $('.animate').scrolla();

// var pager=$(".pager ul li");
// var cont=$("#wrap > section");

// $(window).scroll(function(){
//     var sct=$(window).scrollTop();
//     cont.each(function(){
//         var tg=$(this);
//         var i=tg.index();
//         if(tg.offset().top<=sct){
//             pager.removeClass("on");
//             pager.eq(i).addClass("on");
//            };
//     });
// });

// pager.click(function(){
//     var active=$(this).index();
//     var top=$("html , body").scrollTop();
//     var tt=cont.eq(active).offset().top;
//     if(top==0) top=$("body").scrollTop();
//     $("html , body").stop().animate({
//         scrollTop:tt
//     },400);
//     return false;
// });




$(function(){
    $('.pager ul li a').on('click', function(){
        
        $('.pager ul li a').removeClass('on')
        $(this).addClass('on')
    })
})



// scrolla
$(document).ready(function(){
    $('.animate').scrolla();
});



// Aside menu
$(document).ready(function(){
 
    $('#int').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 0);
    });

    $('#abt').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 1080}, 0);
    });

    $('#re1').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 2160}, 0);
    });

    $('#zcf').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 3240}, 0);
    });

    $('#re2').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 4320}, 0);
    });

    $('#cbn').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 5400}, 0);
    });

    $('#re3').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 6480}, 0);
    });

    $('#jbs').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 7560}, 0);
    });

    $('#out').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 8640}, 0);
    });

    


  });