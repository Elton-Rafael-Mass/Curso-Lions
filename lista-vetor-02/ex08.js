const nums = [1, 2, 3, 1, 2, 5, 6, 7];
let maiorSequencia = 1;
let sequenciaAtual = 1;

for(let i = 1; i < nums.length; i++){
    if(nums[i] > nums[i - 1]){
        maiorSequencia++
    } else {
        maiorSequencia = 1;
    }
    if (maiorSequencia > sequenciaAtual){
        sequenciaAtual = maiorSequencia;
    }
    
}
console.log("Tamanho da maior sequência crescente consecutiva:", maiorSequencia);