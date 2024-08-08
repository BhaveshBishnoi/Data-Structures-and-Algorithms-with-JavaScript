let arr = [1,2,3,4,5,6,7,8,9]
let target = 11;
let mainArr = []
let newArr = []
for (let i = 0; i < arr.length; i++) {
    newArr = []
    
    for (let j = 0; j < arr.length; j++) {
        if(arr[i]<arr[j]){
            if(arr[i]+arr[j]==target){
                newArr.push(arr[i])
                newArr.push(arr[j])
                mainArr.push(newArr)
            }   
        } 
    }   
}
console.log(mainArr);
