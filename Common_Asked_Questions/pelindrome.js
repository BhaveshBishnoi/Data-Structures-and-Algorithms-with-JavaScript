let str = 'raceca';
let start = 0;
let end = str.length-1;

while(start<=end){
    
if(str.charAt(start)==str.charAt(end)){
    start++;
    end--;
}else{
    return console.log(false);;
}
return console.log(true);
}