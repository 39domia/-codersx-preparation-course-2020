/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example:
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
 }
 */

function countOccurrences(arr) {
    return arr.reduce(function(result, item) {
        result[item] = (result[item] || 0) + 1;
        return result
    }, {})
}
console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));

// function countOccurrences(arr) {
//     let result = arr.reduce( function(count, item) {
//         if(count[item] === undefined) count[item] = 1;
//         else count[item] += 1;
//         return count;
//     },[])
//     return result;
// }

// function countOccurrences(arr) {
//     return arr.reduce(function(cur, item){
//         if(item in cur){
//             cur[item] ++;
//         }else{
//             cur[item] =1;
//         }
//         return cur;
//     },{})
// }

