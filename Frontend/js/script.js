function main() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $('main').addClass('scrolled')
            } else {
                $('main').removeClass('scrolled')
            }
        });
}

main();

$(window).resize(function() {
   console.log(screen.width);
   main();
})


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


$(document).ready(function() {
    const testimonialBox = $(".testimonial-box");
    const testimonials = $(".single-testimonial");
    const testimonialArrows = $(".testimonial-arrows i");
    let currentIndex = 0;
  
    function showTestimonial(index) {
      testimonialBox.css("transform", `translateX(-${index * 100}%)`);
    }
  
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }
  
    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }
  
    testimonialArrows.on("click", function() {
      if ($(this).hasClass("ri-arrow-left-line")) {
        prevTestimonial();
      } else if ($(this).hasClass("ri-arrow-right-line")) {
        nextTestimonial();
      }
    });
  
    // setInterval(nextTestimonial, 5000); 
  });