let arr = [1,1,1,1,1,1];
let elem = arr[0];
for (let i = 0; i < arr.length; i++) { 
  if (elem !== arr[i]){
    console.log("элементы разные") 
}  else{
  console.log("элементы одинаковые")
}
}