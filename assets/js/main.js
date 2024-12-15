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
        contactMessage.textContent = 'Message sent successfully! 🫡';

        // Clear message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000)

        // Reset the form
        contactForm.reset();
    })
};

// Add event listener for form submission
contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

