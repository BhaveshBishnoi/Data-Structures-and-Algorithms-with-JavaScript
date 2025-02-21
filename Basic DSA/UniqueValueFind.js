let array = [2, 4, 1, 98, 8, 8, 2, 33, 76, 22];
let uniqueArr = [];

// for (let i = 0; i < array.length; i++) {
//     if(uniqueArr.indexOf(array[i]) == -1){
//         uniqueArr.push(array[i])
//     }
    
// }



for (let i = 0; i < array.length; i++) {
    let isUnique = false;
    for (let j = 0; j < uniqueArr.length; j++) {
        if(array[i] == uniqueArr[j]){
            isUnique = true;            
            break;
        }        
    }
    if(!isUnique){
        uniqueArr.push(array[i])
    }
}

console.log(array, uniqueArr);
