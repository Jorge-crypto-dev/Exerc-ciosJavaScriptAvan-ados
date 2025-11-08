document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const messageElement = document.getElementById('message');
    let timeoutId = null;

    const takenUsernames = ['admin', 'usuario', 'teste', 'joao', 'maria'];

    function checkUsernameAvailability(username) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const isAvailable = !takenUsernames.includes(username.toLowerCase());
                resolve(isAvailable);
            }, 1000);
        });
    }

    function showMessage(message, type) {
        messageElement.textContent = message;
        messageElement.className = 'message visible';
        
        messageElement.classList.remove('available', 'unavailable', 'loading');
        
        if (type === 'loading') {
            messageElement.classList.add('loading');
        } else if (type === 'available') {
            messageElement.classList.add('available');
        } else if (type === 'unavailable') {
            messageElement.classList.add('unavailable');
        }
    }

    function validateUsername(username) {
        if (username.length < 3) {
            showMessage('O nome de usuário deve ter pelo menos 3 caracteres', 'unavailable');
            return;
        }

        showMessage('Verificando disponibilidade...', 'loading');

        checkUsernameAvailability(username).then(isAvailable => {
            if (isAvailable) {
                showMessage('Nome de usuário disponível!', 'available');
            } else {
                showMessage('Nome de usuário já em uso', 'unavailable');
            }
        });
    }

    usernameInput.addEventListener('input', (e) => {
        const username = e.target.value.trim();
        
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        if (username === '') {
            messageElement.className = 'message';
            messageElement.textContent = '';
            return;
        }

        timeoutId = setTimeout(() => {
            validateUsername(username);
        }, 500); 
    });
    usernameInput.addEventListener('focus', () => {
        if (usernameInput.value.trim() === '') {
            messageElement.className = 'message';
            messageElement.textContent = '';
        }
    });
});
