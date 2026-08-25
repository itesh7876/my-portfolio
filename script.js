// ==========================================================================
// PORTFOLIO V3 ARCHITECTURE ROOT BOOTSTRAP STANDALONE ENGINE (script.js)
// ==========================================================================

// 🛢️ LIVE CLOUD DATABASE CONFIGURATION CREDENTIALS MAPS
const SUPABASE_PROJECT_URL = "https://xaqkarektnns2kub0b2l.supabase.co"; 
// 🌟 KEY INTEGRATION: Copy-paste your unique string key right over this variable parameter
const SUPABASE_ANON_PUBLIC_KEY = "sb_publishable_TnNs2KUb0b2L-Aybku042g_92A0ViSF"; 

async function streamCloudDataFromSupabase(tableName) {
    const fallbackEndpoint = `${SUPABASE_PROJECT_URL}/rest/v1/${tableName}?select=*`;
    try {
        const response = await fetch(fallbackEndpoint, {
            method: "GET",
            headers: {
                "apikey": SUPABASE_ANON_PUBLIC_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_PUBLIC_KEY}`,
                "Content-Type": "application/json"
            }
        });
        if (response.ok) return await response.json();
    } catch (err) {
        console.warn("Database engine rest fallback pipeline channels: ", err);
    }

    if (tableName === "dev_logs") {
        return [
            {
                date: "June 13, 2026",
                title: "Decoupled Serverless Cloud Routing Pipeline Active",
                concept: "Successfully bypassed CORS sandboxes by dropping type=module parameters, enabling native asset mapping over global windows.",
                architecture: "Standalone Client ➔ Direct JSON Request Pipeline ➔ Supabase Storage Tiers",
                code: "function bootSystem() {\n  console.log('Operational Gateways Mounted Successfully.');\n}"
            }
        ];
    }
    return [];
}

function injectDevLogsToTimeline(logsArray) {
    const feed = document.getElementById('dynamic-devlog-feed');
    if (!feed) return;
    feed.innerHTML = '';

    if(!logsArray || logsArray.length === 0) {
        logsArray = [
            {
                date: "System Mounted",
                title: "Cloud Database Engine Linked Successfully 🚀",
                concept: "Your Supabase tables are up! Open the Admin Lock panel with password to ship your first live lesson straight into the cloud network sheet.",
                architecture: "Client Web Interface Layer ➔ Fetch Endpoint Dispatcher ➔ Supabase Postgres DB",
                code: "console.log('Central Database Pipeline Listening Realtime');"
            }
        ];
    }

    logsArray.forEach((log, index) => {
        const card = document.createElement('div');
        card.className = 'log-card';
        card.innerHTML = `
            <div class="log-date">${log.date}</div>
            <h3>${log.title}</h3>
            <div class="concept-flow">
                <div class="flow-step">
                    <span class="step-badge">💡 THE CONCEPT</span>
                    <p>${log.concept}</p>
                </div>
                <div class="flow-step">
                    <span class="step-badge">📐 ARCHITECTURE</span>
                    <p style="font-style: italic; font-size:14px; color: var(--text-muted);">${log.architecture}</p>
                </div>
                <div class="flow-step">
                    <span class="step-badge">💻 CODE SNIPPET</span>
                    <pre><button class="copy-btn" onclick="copyCodeSnippet('${index}', this)">📋 Copy</button><code id="code-block-${index}">${log.code}</code></pre>
                </div>
            </div>
        `;
        feed.appendChild(card);
    });
}

window.copyCodeSnippet = function(index, btnElement) {
    const codeBlock = document.getElementById(`code-block-${index}`);
    if (!codeBlock) return;
    navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = "Copied! ✓";
        btnElement.style.background = "#22c55e";
        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.style.background = "rgba(255, 255, 255, 0.15)";
        }, 2000);
    });
};

// BOUND SECURE ENTRYWAY POPUP BACK INTERFACES
window.openAdminPortal = function() {
    const key = prompt("Enter Secret Access Password:");
    if (key === "itesh7876@secure") {
        const panel = document.getElementById('admin-panel');
        if(panel) {
            panel.style.display = 'block';
            window.scrollTo({ top: panel.offsetTop - 100, behavior: 'smooth' });
        }
    } else {
        alert("Access Denied.");
    }
};

async function transmitNewDevLogToCloud(payload) {
    const endpoint = `${SUPABASE_PROJECT_URL}/rest/v1/dev_logs`;
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "apikey": SUPABASE_ANON_PUBLIC_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_PUBLIC_KEY}`,
                "Content-Type": "application/json",
                "Prefer": "return=representation"
            },
            body: JSON.stringify(payload)
        });
        if(response.ok) alert("Broadcast Delivered Securely to Database Cloud Server! 🎉");
    } catch (err) {
        console.error("Transmission Failure: ", err);
    }
}

function switchWorkspaceView(mode) {
    const btnRecruiter = document.getElementById('btn-recruiter');
    const btnDeveloper = document.getElementById('btn-developer');
    const aboutWrapper = document.getElementById('about-wrapper');
    const navAbout = document.getElementById('nav-about');
    const navDevlog = document.getElementById('nav-devlog');
    const hubDevlogLink = document.getElementById('hub-devlog-link');

    if (!btnRecruiter || !btnDeveloper) return;

    if (mode === 'recruiter') {
        btnRecruiter.classList.add('active');
        btnDeveloper.classList.remove('active');
        if (aboutWrapper) { aboutWrapper.style.opacity = '0'; setTimeout(() => aboutWrapper.style.display = 'none', 300); }
        if (navAbout) navAbout.style.display = 'none';
        if (navDevlog) navDevlog.style.display = 'none';
        if (hubDevlogLink) hubDevlogLink.style.display = 'none';
    } else {
        btnDeveloper.classList.add('active');
        btnRecruiter.classList.remove('active');
        if (aboutWrapper) { aboutWrapper.style.display = 'block'; setTimeout(() => { aboutWrapper.style.opacity = '1'; }, 50); }
        if (navAbout) navAbout.style.display = 'inline-block';
        if (navDevlog) navDevlog.style.display = 'inline-block';
        if (hubDevlogLink) hubDevlogLink.style.display = 'inline-block';
    }
}

const themeToggleBtn = document.getElementById('theme-toggle');
const themeTooltip = document.getElementById('theme-tooltip');
const backToTopBtn = document.getElementById('back-to-top');

function updateTooltipText(theme) {
    if(themeTooltip) themeTooltip.innerText = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

function runTimeBasedGreetingEngine() {
    const greetingTextNode = document.getElementById('dynamic-greeting');
    if (!greetingTextNode) return;
    const hour = new Date().getHours(); 
    if (hour >= 5 && hour < 12) greetingTextNode.innerText = 'Good Morning ☀️';
    else if (hour >= 12 && hour < 17) greetingTextNode.innerText = 'Good Afternoon 🌤️';
    else if (hour >= 17 && hour < 22) greetingTextNode.innerText = 'Good Evening 🌆';
    else greetingTextNode.innerText = 'Good Night 🌙';
}

const savedUserThemePreference = localStorage.getItem('portfolio-theme') || 'light';
document.documentElement.setAttribute('data-theme', savedUserThemePreference);
updateTooltipText(savedUserThemePreference);

if(themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        const current = document.documentElement.getAttribute('data-theme');
        const target = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', target);
        localStorage.setItem('portfolio-theme', target); 
        updateTooltipText(target);
    });
}

document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('filter-tab')) {
        document.querySelector('.filter-tab.active').classList.remove('active');
        e.target.classList.add('active');
        const cat = e.target.getAttribute('data-category');
        document.querySelectorAll('.project-card').forEach(card => {
            if (cat === 'all' || card.getAttribute('data-project-type') === cat) {
                card.classList.remove('hidden-node');
            } else {
                card.classList.add('hidden-node');
            }
        });
    }
});

window.addEventListener('scroll', function() {
    const progressIndicator = document.getElementById('scroll-progress-indicator');
    if(progressIndicator) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressIndicator.style.width = scrolled + "%";
    }
    if(backToTopBtn) {
        if (window.scrollY > 400) backToTopBtn.classList.add('visible');
        else backToTopBtn.classList.remove('visible');
    }
});
if(backToTopBtn) backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.addEventListener("DOMContentLoaded", async () => {
    runTimeBasedGreetingEngine();
    
    if (document.getElementById('dynamic-devlog-feed')) {
        const logs = await streamCloudDataFromSupabase('dev_logs');
        injectDevLogsToTimeline(logs);
    }

    const recBtn = document.getElementById('btn-recruiter');
    const devBtn = document.getElementById('btn-developer');
    if(recBtn && devBtn) {
        recBtn.addEventListener('click', () => switchWorkspaceView('recruiter'));
        devBtn.addEventListener('click', () => switchWorkspaceView('developer'));
    }

    const authGateBtn = document.getElementById('auth-gate-trigger');
    if(authGateBtn) {
        authGateBtn.addEventListener('click', window.openAdminPortal);
    }

    const avatarTrigger = document.getElementById('avatar-toggle-trigger');
    const avatarNode = document.getElementById('collapsible-avatar-node');
    if (avatarTrigger && avatarNode) {
        avatarNode.classList.add('hidden-avatar-state'); 
        avatarTrigger.addEventListener('click', function() {
            if (avatarNode.classList.contains('hidden-avatar-state')) {
                avatarNode.classList.remove('hidden-avatar-state');
                avatarTrigger.innerText = '🙈 Hide Portrait';
            } else {
                avatarNode.classList.add('hidden-avatar-state');
                avatarTrigger.innerText = '👁️ View Professional Portrait';
            }
        });
    }

    const form = document.getElementById('admin-post-form');
    if(form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const payload = {
                date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                title: document.getElementById('post-title').value,
                concept: document.getElementById('post-concept').value,
                architecture: document.getElementById('post-architecture').value,
                code: document.getElementById('post-code').value
            };
            await transmitNewDevLogToCloud(payload);
            const updatedLogs = await streamCloudDataFromSupabase('dev_logs');
            injectDevLogsToTimeline(updatedLogs);
            form.reset();
            document.getElementById('admin-panel').style.display = 'none';
        });
    }

    switchWorkspaceView('developer'); 
});