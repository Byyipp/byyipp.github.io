document.addEventListener('DOMContentLoaded', () => {
    // Animate the title on page load
    anime({
      targets: '.animated-title',
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1500,
      easing: 'easeOutExpo',
    });
  
    // Initialize ScrollReveal for scroll-triggered animations
    const scrollReveal = ScrollReveal({
      duration: 6000,
      distance: '100px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  
    // Reveal project items on scroll
    scrollReveal.reveal('.project', {
      interval: 2000,
      origin: 'bottom',
      beforeReveal: (el) => {
        anime({
          targets: el,
          translateY: [100, 0],
          opacity: [0, 1],
          duration: 6000,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });
      },
    });
  
    // Add more scroll-triggered animations here
  });
  