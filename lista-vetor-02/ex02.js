let numeros = [1, 3, 3, 4, 5, 5, 6, 4, 3, 3];
let resultado = [];

for (let i = 0; i < numeros.length; i++) {
    let existe = false;

    for (let j = 0; j < resultado.length; j++) {
        if (numeros[i] === resultado[j]) {
            existe = true;
            break;
        }
    }

    if (!existe) {
        resultado.push(numeros[i]);
    }
}

console.log(resultado);