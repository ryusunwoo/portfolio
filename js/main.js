

// scrolla
$(document).ready(function(){
    $('.animate').scrolla();
});




// // Aside menu 바 색깔
// $(function(){
//   $('.pager ul li a').on('click', function(){
      
//       $('.pager ul li a').removeClass('on')
//       $(this).addClass('on')
    
//   })
// })



// Aside menu 각페이지 도착시 바 색깔 바뀜
$(function(){
  var lastScroll = 0;
  $(window).scroll(function(event){

    var scroll = $(this).scrollTop();

    if(0 <= scroll){
      $('.pager ul li a').removeClass('on')
      $('#int').addClass('on')
    }else {
      $('#int').removeClass('on');
    }
    lastScroll = scroll;

    if(700 < scroll){
      $('.pager ul li a').removeClass('on')
      $('#abt').addClass('on')
    }else {
      $('#abt').removeClass('on');
    }
    lastScroll = scroll;

    if(1500 < scroll){
      $('.pager ul li a').removeClass('on')
      $('#re1').addClass('on')
    }else {
      $('#re1').removeClass('on');
    }
    lastScroll = scroll;

    if(2400 < scroll){
      $('.pager ul li a').removeClass('on')
      $('#zcf').addClass('on')
    }else {
      $('#zcf').removeClass('on');
    }
    lastScroll = scroll;

    if(3500 < scroll){
      $('.pager ul li a').removeClass('on')
      $('#re2').addClass('on')
    }else {
      $('#re2').removeClass('on');
    }
    lastScroll = scroll;

    if(4600 < scroll){
      $('.pager ul li a').removeClass('on')
      $('#cbn').addClass('on')
    }else {
      $('#cbn').removeClass('on');
    }
    lastScroll = scroll;

    if(5700 < scroll){
      $('.pager ul li a').removeClass('on')
      $('#re3').addClass('on')
    }else {
      $('#re3').removeClass('on');
    }
    lastScroll = scroll;

    if(6800 < scroll){
      $('.pager ul li a').removeClass('on')
      $('#jbs').addClass('on')
    }else {
      $('#jbs').removeClass('on');
    }
    lastScroll = scroll;

    if(7900 < scroll){
      $('.pager ul li a').removeClass('on')
      $('#owo').addClass('on')
    }else {
      $('#owo').removeClass('on');
    }
    lastScroll = scroll;

    if(8900 < scroll){
      $('.pager ul li a').removeClass('on')
      $('#out').addClass('on')
    }else {
      $('#out').removeClass('on');
    }
    lastScroll = scroll;


  })
})







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

    $('#owo').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 8640}, 0);
    });

    $('#out').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 9720}, 0);
    });

    

  });



