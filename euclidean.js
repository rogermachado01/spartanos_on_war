/* 
    Run node euclidean.js
    Code by Roger Machado in 04/02/2020.
*/

var n = [...Array(10).keys()];
var m = 4;

function euclidean(n, m, i, res = 0, memo ={ }){
    if (i > n.length -1){
        i = i % n.length
    }
    if (n[i] in memo){
        //console.log('end', res)
        return res
    }else{
        //console.log('r', n[i])
        res +=1
        memo[n[i]] = true
        return euclidean(n,m, i+m, res, memo )
    }
    
}

console.log(euclidean(n,m,0))
