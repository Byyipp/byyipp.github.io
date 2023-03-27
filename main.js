document.addEventListener('DOMContentLoaded', () => {
    // Animate the title on page load
    anime({
      targets: '.animated-title',
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1500,
      easing: 'easeOutExpo',
    });
  
    // Add more Anime.js animations and transitions here
  });
  