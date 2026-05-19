/**
 * EletroPro - Intersection Observer for Animations
 * This script handles the reveal animations on scroll.
 */

document.addEventListener("DOMContentLoaded", () => {
    // Configuration for the observer
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    // Callback for the observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger the CSS transition
                entry.target.classList.add("visible");
                // Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Select all elements to be animated
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');

    // For desktop and large screens, observe elements
    if (window.matchMedia("(min-width: 768px)").matches) {
        animatedElements.forEach((el) => {
            observer.observe(el);
        });
    } else {
        // For mobile devices, reveal them immediately or with a faster threshold to avoid layout issues
        animatedElements.forEach((el) => {
            el.classList.add("visible");
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
