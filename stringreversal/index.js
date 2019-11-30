function reverse(str) {

    var reversed = '';
    var trimmed = str.trim();

    for(i=trimmed.length-1; i>=0; i--){
        reversed += trimmed[i]
    }

    return reversed;

}


module.exports = reverse;
