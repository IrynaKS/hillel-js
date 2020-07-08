// Есть входные данные:
// размеры коробки (10 * 20 * 40)
// диаметр круга (15)
// Входные параметры записать в переменные и назвать (width, height, length, diameter)
// Посчитать объем коробки и записать результат в переменную.
// Посчитать площадь одной из сторон коробки и записать в переменную.
// Посчитать площадь круга и записать в переменную.
// Результирующие переменные вывести через console.log с подписанием того что выводится
// console.log('Parameter:', variable);

const width = 20;
const height = 10;
const length = 40;

const diameter = 15;

let boxVolume = width * height * length;
console.log('box volume:', boxVolume);

let boxSideOne = width * height;
console.log('box Side One', boxSideOne);

let boxSideTwo = width * length;
console.log('box Side Two', boxSideTwo);

let boxSideThree = length * height;
console.log('box Side Three', boxSideThree);

let circleArea = Math.PI * ((diameter * diameter) / 4);
console.log('circle area', circleArea);

// or

let circleArea2 = 3.1415 * (diameter / 2) * (diameter / 2);
console.log(circleArea2);
