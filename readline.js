const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const num1 = Math.floor((Math.random() * 10) + 1);
const num2 = Math.floor((Math.random() * 10) + 1);
const answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`, (userInput) => {
    if (userInput.trim() == answer) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect, please try again \n');
        rl.prompt();
        rl.on('line', (userInput) => {
            // event 'line' will trigger when user input
            if (userInput.trim() == answer) {
                rl.close();
            } else {
                rl.setPrompt('Incorrect again \n');
                rl.prompt();
            }
        })
    }
});

//rl is also instance of EventEmitter

rl.on('close', () => {
    console.log('Correct');
})