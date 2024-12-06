document.addEventListener("DOMContentLoaded", () => {

    // Toggle navbar menu on small screens
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', toggleMenu);

    const textElement = document.querySelector('.dynamic-text');
    const phrases = [
        "   CS Student",
        "   Web Developer",
        "   Graphic Designer",
        "   Aspiring UI/UX Designer",
        "   Future Software Engineer"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let typingSpeed = 100; // Speed of typing in milliseconds
    let erasingSpeed = 50; // Speed of erasing in milliseconds
    let delayBetweenPhrases = 1500; // Delay between phrases

    function typePhrase() {
        if (charIndex < phrases[phraseIndex].length) {
            textElement.textContent += phrases[phraseIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typePhrase, typingSpeed);
        } else {
            setTimeout(erasePhrase, delayBetweenPhrases);
        }
    }

    function erasePhrase() {
        if (charIndex > 0) {
            textElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erasePhrase, erasingSpeed);
        } else {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typePhrase, typingSpeed);
        }
    }

    typePhrase();
});