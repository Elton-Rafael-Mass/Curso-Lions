const nums = [5, 6, 7, 7, 6, 5];
let palindro = true;
let tamanho = nums.length 
for(let i = 0; i < tamanho /2; i++){
    if(nums[i] !== nums[tamanho -1 -i]){
        palindro = false;
        break;
    }
}
if(palindro){
    console.log('palindromo');
} else {
    console.log('Não')
}