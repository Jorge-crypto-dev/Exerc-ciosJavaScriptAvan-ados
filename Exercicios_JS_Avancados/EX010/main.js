document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }
    
    updateButtonText();
    
    themeToggle.addEventListener('click', toggleTheme);
    
    function toggleTheme() {
        body.classList.toggle('dark-theme');
        
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        updateButtonText();
    }
    
    function updateButtonText() {
        const isDark = body.classList.contains('dark-theme');
        themeToggle.textContent = isDark ? ' Modo Claro' : ' Modo Escuro';
    }
    
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) { 
            const newColorScheme = e.matches ? 'dark' : 'light';
            if (newColorScheme === 'dark') {
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
            }
            updateButtonText();
        }
    });
});