import { Calculator } from './Calculator.js';
import $ from 'jquery';

$(document).ready(function() {

  $("#imgScroller img:not(img[class~='shown'])").hide();
  let textScroll = $("#textScroll");
  let docHeight = $(document).height();
  let movingDown = true;
  let blown = false;
  let tempShadowValue = 0;
  let sizeScaleValue = 1;

  textScroll.css("left", ($(document).width()-textScroll.width())/2);

  requestAnimationFrame(() => {scrollImage(1)});
  requestAnimationFrame(function(){scrollText(1)});
  requestAnimationFrame(() => {glow()});

  function scrollText(){
    let increment = (movingDown) ? 1 : -1;
    let pxString = textScroll.css("top");
    let px = parseInt(pxString.substr(0, pxString.length-2));
    textScroll.css("top", (px+increment)+"px");
    if (px === docHeight-textScroll.innerHeight()) movingDown = false;
    if (px === 0) movingDown = true;
    requestAnimationFrame(function(){scrollText()});
  }

  function scrollImage(count){
    let counter = count;
    if (count % 300 === 0){
      let currentImage = $("#imgScroller img[class~='shown']");
      let currentIndex = currentImage.index();
      let nextIndex = ((currentIndex + 1) % ($("#imgScroller img").length));
      currentImage.fadeOut(1200, function(){
        currentImage.removeClass('shown');
        $(`#imgScroller img:eq(${nextIndex})`).fadeIn(1200).addClass('shown');
      });
    };
    requestAnimationFrame(() => {scrollImage(counter+1)});
    // .removeClass('shown');
    // $(`#imgScroller img:eq(${nextIndex})`).fadeIn().addClass('shown');
  }

  function glow(){
    (!blown) ? tempShadowValue++ : tempShadowValue--;
    (blown) ? sizeScaleValue = sizeScaleValue + 0.002 : sizeScaleValue = sizeScaleValue - 0.002;
    $("#startGame").css("box-shadow", "0px 0px " + tempShadowValue + "px white");
    $("#startGame").css("transform", `scale(${sizeScaleValue}, ${sizeScaleValue})`);
    if (tempShadowValue === 100) blown = true;
    if (tempShadowValue === 0) blown = false;
    requestAnimationFrame(function(){glow()})
  }

})
