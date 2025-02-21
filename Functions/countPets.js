let pets = ["dog", "cat", "goat", "dog", "cat"];
let obj={}
for (let i = 0; i < pets.length; i++) {
  if (!obj[pets[i]]) {
    obj[pets[i]] = 1;
  } else {
    obj[pets[i]]++;
  }
}

console.log(obj);
