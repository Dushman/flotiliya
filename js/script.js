$(function(){

  $('.index-top-slider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    nextText: 'B',
    prevText: 'A',
    onSliderLoad: function(){
      $('#index-top-slider .slide').css('visibility' , 'visible'); 
      $('.slider-loader').remove();
    }
  });

  $('.index-bottom-slider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    nextText: 'B',
    prevText: 'A',
    onSliderLoad: function(){
      $('#index-bottom-slider .slide').css('visibility' , 'visible'); 
      $('.slider-loader').remove();
    }
  });

});