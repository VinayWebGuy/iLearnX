function main() {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        document.querySelector('main').classList.add('scrolled');
      } else {
        document.querySelector('main').classList.remove('scrolled');
      }
    });
  }
  
  main();
  
  window.addEventListener('resize', function() {
    console.log(window.screen.width);
    main();
  });
  
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const testimonialBox = document.querySelector('.testimonial-box');
    const testimonials = document.querySelectorAll('.single-testimonial');
    const testimonialArrows = document.querySelectorAll('.testimonial-arrows i');
    let currentIndex = 0;
  
    function showTestimonial(index) {
      testimonialBox.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }
  
    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }
  
    testimonialArrows.forEach(function(arrow) {
      arrow.addEventListener('click', function() {
        if (arrow.classList.contains('ri-arrow-left-line')) {
          prevTestimonial();
        } else if (arrow.classList.contains('ri-arrow-right-line')) {
          nextTestimonial();
        }
      });
    });
  
    // You can uncomment the line below to auto-advance testimonials every 5000 milliseconds.
    // setInterval(nextTestimonial, 5000);
  });
  