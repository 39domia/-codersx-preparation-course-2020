/**
 * Give a list of students, filter out non-female
 */

var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
    return members.filter(function (x) {
        return x.gender !== 'female';


    });
}
console.log(filterOutFemales(members));