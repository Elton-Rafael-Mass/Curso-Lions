let numeros = [1, 2, 3, 10, 4, 5];
let menor = numeros[0];
for(let i = 0; i < numeros.length; i++){
    if (numeros[i] < menor){
        menor = numeros[i]
    }
}
console.log(menor)