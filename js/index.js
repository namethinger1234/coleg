$(document).ready(function(){
	
	//smooth scroll
  $(".navbar a, #myNavbar, a[href='#about'], a[href='#career'], a[href='#info'], a[href='#more'], footer a[href='#home']").on('click', function(event) {
   
		
    if (this.hash !== "") {
  
      event.preventDefault();

    
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
     
        window.location.hash = hash;
      });
    }
  });
  
	//static navbar
	$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');});
	
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
//anchors navbar to top
$(function() {$('body').on('click', 'a.scrollable', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
  event.preventDefault();
  });
});
