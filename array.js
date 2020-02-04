/* 
    Run node array.js
    Code by Roger Machado in 04/02/2020.
*/

var a = [9,3,9,3,9,7,9]

function arr(array, i, memo ={ }, bin_res ={}){
    if (i > array.length -1){
        //console.log('end')
        return bin_res['unpaired']
    }
    if (memo[array[i]] === undefined){
        memo[array[i]] = 1
        if(memo[array[i]] % 2 === 1){
            bin_res['unpaired'] = array[i]
        }
    }else{
        bin_res['paired'] = array[i]
    }
    //console.log(array[i], memo, bin_res)
    return arr(array, i+1, memo, bin_res)
}

console.log(arr(a, 0))

