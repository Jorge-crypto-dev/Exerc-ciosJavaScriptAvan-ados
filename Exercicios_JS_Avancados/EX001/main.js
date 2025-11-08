function enviar(){
    const num = document.getElementById("num").value;
    const number = num.split(',').map(item => Number(item.trim()));

    const contagem = {};
    for (const valor of number){
        if (Number.isNaN(valor)) continue;
        contagem[valor] = (contagem[valor] || 0) + 1;
    }

    const resultado = Object.entries(contagem)
    .map(([numero, vezes]) => ({ numero: Number(numero), vezes }))
    .sort((a, b) => b.vezes - a.vezes || b.numero - a.numero)
    .slice(0, 3);

    const res = document.getElementById("res");
    res.textContent = `Saída: ${JSON.stringify(resultado)}`;
}
