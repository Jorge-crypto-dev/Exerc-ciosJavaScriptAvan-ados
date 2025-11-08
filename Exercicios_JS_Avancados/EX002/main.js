function flatten(array) {
    return array.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

function processar() {
    try {
        const input = document.getElementById('arrayInput').value.trim();
        const array = JSON.parse(input);
        
        if (!Array.isArray(array)) {
            throw new Error('Por favor, insira um array válido');
        }
        
        const resultado = flatten(array);
        
        document.getElementById('res').textContent = `Saída: ${JSON.stringify(resultado)}`;
    } catch (error) {
        document.getElementById('res').textContent = `Erro: ${error.message}`;
    }
}