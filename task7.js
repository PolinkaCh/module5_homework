let arr = [4,5,null,"каша",2,10,0,NaN,9];
 let numNull = 0;
 let numOdd  = 0;
 let numEven = 0;
 arr.forEach (function(item, index, array) {
    if (typeof item === "number") {
      if (item !== 0){
      let division = item % 2;
      switch(division) {
        case(0):
          numOdd++;
          break;
        case(1):
          numEven++; 
          break;            
   } 
 } else {
    numNull++; 
 }   
 }
 })
   console.log (`количество нулей = ${numNull}`),
   console.log (`количество чётных чисел = ${numOdd}`),
   console.log (`количество нечётных чисел = ${numEven}`)