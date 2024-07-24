document.addEventListener('DOMContentLoaded', () => {
    // Handle "Sign up" button click
    document.querySelector('.sign-up').addEventListener('click', () => {
        window.location.href = 'signup.html';
    });

    // Handle "Log in" button click
    document.querySelector('.auth a:nth-child(3)').addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    // Handle "See prices" button click with form validation
    document.querySelector('.price-button').addEventListener('click', () => {
        const location = document.querySelector('.input-box:nth-child(1)').value;
        const destination = document.querySelector('.input-box:nth-child(2)').value;
        
        if (location && destination) {
            alert(`Price information will be displayed for the trip from ${location} to ${destination}.`);
        } else {
            alert('Please enter both location and destination.');
        }
    });

    // Handle "Get started" button click for drivers
    document.querySelectorAll('.get-started').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'getstarted.html';
        });
    });

    // Handle language change
    document.querySelector('.auth a:nth-child(1)').addEventListener('click', () => {
        const currentLanguage = document.querySelector('.auth a:nth-child(1)').innerText;
        const newLanguage = currentLanguage === 'EN' ? 'ES' : 'EN';
        document.querySelector('.auth a:nth-child(1)').innerText = newLanguage;
        alert(`Language changed to ${newLanguage}.`);
    });

    // Handle "Help" link click
    document.querySelector('.auth a:nth-child(2)').addEventListener('click', () => {
        window.location.href = 'help.html';
    });

    // Handle footer links
    document.querySelectorAll('.footer a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Navigating to ${event.target.innerText} page.`);
        });
    });

    // Handle social media links
    document.querySelectorAll('.footer-social a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Navigating to ${event.target.alt} page.`);
        });
    });

    // Handle app download links
    document.querySelectorAll('.footer-app-links a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Navigating to ${event.target.alt} page.`);
        });
    });
});
