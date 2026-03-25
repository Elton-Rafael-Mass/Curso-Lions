let numeros = [1, 20, 30, 2, 4, 12, 16, 19];
let maiores = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 10){
       maiores ++
    }
}
console.log(maiores, "São maiores de 10!");