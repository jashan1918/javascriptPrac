// const readline = require("readline");

// const rl = readline.createInterface({

//     input: process.stdin,
//     output: process.stdout
// })


// rl.question("what is your name?", (name) => {

//     const trimmedName = name.trim().toLocaleLowerCase();

//     console.log(`hello mr.${trimmedName}`);
// })

// const readline = require("readline");

// const rl = readline.createInterface({

//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("Enter a string  ", (string) => {

//     const words  = string.split(" ");
//     console.log(`the given string has a total of ${words.length} words`);

//     rl.close();
// })

const readline = require('readline')

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})


rl.question("type any string ",(str) => {

    console.log(str.replace(/ /g, "-"));

    rl.close();
})

