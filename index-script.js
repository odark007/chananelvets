document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;

  const animateCounters = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
      const duration = 2000; // 2s animation
      const increment = target / (duration / 20); // Adjust for 20ms updates
      const updateCounter = () => {
        if (count < target) {
          count += increment;
          counter.textContent = Math.ceil(count);
          setTimeout(updateCounter, 20);
        } else {
          counter.textContent = target;
        }
      };
      updateCounter();
    });
  };

  const factsSection = document.getElementById('facts');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
    }
  }, { threshold: 0.5 });

  observer.observe(factsSection);
});