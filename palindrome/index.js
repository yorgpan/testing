// Check if string is a palindrome one
// That means that the string forms the same word if read reversed

const [reverse] = require('../stringreversal/index');

// This parses the string completely./
// Time Complexity O(n)
function palindrome2(str) {
    let reversed_str = String(reverse(str));

    return reversed_str.toLowerCase() === str.toLowerCase()

}

// Time Complexity O(n/2)
function palindrome(str){
    let len = str.length;
    let isit = true;

    for(let i=0; i<parseInt((len/2)-1); i++){

        if(str[i].toLowerCase() !== str[len-i-1].toLowerCase()){
            isit = false;
            break;
        }
    }

    return isit;
}

module.exports = [palindrome, palindrome2];

