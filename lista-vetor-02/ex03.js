const nums = [1, 3, 3, 4, 5, 3, 2, 3, 4, 6, 3];
let x = 3;
let contador = 0;

for (let i = 0; i < nums.length; i++) {
    if(nums[i] === x){
        contador++ 
    }
    
}
console.log("O número apareceu ",contador, " Vezes")