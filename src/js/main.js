import { Calculator } from './Calculator.js';
import $ from 'jquery';

$(document).ready(function() {

  $("#imgScroller img:not(img[class~='shown'])").hide();
  let textScroll = $("#textScroll");
  let docHeight = $(document).height();
  let movingDown = true;

  textScroll.css("left", ($(document).width()-textScroll.width())/2);

  console.log(textScroll.css("top"));
  requestAnimationFrame(scrollImage);
  requestAnimationFrame(function(){scrollText(1)});

  function scrollText(){
    let increment = (movingDown) ? 1 : -1;
    let pxString = textScroll.css("top");
    let px = parseInt(pxString.substr(0, pxString.length-2));
    textScroll.css("top", (px+increment)+"px");
    if (px === docHeight-textScroll.innerHeight()) movingDown = false;
    if (px === 0) movingDown = true;
    requestAnimationFrame(function(){scrollText()});
  }

  function scrollImage(){
    let currentImage = $("#imgScroller img[class~='shown']");
    let currentIndex = currentImage.index();
    let nextIndex = ((currentIndex + 1) % ($("#imgScroller img").length));
    currentImage.fadeOut(1200, function(){
      currentImage.removeClass('shown');
      $(`#imgScroller img:eq(${nextIndex})`).fadeIn(1200).addClass('shown');
    })
    requestAnimationFrame(scrollImage);
    // .removeClass('shown');
    // $(`#imgScroller img:eq(${nextIndex})`).fadeIn().addClass('shown');
  }
})
