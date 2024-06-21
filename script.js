const form = document.querySelector('.contact-form');
const firstName = form.querySelector('#firstName');
const lastName = form.querySelector('#lastName');
const email = form.querySelector('#email');
const fieldset = form.querySelector('.query-type-wrapper');
const errorMessages = form.querySelectorAll('.error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

        // Validação do First Name
        const firstName = form.querySelector('#firstName');
        if (!firstName.value.trim()) {
            valid = false;
            firstName.nextElementSibling.style.display = 'block';
            firstName.classList.add('error')
        }

        // Validação do Last Name
        const lastName = form.querySelector('#lastName');
        if (!lastName.value.trim()) {
            valid = false;
            lastName.nextElementSibling.style.display = 'block';
        }

        // Validação do Email
        const email = form.querySelector('#email');
        const emailValue = email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailErrorMessages = email.parentElement.querySelectorAll('.error-message');
        if (!emailValue) {
            valid = false;
            emailErrorMessages[1].style.display = 'block'; // Mensagem "This field is required"
        } else if (!emailPattern.test(emailValue)) {
            valid = false;
            emailErrorMessages[0].style.display = 'block'; // Mensagem "Please enter a valid email address"
        }

        // Validação do Fieldset (Query Type)
        const fieldset = form.querySelector('.query-type-wrapper');
        const radios = fieldset.querySelectorAll('input[type="radio"]');
        const radioChecked = Array.from(radios).some(radio => radio.checked);
        if (!radioChecked) {
            valid = false;
            fieldset.nextElementSibling.style.display = 'block'; // Mensagem "Please select a query type"
        }

        // Validação do Message
        const userMessage = form.querySelector('#userMessage');
        if (!userMessage.value.trim()) {
            valid = false;
            userMessage.nextElementSibling.style.display = 'block';
        }

        // Validação do Consent
        const consent = form.querySelector('#consent');
        if (!consent.checked) {
            valid = false;
            consent.nextElementSibling.nextElementSibling.style.display = 'block';
        }
})