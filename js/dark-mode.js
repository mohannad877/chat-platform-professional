// dark-mode.js - enhanced version
(function() {
    // 1. Apply user preference as early as possible (place script in <head>)
    const applyDarkMode = () => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'enabled') {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode'); // keep body in sync with legacy CSS
        }
    };

    // 2. Run immediately (before DOMContentLoaded)
    applyDarkMode();

    // 3. Wait for DOM to bind events
    document.addEventListener("DOMContentLoaded", function() {
        const toggleButton = document.getElementById("dark-mode-toggle");
        
        if (toggleButton) {
            toggleButton.addEventListener("click", function() {
                const html = document.documentElement;
                html.classList.toggle("dark-mode");
                document.body.classList.toggle("dark-mode"); // keep body class aligned
                
                // Persist preference
                const isDark = html.classList.contains("dark-mode");
                localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
                
                // Optional dev log
                console.log(`Dark mode ${isDark ? 'enabled' : 'disabled'}`);
            });
        }

        // 4. Ensure dynamically injected elements get the class if needed
        const observer = new MutationObserver(() => {
            if (localStorage.getItem('darkMode') === 'enabled') {
                document.querySelectorAll('.dynamic-element').forEach(el => {
                    el.classList.add('dark-mode');
                });
            }
        });
        observer.observe(document.body, { subtree: true, childList: true });
    });
})();