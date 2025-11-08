const obj = { user: { name: "Ana", age: 20 } };

function flattenObject(obj, parentKey = '') {
    let result = {};

    for (const key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            const nested = flattenObject(obj[key], newKey);
            result = { ...result, ...nested };
        } else {
            result[newKey] = obj[key];
        }
    }
    
    return result;
}

const flatObj = flattenObject(obj);

const res = document.getElementById('res');
res.innerHTML = `
    <p><strong>Entrada:</strong> ${JSON.stringify(obj)}</p>
    <p><strong>Saída:</strong> ${JSON.stringify(flatObj)}</p>
`;