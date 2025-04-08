// const arr = ["pancakes" , "chicken", "goat" , "pizza", "burger"];

// console.log(arr[0]);
// console.log(arr.at(-1));

// const books = ["book1", "book2", "book3"];

// books.push("book4");
// books.shift();

// console.log(books);

// for(i = 0; i <= 2; i++) {
//     console.log(books[i]);
// }

// for(let [index,book] of books.entries()){
//     console.log(index,book);
// }

// books.forEach((book)=> {

//     console.log(book);
// })

// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits.includes("banana"));
// console.log(fruits.indexOf("banana"));

// const users  = [
//     {id: 1, name: "first"},
//     {id: 2, name: "second"},
//     {id: 3, name: "third"}
// ]

// const user = users.find((userr) => (userr.id === 1));
// console.log(user);

// const products = [
//     { id: 1, name: "p1", price: 300 },
//     { id: 2, name: "p2", price: 150 },
//     { id: 3, name: "p3", price: 400 }
//   ];


// const expensive = products.filter((item) => (item.price  > 200));
// console.log(expensive);

// const students = [
//     {id:1, marks: 100},
//     {id:2, marks: 60},
//     {id:3, marks: 78},
//     {id:4, marks: 98}
// ]

// const smartStudents = students.filter((student) => (student.marks > 75));
// console.log(smartStudents);

// const names = ["Alice", "Bob", "Charlie", "Eve", "Oliver", "David", "Ursula"]



// const vowelNames = names.filter((name) => {
//     const firstChar = name[0].toLowerCase();
//     return "aeiou".includes(firstChar);

// })

// console.log(vowelNames);

// const items = ["apple", "banana", "apple", "orange", "banana", "grapes"];

// const singleItems = items.filter((item, index) => {
//     return items.indexOf(item) === index;
// })

// console.log(singleItems);

// const marks = [75, 88, 92, 64, 81];

//  const addedvalues = marks.reduce((acc, curr) => {

//         return acc + curr;

//  },0);

//  console.log(addedvalues);

//  console.log(`average = `, addedvalues/marks.length);


// const studentMarks = [72, 85, 91, 42, 64];

// const someoneFailed = studentMarks.some((num) => num < 50);

// console.log(someoneFailed);


// const marks2 = [66, 78, 84, 90, 55];

// const allPassed = marks2.every((num) => num > 50);

// console.log(allPassed);


const products = [
    { id: 1, name: "Shirt", price: 1200 },
    { id: 2, name: "Shoes", price: 2500 },
    { id: 3, name: "Cap", price: 400 },
    { id: 4, name: "Shoes", price: 2500 }
  ];

  products.forEach((value) => {
    console.log(value.name);
  });

  products.find((value) => {
    
    if(value.id > 3){
        console.log(value);
    }
  });

  const cheapProducts = products.filter((prod) => (prod.price < 2000));
  console.log(cheapProducts);

  const uniqueProducts = products.filter((prod, index,arr) => {

    return arr.findIndex((item) => item.name === prod.name) === index;
  })

  console.log(uniqueProducts);

  const isShirt = products.some((prod) => (prod.name === "Shirt"));
  console.log(isShirt);

  const newElementArray = products.map((prod) => (prod));
const newElement = {id: 5, name : "jeans", price: 12000};

  newElementArray.push(newElement);
  console.log(newElementArray);