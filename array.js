var a = [9,3,9,3,9,7,9]

/* function arr(array){
    var dict = {};
    var unpaired = 0;
    array.forEach(val=>{
        dict[val] = dict[val] === undefined ? 1 : dict[val] +1
    })

    for (var nums in dict){
        if (dict[nums]%2 === 1){
            unpaired = nums
        }
    }
    return unpaired
} */

function arr(array, i, memo ={ }, bin_res ={}){
    if (i > array.length -1){
        console.log('end')
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
    console.log(array[i], memo, bin_res)
    return arr(array, i+1, memo, bin_res)
}

console.log(arr(a, 0))

