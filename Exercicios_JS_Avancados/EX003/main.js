const obj = { 
    nome: "Ana", 
    endereco: { 
        cidade: "Luanda",
        telefones: [123456789, 987654321]
    },
    notas: [10, 20, 30]
};

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    const clone = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    
    return clone;
}

const copia = deepClone(obj);

copia.nome = "Maria";
copia.endereco.cidade = "Benguela";
copia.notas.push(40);

const res = document.getElementById('res');
res.innerHTML = `
    <h3>Teste de Deep Clone</h3>
    <p><strong>Original:</strong> ${JSON.stringify(obj)}</p>
    <p><strong>Cópia modificada:</strong> ${JSON.stringify(copia)}</p>
    <p><strong>O original foi alterado?</strong> ${obj.nome === 'Ana' ? 'Não' : 'Sim'}</p>
`;