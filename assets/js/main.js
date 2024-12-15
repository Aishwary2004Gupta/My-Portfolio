/*=============== EMAIL JS ===============*/
// Get the form and message elements
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

// Function to handle email sending
const sendEmail = (e) => {
    e.preventDefault();

    // Send form data via EmailJS
    emailjs.sendForm('service_a363o6c', 'template_vk5lomp', '#contact-form', 'Ms7jlE298nKUS26Pm')
    .then(() => {
        // Success message
        contactMessage.textContent = 'Message sent successfully! ✅';

        // Clear message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000)

        // Reset the form
        contactForm.reset();
    }, () =>{
        contactMessage.textContent = 'Message not sent (service error) ❌';
    })
};

// Add event listener for form submission
contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

