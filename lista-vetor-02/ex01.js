const nums = [1, 2, 6, 3, 5, 8, 0, 9];
let maior = nums[0];
let maiorSeg = null;

for(let i = 1; i < nums.length; i++){
    if(nums[i] > maior){
        maiorSeg = maior;
        maior = nums[i];
    } else if (nums[i] < maior && (maiorSeg === null || nums[i] > maiorSeg)){
        maiorSeg = nums[i];
    }
}
console.log("Maior:",maior);
console.log("Segundo maior:",maiorSeg);