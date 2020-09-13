$(function(){
  var imgHeight = $('.kv-wrapper').outerHeight();
  //kvの高さを取得
  var bgHeight = $('.fv').outerHeight();
  //fvの高さを取得
  $(".burger-btn").on('click',function(){
    if($(window).scrollTop() < imgHeight -50){
      //ハンバーガーボタンがfvより上にある時
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('burger-mask').toggleClass(300);
      $('body').toggleClass('noscroll');
    }else{
      $(this).toggleClass('black');
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('burger-mask').toggleClass(300);
      $('body').toggleClass('noscroll');
    }
  });
//スクロールしたら、サイドロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      $('.site-title').removeClass('black');
    }else {
      $('.site-title').addClass('black');
    }
    if ($(window).scrollTop() < bgHeight -50) {
      $('.burger-btn').removeClass('black');
    }else {
      $('.burger-btn').addClass('black');
    }
  });

});