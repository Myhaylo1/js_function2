/**
 *
 * @param {number} x   //age
 * @returns {boolean}  //or undefined
 */
function isAdult(x) {
    if (!isNaN(x))  return x >= 16;
}
console.log('isAdult("sdf")=', isAdult('sdf'));
console.log('isAdult(20)=', isAdult(20));
console.log('isAdult(4)=', isAdult(4));

