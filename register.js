document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.querySelector('input[name="email"]');
        const enteredEmail = emailInput.value;

        const usernameInput = document.querySelector('input[name="username"]');
        const enteredUsername = usernameInput.value;
        const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails')) || [];
        const registeredUsernames = JSON.parse(localStorage.getItem('registeredUsernames')) || [];

        if (registeredEmails.includes(enteredEmail)) {
            alert('Bu e-posta adresi zaten kullanılmaktadır. Lütfen başka bir e-posta adresi deneyin.');
        } else if (registeredUsernames.includes(enteredUsername)) {
            alert('Bu kullanıcı adı zaten kullanılmaktadır. Lütfen başka bir kullanıcı adı deneyin.');
        } else {
            registeredEmails.push(enteredEmail);
            localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));

            registeredUsernames.push(enteredUsername);
            localStorage.setItem('registeredUsernames', JSON.stringify(registeredUsernames));

            alert('Kayıt başarıyla tamamlandı!'); 
        }
    });
});
