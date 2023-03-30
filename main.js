document.addEventListener('DOMContentLoaded', () => {
    // Animate the title on page load
    anime({
      targets: '.animated-title',
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1500,
      easing: 'easeOutExpo',
    });
  
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  });
  