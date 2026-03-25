let numeros = [2, 3, 2, 5, 2, 6, 2, 2, 9, 2];
let maiores = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === 2){
       maiores ++
    }
}
console.log("apareceu", maiores, "vezes");