let numeros = [6, 3, 2, 5, 2, 6, 2, 2];
let x = 2;
let indice = -1;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === x){
       indice = i;
       break;
    }
}
console.log("O número apareceu na posição: ",indice);