let arr=[2,4,1,2,3,5,6,8,33,22,64]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j+1] = arr[j]
            arr[j] = arr[j+1]
        }
    }
    
}
console.log(arr);