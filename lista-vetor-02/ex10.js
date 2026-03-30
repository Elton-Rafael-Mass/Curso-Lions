const nums = [1, 2, 3, 4];
const nums2 = [1, 2, 3];
let tamanho1 = nums.length;
let tamanho2 = nums2.length
let posicao = true;

for(let i = 0; i < nums.length; i++){
    if(nums[i] != nums2[i]){
        posicao = false
        break;
    }
}
if(posicao){
    console.log("Elas são iguais em posição!");
} else{
    console.log("As Arrays tem posições diferentes!");
}
if(tamanho1 === tamanho2){
    console.log("Elas tem o mesmo tamanho!");
} else {
    console.log("Elas tem tamanhos diferntes!")
}