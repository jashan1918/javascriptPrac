// const student = {
//     name: "askjdfkl",
//     rollno: 23,
//     course: "sdhfiuheiu",
//     isEnrolled: true
// }

// console.log(`name ${student.name} \nrollno ${student.rollno} \n${student.course} \n${student.isEnrolled}`);

// console.log(`name ${student["name"]} \nrollno ${student["rollno"]} \n${student["course"]} \n${student["isEnrolled"]}`);


// const movie = {

//     title: "isdlk",
//     director: "fasjdfj",
//     year : 2004
// }

// movie.genre  = "horror";
// movie.year = 2005;
// delete movie.director;

// const keyName = "rating";
// movie[keyName] = 8.7;

// console.log(movie);

// const student = {
    
//     name: "jashan",
//     rollno: 78,
//     isPassed:true
// }

// for(let key in student) {

//     console.log(student[key]);
// }

// const car = {
//     model: "aklsdjfkl",
//     brand: "fsjakadjf",
//     year: 2004
// }

// console.log(Object.keys(car));
// console.log(Object.values(car));
// for (let [key,values] of Object.entries(car)) {

//     console.log(`${key} : ${values}`);
// }

// const laptop = {
//     brand: "HP",
//     model: "Pavilion",
//     price: 55000,
//     isAvailable: true
//   };

//   for(let key in laptop){
//     console.log(`${key} : ${laptop[key]}`);
//   }

// const person = {
//   name: "Aman",
//   age: 22,
//   isStudent: true
// };

// const keys = Object.keys(person);

// keys.forEach((key) => {
  
//   console.log(key, "=>", person[key]);
// })

// const book = {
//   title: "Atomic Habits",
//   author: "James Clear",
//   year: 2018,
// };

// const values = Object.values(book);
// console.log(values);

// values.forEach((val) => {
//   console.log(val);
// });

// const movie = {
//   name: "Interstellar",
//   director: "Christopher Nolan",
//   year: 2014,
//   rating: 8.6
// };

// const values = Object.values(movie);

// values.forEach((value) => {

// console.log(value);
// })

function getData() {

const res = fetch("link")
.then((res) => res.json())
.then((json) => {
  console.log(json);
})

}