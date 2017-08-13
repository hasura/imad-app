console.log('Loaded!');
 $(document).ready(function(){
  $('a#click-a').click(function(){
    $('.nav').toggleClass('nav-view');
  });
});