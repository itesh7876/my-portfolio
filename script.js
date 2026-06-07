// ==========================================================================
// JAVASCRIPT: Advanced Async Event Controller & Floating Switcher (script.js)
// ==========================================================================

const themeToggleBtn = document.getElementById('theme-toggle');
const toggleIcon = themeToggleBtn.querySelector('.toggle-icon');
const themeTooltip = document.getElementById('theme-tooltip');
const backToTopBtn = document.getElementById('back-to-top');

// 💡 HOOK FUNCTION: Updates tooltips text layers based on active state parameters
function updateTooltipText(currentThemeState) {
    if (currentThemeState === 'dark') {
        themeTooltip.innerText = 'Switch to Light Mode';
    } else {
        themeTooltip.innerText = 'Switch to Dark Mode';
    }
}

// 1. PERSISTENT THEME ENGINE (LocalStorage Tracking System)
const savedUserThemePreference = localStorage.getItem('portfolio-theme');

if (savedUserThemePreference === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleIcon.innerText = '☀️'; 
    updateTooltipText('dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleIcon.innerText = '🌙'; 
    updateTooltipText('light');
}

// Click Trigger Intercept for Swapper Mechanics
themeToggleBtn.addEventListener('click', function() {
    const activeCurrentTheme = document.documentElement.getAttribute('data-theme');
    
    if (activeCurrentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('portfolio-theme', 'dark'); 
        toggleIcon.innerText = '☀️';
        updateTooltipText('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('portfolio-theme', 'light'); 
        toggleIcon.innerText = '🌙';
        updateTooltipText('light');
    }
});

// 2. BACK TO TOP SCROLL ACCELERATION INTERCEPT PROTOCOLS
window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

// ==========================================================================
// NATIVE ASYNCHRONOUS COMMUNICATIONS (FORM SUBMISSION PROCESSES)
// ==========================================================================
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    submitBtn.innerText = 'Sending Message... 🚀';
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true; 

    const formFieldsData = new FormData(contactForm);
    const formspreeProductionEndpoint = "https://formspree.io/f/xaqkarek";       

    fetch(formspreeProductionEndpoint, {
        method: 'POST', 
        body: formFieldsData, 
        headers: {
            'Accept': 'application/json' 
        }
    })
    .then(function(serverResponseDataFeedback) {
        if (serverResponseDataFeedback.ok === true) {
            alert('Brilliant, Itesh! Your data has securely bypassed background servers and landed directly in your email box! 🚀');
            contactForm.reset(); 
        } else {
            alert('Operational Latency Check: Form configuration mismatch detected. Please review endpoint token ID values.');
        }
    })
    .catch(function(networkFatalCrashExceptionError) {
        alert('Transmission Failed: Internet infrastructure timeout detected. Please verify physical layer active data systems connection.');
    })
    .finally(function() {
        submitBtn.innerText = 'Transmit Message';
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false; 
    });
});