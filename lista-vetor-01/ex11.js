// let a = [1, 6, 3, 9, 5];
// let b = [];
// for(let i = 0; i < a.length; i++){
// b[i] = a[a.length -1 -i]
// }
// console.log(b)


let a = [1, 6, 3, 9, 5];
let b = [];
let j = 0;
for (let i = a.length; i > 0; i--) {
    b[j] = a[i-1]
    j++
}
console.log(b)