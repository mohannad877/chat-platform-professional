document.addEventListener("DOMContentLoaded", function() {
    // عناصر DOM
    const toggleButton = document.getElementById("dark-mode-toggle");
    const starsContainer = document.querySelector(".stars-container");
    
    // تحقق من التفضيل المحفوظ عند تحميل الصفحة
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    } else if (localStorage.getItem('darkMode') === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // إذا لم يكن هناك تفضيل محفوظ، تحقق من تفضيلات النظام
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    // وظيفة إنشاء النجوم
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        let size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
        updateStarColor(star);
        starsContainer.appendChild(star);
        setTimeout(() => star.remove(), 5000);
    }

    // تحديث لون النجوم
    function updateStarColor(star) {
        star.style.backgroundColor = document.body.classList.contains("dark-mode") ? "white" : "black";
    }

    // حدث تبديل الوضع الليلي
    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            
            // حفظ التفضيل
            const isDarkMode = document.body.classList.contains("dark-mode");
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
            
            // تحديث النجوم
            document.querySelectorAll(".star").forEach(updateStarColor);
        });
    }

    // إنشاء النجوم
    if (starsContainer) {
        for (let i = 0; i < 150; i++) createStar();
        setInterval(createStar, 200);
    }

    // تحديث السنة في التذييل
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // الاستماع لتغير تفضيلات النظام
    if (window.matchMedia) {
        const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        colorSchemeQuery.addEventListener('change', (e) => {
            if (e.matches && localStorage.getItem('darkMode') === null) {
                document.body.classList.add('dark-mode');
            } else if (!e.matches && localStorage.getItem('darkMode') === null) {
                document.body.classList.remove('dark-mode');
            }
        });
    }
});