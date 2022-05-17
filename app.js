var readlineSync = require('readline-sync');
//initial question to define wether user wants to encrypt or decrypt code
function firstQuestion(){
    let input = readlineSync.question('would you like to <encode> or <decode>?');
    if (input === "encode"){
        encode();
    }
    if (input === "decode"){
        decode();
    }
}
function numbersToString(coded){
    let result = "";
    for (var j = 0; j < coded.length; j++) {
        result = result + String.fromCharCode(coded[j]);
    }
    return result;
}
//function if user types in "encode"
function encode(){
    let input = readlineSync.question('enter Code ty encrypt:\n');

    const coded = [];
    for (var i = 0; i < input.length; i++) { 
        coded.push (input.charCodeAt(i) + 1);
    }
    let result = numbersToString(coded);
    
    console.log("Your encrypted Code:\n" + result);  
}
//function if user types in "decode"
function decode(){
    let input = readlineSync.question('enter Code ty decrypt:\n');

    const coded = [];
    for (var i = 0; i < input.length; i++) { 
        coded.push (input.charCodeAt(i) - 1);
    }
    let result = numbersToString(coded);
    console.log("Your decrypted Code:\n" + result);  
}
firstQuestion();
