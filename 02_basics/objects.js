// const book = {
//     title : "this is the title",
//     author : "helle keller",
//     year : 2014,
//     isPublished : true,

//     getSummary : () => {
//         console.log("the book atomic habits was written by someone in 2018");
//     }
// }

// book.getSummary();

// function printKeysAndValues(obj) {

// for(let items in obj){
   
//     if(typeof obj[items] !== "function") {
        
//         console.log(`${items} => ${obj[items]}`)
//     }
// }
// }

// printKeysAndValues(book);

//"title => Atomic Habits"

// const user = {
//     name: "Sara",
//     age: 28,
//     location: {
//       city: "Pune",
//       country: "India",
//     },
//   };

//   const {city : mycity} = user.location;
//   console.log(mycity);


const products = [
    {
        id : 1,
        name : "p1",
        price : 100
    },
    {
        id : 2,
        name : "p1",
        price : 100
    }
]
products.forEach((key) => {

console.log(key);    
})

console.log(products.find(id === 2));