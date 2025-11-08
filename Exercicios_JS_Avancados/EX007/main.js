const jogadores = [
    { nome: "Ana", pontos: 120 },
    { nome: "Carlos", pontos: 200 },
    { nome: "Beatriz", pontos: 150 },
    { nome: "João", pontos: 180 },
    { nome: "Maria", pontos: 90 }
];

function atualizarRanking() {
    const ranking = [...jogadores].sort((a, b) => b.pontos - a.pontos);
    
    const rankingElement = document.getElementById('ranking');
    rankingElement.innerHTML = '';
    
    ranking.forEach((jogador, index) => {
        const posicao = index + 1;
        const jogadorElement = document.createElement('div');
        jogadorElement.className = `jogador ${getClassePosicao(posicao)}`;
        
        jogadorElement.innerHTML = `
            <span class="posicao">${posicao}º</span>
            <span class="nome">${jogador.nome}</span>
            <span class="pontos">${jogador.pontos} pts</span>
        `;
        
        rankingElement.appendChild(jogadorElement);
    });
}

function getClassePosicao(posicao) {
    switch(posicao) {
        case 1: return 'primeiro';
        case 2: return 'segundo';
        case 3: return 'terceiro';
        default: return '';
    }
}

function adicionarJogador(nome, pontos) {
    jogadores.push({ nome, pontos });
    atualizarRanking();
}
document.addEventListener('DOMContentLoaded', () => {
    atualizarRanking();
    
    setTimeout(() => {
        adicionarJogador("Novo Jogador", 210);
    }, 3000);
});