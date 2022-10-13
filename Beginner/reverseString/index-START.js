/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



//chain in-built methods
function reverseString(text) {
    return text.split("").reverse().join("");
}

function reverseString(text) {
    return [...text].split("").reverse().join("");
}

//for loop
function reverseString(text) {
    let result = '';
    for (let i = text.length-1; i>=0; i--){
        result += text[i];
    }
    return result
}

//for..of loop
function reverseString(text) {
    let result = '';
    for (let char of text){
        result=char+result;
    }
    return result
}

//recursion
function reverseString(text) {
    if(text === ''){
        return '';
    }else{
        return reverseString(text.substr(1)) + text[0];
    }
}

//reduce method
function reverseString(text) {
    return text.split("").reduce((acc,char) => char+acc, '')
}




module.exports = reverseString