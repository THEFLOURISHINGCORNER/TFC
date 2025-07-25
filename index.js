// TOGGLE NAVBAR

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const clicks = document.querySelectorAll(".click");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});



clicks.forEach(function(click){
  click.addEventListener("click", function () {
    links.classList.remove("show-links");
  });
})

// Mobile navigation toggle




// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                }
            });
            
            // Toggle current item
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
            answer.style.display = isActive ? 'none' : 'block';
        });
    });
});