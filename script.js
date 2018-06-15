const testimonials = [
  {
    name: "Abbie Harvey",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    quote:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention.",
  },
  {
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    quote:
      "The support and compassion shown by the caregivers has made such a difference in my parents' lives. I couldn't be more grateful for their dedication.",
  },
  {
    name: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    quote:
      "Finding reliable care for my elderly parents was a challenge until we discovered this service. The peace of mind it brings is invaluable.",
  },
];

let currentIndex = 0;

const testimonialCard = document.querySelector(".testimonial-card");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function updateTestimonial() {
  const testimonial = testimonials[currentIndex];
  testimonialCard.innerHTML = `
        <div class="testimonial-image">
            <img src="${testimonial.image}" alt="${testimonial.name}">
        </div>
        <div class="testimonial-content">
            <div class="quote-box">
                <div class="quote-icon">
                <img src="assets/svgs/quote.svg" alt="svg">
                </div>
                <h3>${testimonial.name}</h3>
                <p>${testimonial.quote}</p>
            </div>
        </div>
    `;

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

// Event Listeners
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateTestimonial();
  });
});

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Initialize first testimonial
updateTestimonial();
