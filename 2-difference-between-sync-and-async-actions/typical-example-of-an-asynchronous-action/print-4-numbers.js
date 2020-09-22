function print1() {
    const number1 = 1;
    console.log(number1);
}


function print2() {
    function getNumber2() {
        return 2;
    }
    // Blocking function call below
    const number2 = getNumber2();
    console.log(number2);
}


function print3() {
    const fs = require('fs');
    /*
    1.
    Reading data from a file is a non-blocking call, 
    which is shown below
    in the "number3" parameter below which 
    refers to the "number3.txt" file text, from the fs.readFile() method,
    and is an asynchronous functiona and passed into a callback function.

    2. The callback function below is an asynchronous function and is executed
    after all the synchronous, blocking function calls such as:
    print1();
    print2();
    print4();
    */
    fs.readFile('./number3.txt', 'utf-8', function (err, number3) {
        console.log(number3);
    });
}


function print4() {
    const number4 = 4;
    console.log(number4);
}

print1();
print2();
print3();
print4();
