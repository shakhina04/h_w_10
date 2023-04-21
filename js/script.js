// TASK 1
// { brand: 'Honda', price: 13000 },
//   { brand: 'Rolls-Royce', price: 120000 },
//вам надо сравить их по цене
//если цена выше чем 100000 то добавить ключи что машина дорогая
//а если машине на дорогая
//поставить ключ что машина дешавая


//   let brand1 = { brand: 'Honda', price: 13000 }
//   let brand2 = { brand: 'Rolls-Royce', price: 120000 } 
//   console.log(brand1, brand2);

//   if (brand1.price && brand2.price  > 100000 ) {
//     brand1.limit = "Дороговато"
//     brand2.limit = "Дороговато"
//   } 
//   else { 
//     brand1.limit = "Дешёвка"
//     brand2.limit = "Дешёвка"
//   }

//   console.log(brand1, brand2);


  // TASK 2
  let names = ['Alex', 'Jane', 'Bob', 'Gustavo']

let dead_sad  = {
 p1: "Richard",
 p2: "King",
 p3: "Saytama",
 p4: "Fred",
 p5: "Diaz",
 p6: "George",
 p7: "Billy Harington"}

 // чтобы имена имена объектов перенисль в массив

 let names2 = Object.values(dead_sad)
 names = names.concat(names2)
 console.log(names);


   // TASK 3
//  * Создайте функцию "mult", в которой будут умножаться
//  * значения свойств x, y, z переданного объекта
//  * Результат умножения верните из функции


// const objectWithNumbers = {
//   x: 5,
//   y: 20,
//   z: 3,
// }

// mult = objectWithNumbers.x * objectWithNumbers.y * objectWithNumbers.z

// console.log(mult);


 // TASK 4
 /** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
    x: 5,
    y: 20,
    z: 3,
    r: 'Russia',
    j: true
  }

  mult = objectWithNumbers.x * objectWithNumbers.y * objectWithNumbers.z 
  
  let r = objectWithNumbers.r
  let j = objectWithNumbers.j

  
  console.log(mult, r, j,);








 

  

