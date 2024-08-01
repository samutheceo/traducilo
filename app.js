var elements_to_watch = document.querySelectorAll('.watch');

var callback = function(items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add('in-page');
        } else {
            item.target.classList.remove('in-page');
        }
    });
}

var observer= new IntersectionObserver(callback, { threshold: 0 });

elements_to_watch.forEach((element) => {
    observer.observe(element);
})

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const captchaGenerator = document.getElementById('captcha-generator');
    captchaGenerator.textContent = `${num1} + ${num2}`;
    return num1 + num2;
}

let correctCaptchaResult = generateCaptcha();

document.getElementById('myForm').addEventListener('submit', function(event) {
    const userCaptchaResult = parseInt(document.getElementById('captcha-input').value);
    if (userCaptchaResult !== correctCaptchaResult) {
        event.preventDefault();
        alert("Captcha errato. Riprova.");
        correctCaptchaResult = generateCaptcha();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        const target = parseInt(number.textContent);
        const increment = Math.ceil(target / 100);
        let current = 0;

        const timer = setInterval(function() {
            current += increment;
            number.textContent = current;
            if (current >= target) {
                clearInterval(timer);
                number.textContent = target;
            }
        }, 100);
    });


});

function apriMenuLang() {
    var menu = document.querySelectorAll('.menu-lingue')

    menu.classList.add('scale-100')
}

function impostaLang(lang) {
    window.location.href = `./${lang}.html`
}