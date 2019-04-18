/********
make a lisp step 0: the REPL.

sources:
https://nodejs.org/api/readline.html
*********/

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'user> '
});

function READ(first) {
    return first;

}

function EVAL(first){
    return first;

}

function PRINT(first){
    return first;

}

function rep(aninput){
    var read, value, print;
    
    read = READ(aninput);
    eval = EVAL(read);
    print = PRINT(eval);
    return print;
}

function main() {
    rl.prompt();
    rl.on('line', (line) => {
        console.log(rep(line));
        rl.prompt();
        });
    }

main()
