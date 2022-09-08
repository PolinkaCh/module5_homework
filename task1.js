let value;
value = prompt ('Введите значение');
value = + value;
if(typeof value !== "number" ) {
    console.log("Упс, кажется, вы ошиблись");
} else if (value == "NaN") {
  console.log("Упс, кажется, вы ошиблись")
} else if (value % 2 === 0) {
  console.log("Число чётное")
} else {
  console.log("Число нечётное")
} 