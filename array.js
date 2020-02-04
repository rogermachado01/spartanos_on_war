var a = [9,3,9,3,9,7,9]

function arr(array){
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
}

console.log(arr(a))
