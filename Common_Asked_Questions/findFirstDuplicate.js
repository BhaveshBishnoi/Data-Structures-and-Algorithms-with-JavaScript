let arr = [20,43,54,34,54,3,56,7,77,23,20,27,65,11,17]
let start = 0;
let end = arr.length-1;
let val = [];
while(start<=end){
if(val.indexOf(arr[start]) != -1){
    return console.log(`first duplicate if ${arr[start]} at the position of ${start}`);
}else{
    val.push(arr[start])
    start++
}}
