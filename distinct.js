/* 
    Run node distinct.js
    Code by Roger Machado in 04/02/2020.
*/

var a = [ 2,1,1,2,3,1];

function distincts(array){
    var distinct = 0;
    var memo = {};
    array.forEach(val=>{
        if( memo[val] === undefined){
            memo[val] = true
            distinct +=1
        }
    })
    return distinct
}

console.log(distincts(a))