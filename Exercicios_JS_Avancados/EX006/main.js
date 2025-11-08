const emojis = ['🐶', '🐱', '🐭', '🐹'];
const cartas = [...emojis, ...emojis];

let cartasViradas = [];
let cartasEncontradas = [];
let tentativasRestantes = 10;
let podeJogar = true;

cartas.sort(() => Math.random() - 0.5);

const tabuleiro = document.getElementById('tabuleiro');
const elementoTentativas = document.getElementById('tentativas');

function criarTabuleiro() {
    tabuleiro.innerHTML = '';
    cartas.forEach((emoji, index) => {
        const carta = document.createElement('div');
        carta.className = 'carta';
        carta.dataset.index = index;
        carta.textContent = emoji;
        carta.addEventListener('click', virarCarta);
        tabuleiro.appendChild(carta);
    });
}

function virarCarta(e) {
    const carta = e.target;
    const index = parseInt(carta.dataset.index);

    if (!podeJogar || carta.classList.contains('virada') || cartasEncontradas.includes(index)) {
        return;
    }
    
    carta.classList.add('virada');
    cartasViradas.push({ index, elemento: carta });
    
    if (cartasViradas.length === 2) {
        podeJogar = false;
        tentativasRestantes--;
        elementoTentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
        
        const [primeira, segunda] = cartasViradas;
        
        if (cartas[primeira.index] === cartas[segunda.index]) {
            cartasEncontradas.push(primeira.index, segunda.index);
            cartasViradas = [];
            podeJogar = true;
            
            if (cartasEncontradas.length === cartas.length) {
                setTimeout(() => {
                    const mensagem = tentativasRestantes >= 0 ? 'Parabéns! Você venceu!' : 'Fim de jogo!';
                    alert(mensagem);
                    reiniciarJogo();
                }, 500);
            }
        } else {
            setTimeout(() => {
                primeira.elemento.classList.remove('virada');
                segunda.elemento.classList.remove('virada');
                cartasViradas = [];
                podeJogar = true;
                
                if (tentativasRestantes <= 0) {
                    setTimeout(() => {
                        alert('Suas tentativas acabaram! Tente novamente.');
                        reiniciarJogo();
                    }, 500);
                }
            }, 1000);
        }
    }
}

function reiniciarJogo() {
    cartasViradas = [];
    cartasEncontradas = [];
    tentativasRestantes = 10;
    podeJogar = true;
    elementoTentativas.textContent = 'Tentativas restantes: 10';
    cartas.sort(() => Math.random() - 0.5);
    criarTabuleiro();
}

criarTabuleiro();