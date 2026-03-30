const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsPar = [];
const numsImpar = [];
let j = 0;
let k = 0;


for(let i = 0; i < nums.length; i++){
    if((nums[i] % 2)=== 0){
        numsPar[j] = nums[i];
        j++
    } 
    if((nums[i] % 2)=== 1){
        numsImpar[k] = nums[i];
        k++
    }
} 
console.log(numsPar);
console.log(numsImpar);