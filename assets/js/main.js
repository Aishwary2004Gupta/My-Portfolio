/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //service id, template id, #form, publickey
    emailjs.sendForm('service_a363o6c', 'template_n0nc739', '#contact-form', 'Ms7jlE298nKUS26Pm')

    .then(() => {
        contactMessage.textContent = 'Message sent successfully! 🫡';

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000);

        contactForm.reset();
    })
}
contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

