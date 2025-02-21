let n = 'bhavesh';
let rev = ''

for(let i = n.length-1; i>=0; i--){
    rev = rev.concat(n.at(i))
}
console.log(rev);