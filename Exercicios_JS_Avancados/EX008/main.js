document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const statusElement = document.getElementById('status');
    const startButton = document.getElementById('startBtn');
    
    startButton.addEventListener('click', startDownload);
    
    function startDownload() {
        let progress = 0;
        startButton.disabled = true;
        
        const interval = setInterval(() => {
            progress += Math.random() * 10; 
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                downloadComplete();
            }
            
            updateProgress(progress);
        }, 300);
        
        function updateProgress(value) {
            const progressValue = Math.min(100, Math.floor(value));
            progressBar.style.width = `${progressValue}%`;
            statusElement.textContent = `${progressValue}%`;
        }
        
        function downloadComplete() {
            statusElement.textContent = 'Download completo!';
            startButton.disabled = false;
            startButton.textContent = 'Reiniciar Download';
            startButton.removeEventListener('click', startDownload);
            startButton.addEventListener('click', () => {
                window.location.reload();
            });
        }
    }
});
