'use strict';

const ham = document.getElementById('js-ham');
const spNav =document.getElementById('js-sp-nav');
const logo = document.getElementById('js-logo')
const navBox = document.getElementById('js-nav-box');
const main = document.getElementById('js-main');
const scrollNav = document.getElementById('js-nav-scroll');

ham.addEventListener('click',function(){
   ham.classList.toggle('clicked');
   spNav.classList.toggle('nav-opned');
   navBox.classList.toggle('bg-color');
});

document.addEventListener('DOMContentLoaded',function(){

  const spList = document.querySelectorAll('.sp-nav_nav-list_box_list a')

  for(let i = 0; i < spList.length; i++){
    spList[i].addEventListener('click',function(){
      ham.classList.remove('clicked');
      spNav.classList.remove('nav-opned');
      navBox.classList.remove('bg-color');
    },false);
  }
});
//  header-ham
// rules btn
$('.rulesbtn').on('click', function () {
  if ($(this).text() === 'もっと見る') {
    $(this).text('閉じる');
    $("#js-rules-text").addClass("js-open");
  } else {
    $(this).text('もっと見る');
    $("#js-rules-text").removeClass("js-open");
  }
});
// rules btn
// ーーーーーーーーー
//  ページ内scroll
// ーーーーーーーーー

$(function(){
  $('a[href^="#"]').click(function(){
    let adjust = 90;
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - adjust;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// ーーーーーーーーー
//  ページ内scroll
// ーーーーーーーーー