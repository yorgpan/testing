function reverse(str) {

    let reversed = '';
    let trimmed = str.trim();

    for(i=trimmed.length-1; i>=0; i--){
        reversed += trimmed[i]
    }

    return reversed;
}



function reverse2(str){

    let reversed = '';
    let trimmed = str.trim().split('');

    return trimmed.reduce((acc, cur_val, cur_index, arr)=>{
        return acc+arr[arr.length - cur_index - 1]
    }, '')
}




module.exports = [reverse, reverse2];
