// let heroes = ["thor", "ironman", "Captain", "spiderman"];
// console.log(heroes);

// let marks = [20, 30, 40, 50, 60];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[3]);

// For Loop

// let marks = [33, 44, 55, 66, 77];
// marks[3] = 90;

// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }


// // For Of Loop

// // for(let key of object)
// for( let mark of marks){
//     console.log(mark);
// }


// Practise No 1

// let marks = [20, 30, 40, 50, 60, 70];
// let sum = 0;
// for (let val of marks) {
//     sum = sum + val;
// }

// console.log("The sum of marks is =", sum);
// avg = sum / marks.length;
// console.log("The Averge Mark is =", avg);


// Practise No 2

// let items = [250, 344, 567, 765, 500];

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] * 0.1; // Calculate 10% of the original price
//     items[i] -= offer;
//     // items[i] = parseFloat(items[i].toFixed(2)); // Round to 2 decimal places
// }

// console.log("After applying 10% discount the remaining items prices is", items);


// Push Method and Pop Method and Tostring Method

// let heroes = ["Homelander", "LampLighter", "Thor", "Hulk"];

// // heroes.push("Bruce");

// // heroes.pop();

// // console.log(heroes);

// console.log(heroes);
// console.log(heroes.toString());



// Concat Method

// let marvelHeroes = ["Thor", "Hulk", "CaptainAmerica", "Spiderman"];
// let pakHeroes = ["ImranKhan", "QuideAzam", "AllamIqbal"];

// let heroes = marvelHeroes.concat(pakHeroes);

// console.log(heroes);
// console.log("The Length Of array is", heroes.length);

// Unshift and Shift Method

// let marvelHeroes = ["Thor", "Hulk", "CaptainAmerica", "Spiderman"];

// marvelHeroes.unshift("Jack");
// marvelHeroes.shift("Jack");
// console.log(marvelHeroes);

// Slice and Splice Method

// let marvelHeroes = ["Thor", "Hulk", "CaptainAmerica", "Spiderman"];

// console.log(marvelHeroes.slice(1, 3));
// console.log(marvelHeroes.slice(1, 2));


// Splice Method

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.splice(3, 2, 100, 200));
// console.log(arr);


// Practise Q1

let companies = ["Audi", "Civic", "Mehran", "RollsRoyas"];

companies.shift();
console.log(companies);

companies.splice(1, 1, "LandCrusier");
console.log(companies);

companies.push("RangeRovers");
console.log(companies);

