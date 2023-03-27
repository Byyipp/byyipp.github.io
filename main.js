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
      duration: 800,
      distance: '100px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
  
    // Reveal project items on scroll
    scrollReveal.reveal('.project', {
      interval: 200,
      origin: 'bottom',
    });
  
    // Add more scroll-triggered animations here
  });
  