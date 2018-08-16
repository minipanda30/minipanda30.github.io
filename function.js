var id = "";
var targethashr = "";
var isActive = true;
window.onbeforeunload = function(){ window.scrollTo(0,0); }
$(document).ready(function(){


localStorage.removeItem('idsc');
isActive = true;
targethashr = "";
id="parallaxhome";
new WOW().init(); 
if($(window).width() <= 768){
  $('.navbar').css("background-color", "rgba(0,0,0,0.7)");

}
});



$('a[href*=\\#]:not([href=\\#])').click(function() {



    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var targoff = target.offset().top;
        $(this).addClass('active');
        $('html,body').animate({
          scrollTop: targoff
        }, { duration: 1000, queue: false });
        var targtext = this.hash;
       targethashr = targtext.replace('#', '');
       localStorage.setItem('idsc', targethashr);
       if(targethashr != 'parallaxhome'){
        isActive = true;

       }else{isActive = false;}
        return false;
      }
    }



});


$(window).scroll(function(){

  var top = $(this).scrollTop();

        var topMenu = jQuery("#navbarsExampleDefault"),
                offset = 40,
                topMenuHeight = topMenu.outerHeight()+offset,
                // All list items
                menuItems =  topMenu.find('a[href*="#"]'),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                  var href = jQuery(this).attr("href");
                  id = href.substring(href.indexOf('#'));
                  item = jQuery(id);
                  if (item.length) { return item; }
                });

                 var fromTop = jQuery(this).scrollTop()+topMenuHeight;

               // Get id of current scroll item
               var cur = scrollItems.map(function(){
                 if (jQuery(this).offset().top < fromTop)
                   return this;
               });

               // Get the id of the current element
               cur = cur[cur.length-1];
               id = cur && cur.length ? cur[0].id : "";               
           
               $("#navbarsExampleDefault ul li").removeClass("active");
               $("#navbarsExampleDefault ul li a").removeClass("active");
              menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");





               if(id != localStorage.idsc){
                localStorage.setItem('idsc', id);

                    
      if(id != "parallaxhome" && isActive == true && $(window).width() >= 768){
        isActive = false;
        $('.chartphp').easyPieChart({
        easing: 'easeOutElastic',
          animate: 3000,
          barColor: '#76bf5f',
          trackColor: '#fff',
          scaleColor: false,
          lineWidth: 50,
          trackWidth: 45,
          size: 200,
          lineCap: 'butt',
    });
  var widthmargin = ($('.navbar').width()/2)  - ($('.navbar-nav').width()/2);
$(".navbar-nav").stop().animate({marginLeft: widthmargin}, { duration: 500, queue: false });
  $(".navbar").stop().animate({backgroundColor: "rgba(0,0,0,0.5)"}, { duration: 200, queue: false });


}else if(id != "parallaxhome" && isActive == false && $(window).width() >= 768){
        $('.chartphp').easyPieChart({
        easing: 'easeOutElastic',
          animate: 3000,
          barColor: '#76bf5f',
          trackColor: '#fff',
          scaleColor: false,
          lineWidth: 50,
          trackWidth: 45,
          size: 200,
          lineCap: 'butt',
    });
  $(".navbar").stop().animate({backgroundColor: "rgba(0,0,0,0.5)"}, { duration: 200, queue: false });
 
}else if(id == "parallaxhome" && $(window).width() >= 768){
  isActive = true;
   $(".navbar-nav").stop().animate({marginLeft: "50%"}, { duration: 500, queue: false });
  $(".navbar").stop().animate({backgroundColor: "rgba(0,0,0,0)"}, { duration: 200, queue: false });
  
}else{$('.chartphp').easyPieChart({
        easing: 'easeOutElastic',
          animate: 3000,
          barColor: '#76bf5f',
          trackColor: '#fff',
          scaleColor: false,
          lineWidth: 50,
          trackWidth: 45,
          size: 200,
          lineCap: 'butt',
    });}
               }



return false;
        
});





$(window).resize(function(){
    if($(this).width() <= 768 || id != "parallaxhome"){
       $('.navbar').css("background-color", "rgba(0,0,0,0.7)");
      var widthmargin = ($('.navbar').width()/2)  - ($('.navbar-nav').width()/2);
$(".navbar-nav").stop().animate({marginLeft: widthmargin}, { duration: 500, queue: false });
     }else{
      $('.skill-scroll').find('.wow.animated').removeClass('animated');
       $(".navbar-nav").stop().animate({marginLeft: "50%"}, { duration: 500, queue: false });
       $('.navbar').css("background-color", "transparent");
     }
});

var scrollable = $('.skill-scroll');
scrollable.on('scroll.wow', function(){
    scrollable.find('.wow:not(.animated):in-viewport').removeAttr('style').addClass('animated');

});
