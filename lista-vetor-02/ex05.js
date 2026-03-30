const nums = [ 1, 2, 3, 4, 5];
const nums2 = [];


for(let i = 0; i < nums.length; i++){
    nums2[i] = nums[i]
}
let p = nums2.pop()
nums2.unshift(p)

console.log(nums2)