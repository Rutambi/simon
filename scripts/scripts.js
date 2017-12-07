// console.log('working'); -- This is to test if your javascript is being read
// next we need to add the doucment ready funtion so that we can use JQuery
$( document ).ready(function() {
   // All of your JQuery Code goes inside this function
// This is the code for smooth scroll
function scrollToSection(event) {
  
  // Log 
  console.log('Clicked on anchor element');
    
  // Prevent jumping to the section (default behaviour)
  //event.preventDefault();
  
  // Get anchor element hash
  var element = event.currentTarget,
      hash = element.hash;
 
  // Scroll the body and HTML to the ID equal to hash
  $('html, body').animate({
    
    // Find the offset of the targeted element on the page
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Set URL to clicked hash
    window.location.hash = hash;

  });
   
}

/*
**  Bind events
*/
$('a').on('click', scrollToSection);

//Responsive Nav Code 
function changeBodyClass(event) {
  
  // Log 
  console.log('Clicked on toggle menu class');
    
  // Prevent default event (clicking a link)
  event.preventDefault();
  
  // Toggle body class
  $('#container').toggleClass('mobile-menu-visible');
  
}

/*
**  Bind events
*/
$('a').on('click', changeBodyClass);

//JQuery for Slider

 $('.flexslider').flexslider({
    
    // Customize flexslider properties
    animation: "slide",
    slideshowSpeed: 5000,
    animationSpeed: 1000,
    slideshow: true,
    directionNav: false
    
  });

 // Code For Sticky Nav

$('#sticky-button').sticky({
    topSpacing: 0
  });

});// this closes the JQuery function- all JQuery code goes before this