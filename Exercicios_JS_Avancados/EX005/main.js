async function executarEmSequencia(...funcoes) {
    const resultados = [];
    for (const funcao of funcoes) {
        resultados.push(await funcao());
    }
    return resultados;
}

const f1 = () => new Promise(r => setTimeout(() => r("Primeira"), 1000));
const f2 = () => new Promise(r => setTimeout(() => r("Segunda"), 500));

async function teste() {
    const res = document.getElementById('res');
    const resultados = await executarEmSequencia(f1, f2);
    res.textContent = JSON.stringify(resultados);
}

teste();