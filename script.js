// ==========================================================================
// JAVASCRIPT: Advanced Async Event Controller API Pipeline (script.js)
// ==========================================================================
// [CHILD-FRIENDLY CONCEPT]: This file acts as the "Brain" or "Dimaag" of the app.
// HTML puts buttons down, CSS colors them, but JavaScript actually listens for clicks,
// thinks about data processing, and ships packages across the web pipelines.
// ==========================================================================

// 1. DOM SELECTOR NODES ASSOCIATIONS (Memory Box Identifiers)
// [CONCEPT]: Document Object Model Hooks. 
// [USAGE]: document.getElementById searches through the HTML bone structure tree to capture elements by Aadhaar card ID, 
//          locking them into 'const' storage variables so our code can track and manipulate them instantly.
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

// 2. EVENT LISTENER ARCHITECTURE (The Active Border Guard Gatekeeper 👮‍♂️)
// [USAGE]: addEventListener attaches a permanent, non-stop silent security guard node to the form container. 
//          It sleeps until user interactions trigger a 'submit' click event, then instantly wakes up to run our code list block.
contactForm.addEventListener('submit', function(event) {
    
    // INDUSTRIAL PROTECTION PROTOCOL (Native Action Intercept)
    // [PURPOSE]: Overrides default browser behavior.
    // [REASON]: Web browsers are hard-coded to violently refresh/reload the whole screen the millisecond a form ships data.
    // [USAGE]: event.preventDefault() forces the browser to halt page reloading. This enables single-page operation, 
    //          keeping data safe in memory and avoiding ugly layout flashes.
    event.preventDefault();

    // 3. DYNAMIC UI STATE CONTROLLER (Processing Protection Locking Mechanics)
    // [PURPOSE]: Prevents multiple redundant operations and guides user UX expectation levels.
    // [USAGE]: Changes active interface labels to 'Sending Message... 🚀', dims opacity, and sets disabled parameter to true.
    submitBtn.innerText = 'Sending Message... 🚀';
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true; // [REASON]: Disables clicking. Prevents users from double tapping and hammering our cloud server with duplicate form data.

    // 4. DATA EXTRACTION LAYER MODULES (FormData Package Packer 📦)
    // [PURPOSE]: Converts user typing input text nodes into valid backend transport schemas.
    // [USAGE]: New FormData reads our form inputs automatically, packages user entries, and creates a clean bundle ready for transmission.
    const formFieldsData = new FormData(contactForm);

    // 5. PRODUCTION API ROUTER ENDPOINT (Formspree Cloud Target Hook)
    // [PURPOSE]: The destination server database tracking URL path where data arrives.
    const formspreeProductionEndpoint = "https://formspree.io/f/xaqkarek";       

    // 6. ASYNCHRONOUS NETWORK TRANSMISSION PIPELINE (The Invisible Delivery Boy - Fetch API Engine 🚀)
    // [CONCEPT]: Asynchronous Programming Thread Models.
    // [USAGE]: fetch kicks off an invisible, background data courier delivery worker. It runs silently on a separate background execution lane, 
    //          leaving the main UI free to scroll smoothly while data flies across the web wire.
    fetch(formspreeProductionEndpoint, {
        method: 'POST', // [PURPOSE]: Security Method Specification. Packages form details inside hidden data request packets instead of appending them to the browser URL line.
        body: formFieldsData, // Drops our data bundle package directly into the background transport container lane.
        headers: {
            'Accept': 'application/json' // Instructs receiving servers to reply using structured JSON transaction tokens.
        }
    })
    // 7. ASYNC PROMISES LIFECYCLE MANAGEMENT (The Lifecycle Handling Decisions)
    // [CONCEPT]: JavaScript Promises Lifecycle. A promise means fetch will return with data or fail trying; we map out what happens next.
    .then(function(serverResponseDataFeedback) {
        
        // THE SUCCESS BLOCK (Triggered if data arrives safely at the cloud server base array 👍)
        if (serverResponseDataFeedback.ok === true) {
            
            // 1. Triggers enterprise level user validation alerting response dialogs.
            alert('Brilliant, Itesh! Your data has securely bypassed background servers and landed directly in your email box! 🚀');
            
            // 2. Clear input buffers. Resets form text boxes back to pristine empty states.
            contactForm.reset(); 

        } else {
            // BACKEND ALIGNMENT FALLBACK FILTERS
            alert('Operational Latency Check: Form configuration mismatch detected. Please review endpoint token ID values.');
        }
    })
    .catch(function(networkFatalCrashExceptionError) {
        
        // THE EMERGENCY ACCIDENT BLOCK (Triggered if physical connection wires snap or user loses internet network 💥)
        // [PURPOSE]: Graceful degradation setup. Catches hardware failures safely so the portfolio application does not crash.
        alert('Transmission Failed: Internet infrastructure timeout detected. Please verify physical layer active data systems connection.');
    })
    .finally(function() {
        
        // THE CORE CLEANUP VALVE (Executes HAMESHA—whether operation succeeds or completely crashes 🏁)
        // [PURPOSE]: UI State Recovery. Rollback parameters toggle back to absolute base settings so forms can receive new inquiries.
        submitBtn.innerText = 'Send Message';
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false; // Unlocks clicking mechanism keys. Form is fully re-primed for new execution rounds.
    });
});