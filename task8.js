let map = new Map ([
  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry",    "blue"] 
]);
for(let pair of map.entries()) {
console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`)
}