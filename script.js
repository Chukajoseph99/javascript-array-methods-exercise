// // convert a string to camelCase
// // function camelize(str){
// //     let camelCase = str.split("-");
// //     for(let i = 1; i < camelCase.length; i++){
// //         camelCase[i] = camelCase[i][0].toUpperCase() + camelCase[i].slice(1);
// //     }
// //     return camelCase.join("");
// // }

// // console.log(camelize("list-style-image"));



// // Filter Range
// // function filterRange(arr, a, b){
// //     let filtered = arr.filter((elem) => {
// //         return elem >= a && elem <= b
// // });
// //     return filtered;
// // }

// // console.log(filterRange([5,3,8,1],1,4));


// //Sort in decreasing order
// function decreasingOrder(arr){
//     let sorted = arr.sort(function(a,b){
//         return b - a;
//     })
//     return sorted;
// }

// decreasingOrder([5, 2, 1, -10, 8]);
// console.log(decreasingOrder([5, 2, 1, -10, 8]))

// // Copy and sort array
let arr = ["HTML", "JavaScript", "CSS"];
let copyArray = Array.from(arr)
copyArray.sort();

console.log(copyArray)
console.log(arr);

function JavaScript(){
  return console.log("hello world");
}

JavaScript();

// // Map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(function(elem){
//     return elem.name
// })

// console.log(names);


// // Map To Objects
// let john = { name: "John", surname: " Smith", id: 1 };
// let pete = { name: "Pete", surname: " Hunt", id: 2 };
// let mary = { name: "Mary", surname: " Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(function(elem){
// return ({fullName: elem.name + elem.surname, id: elem.id})
// })

// console.log(usersMapped);


// // Sort users by age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// let sortByAge = arr.sort(function(a, b){
//     return a.age - b.age;
// })
//  console.log(sortByAge);



//  // Filter range "in place"
//     function filterRangeInPlace(arr, a, b){
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] < a || arr[i] > b){
//                 arr.splice(i, 1);
//                 i--;
//             }
//         }
//     }

// let arr = [2, 6, 9, 10, 12, 14];
// filterRangeInPlace(arr, 5, 10);

// console.log(arr); 



// //Shuffle An Array
// function shuffle(array){
//     for(let i = 0; i < array.length; i++){
//         let random = Math.floor(Math.random() * array.length);

//         let temp = array[i];
//         array[i] = array[random];
//         array[random] = temp;
//     }
//     return array;
// }

// console.log(shuffle([1,2,3]))


// //Get Average Age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john.age, pete.age, mary.age ];

// let total = 0;

// function getAverageAge(users){
// for(let i = 0; i < arr.length; i++){
//     total += arr[i];
// }
// let averageAge = total / arr.length;

// return averageAge;
// }

// console.log(getAverageAge(arr));


// // Filter unique array members
  
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  
  
//   function unique(arr) {
//     let uniqueArray = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!uniqueArray.includes(arr[i])){
//          uniqueArray.push(arr[i]);
//         }
//          return uniqueArray;
//     }
//   }

//   console.log(unique(strings));


// Create keyed objects from Array

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  

function groupById(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){

        const item = arr[i];
        const id = item.id;
        obj[id] = item;
    
    }
    return obj;
}

console.log(groupById(users))


//Calculator
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
};

const multiply = function(arr) {
    let multiply = 1;
    for(let i = 0; i < arr.length; i++){
        multiply *= arr[i];
    }
    return multiply;
};
console.log(multiply([1,2,4]));

const power = function(a, b) {
    return Math.pow(a, b);
};
console.log(power(3,4));

const factorial = function(num) {
    let factorialNum = 1;
    for(let i = 1; i <= num; i++){
        factorialNum *= i
    }

    return factorialNum;
};
console.log(factorial(3));