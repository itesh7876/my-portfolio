// ==========================================================================
// JAVASCRIPT: Full Feature Vector Upgraded Application Core (script.js)
// ==========================================================================

const themeToggleBtn = document.getElementById('theme-toggle');
const themeTooltip = document.getElementById('theme-tooltip');
const backToTopBtn = document.getElementById('back-to-top');

function updateTooltipText(currentThemeState) {
    if (currentThemeState === 'dark') {
        themeTooltip.innerText = 'Switch to Light Mode';
    } else {
        themeTooltip.innerText = 'Switch to Dark Mode';
    }
}

// 🕒 24-HOUR COMPLETE LIFECYCLE GREETING RUNTIME ENGINE SPEC
function runTimeBasedGreetingEngine() {
    const greetingTextNode = document.getElementById('dynamic-greeting');
    if (!greetingTextNode) return;
    
    const currentSystemHour = new Date().getHours(); 
    
    if (currentSystemHour >= 5 && currentSystemHour < 12) {
        greetingTextNode.innerText = 'Good Morning ☀️';
    } else if (currentSystemHour >= 12 && currentSystemHour < 17) {
        greetingTextNode.innerText = 'Good Afternoon 🌤️';
    } else if (currentSystemHour >= 17 && currentSystemHour < 22) {
        greetingTextNode.innerText = 'Good Evening 🌆';
    } else {
        greetingTextNode.innerText = 'Good Night 🌙'; // Absolute explicit 24h timeline seal
    }
}
runTimeBasedGreetingEngine(); 

// 1. PERSISTENT THEME ENGINE WITH LOCALSTORAGE TRACKING
const savedUserThemePreference = localStorage.getItem('portfolio-theme');

if (savedUserThemePreference === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateTooltipText('dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateTooltipText('light');
}

themeToggleBtn.addEventListener('click', function() {
    const activeCurrentTheme = document.documentElement.getAttribute('data-theme');
    
    themeToggleBtn.classList.add('rotate-icon');
    setTimeout(() => themeToggleBtn.classList.remove('rotate-icon'), 400);
    
    if (activeCurrentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('portfolio-theme', 'dark'); 
        updateTooltipText('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('portfolio-theme', 'light'); 
        updateTooltipText('light');
    }
});

// 🎛&nbsp; DYNAMIC BENTO GRID FILTER MATRIX CHANNELS
const projectFilterTabs = document.querySelectorAll('.filter-tab');
const portfolioProjectCards = document.querySelectorAll('.project-card');

projectFilterTabs.forEach(function(currentActiveTabClicked) {
    currentActiveTabClicked.addEventListener('click', function() {
        document.querySelector('.filter-tab.active').classList.remove('active');
        currentActiveTabClicked.classList.add('active');
        
        const selectiveTargetCategory = currentActiveTabClicked.getAttribute('data-category');
        
        portfolioProjectCards.forEach(function(currentCardNodeElement) {
            const currentCardDataCategorySpec = currentCardNodeElement.getAttribute('data-project-type');
            
            if (selectiveTargetCategory === 'all' || currentCardDataCategorySpec === selectiveTargetCategory) {
                currentCardNodeElement.classList.remove('hidden-node');
            } else {
                currentCardNodeElement.classList.add('hidden-node');
            }
        });
    });
});

// 2. BACK TO TOP SCROLL LISTENERS
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
// ASYNCHRONOUS FORM COMMUNICATOR & INLINE TOAST TIMEOUT CONTROL
// ==========================================================================
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const inlineFormFeedbackBox = document.getElementById('form-feedback'); 

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    submitBtn.innerText = 'Sending Message... 🚀';
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true; 
    
    inlineFormFeedbackBox.className = 'form-feedback-message';
    inlineFormFeedbackBox.style.display = 'none';

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
            inlineFormFeedbackBox.innerText = 'Success! Your message transmitted securely to Itesh Kumar\'s operational gateway box! 🚀';
            inlineFormFeedbackBox.classList.add('success-toast');
            
            contactForm.reset(); 
            
            setTimeout(() => {
                inlineFormFeedbackBox.style.display = 'none';
            }, 5000);
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