
const { readFile,writeFile } = require('fs');
const util = require('util');

// console.log("Started the first task.");
// readFile("./first.txt", "utf8", (err, result) => {
//     if (err) {  
//         console.log(err);
//         return; 
//     }
//     console.log(result);
//     console.log("Finished the first task.");
// });

// console.log("Started the second task.");

//Above code can result in a hell/nested loop
//if we need to add two more reads and one write file operation
//after the first file read operation.
//So effective method is as follows using promises:

// const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// getText("./first.txt")
//     .then(result => console.log(result))
//     .catch(err => console.log(err));



//more effective method is async function with await

// const start = async() => {
//     try {
//         const first = await getText("./first.txt");
//         console.log(first);
//         const second = await getText("./second.txt");
//         console.log(second);
//     } catch (err) { 
//         console.log(err);
//     }
// };

//start();

//Using util modules promisify function
//to get the promise
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFilePromise("./first.txt", "utf8");
        console.log(first);
        const second = await readFilePromise("./second.txt", "utf8");
        console.log(second);
        await writeFilePromise("./result.txt", `This is output: ${first}, ${second}`);
    } catch (err) { 
        console.log(err);
    }
};

start();
