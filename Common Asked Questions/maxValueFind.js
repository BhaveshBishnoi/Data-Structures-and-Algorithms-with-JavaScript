let arr = [20,63,54,34,55,3,56,7,77,23,24,97,65,11,17]
let max = 0;

for (let i = 0; i < arr.length; i++) {
   
    if(arr[i]>max){
        max = arr[i]
    }else{
console.log(`Max Value till now ${max}`);
    }
}

console.log(max);