let array = [2, 4, 1,98, 8, 33,76, 22];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < array.length; i++) {
    if(first<array[i]){
        second = first;
        first = array[i];
    } else if(array[i]>second && array[i] != first ){
        second = array[i]
    }
}
console.log(second);
