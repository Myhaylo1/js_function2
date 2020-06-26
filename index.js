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

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {boolean} a%b=0
 */
function checkMultiplicity(a,b)
{
  if (!(isNaN(a) && isNaN(b))) return (a%b)===0;
}
console.log('checkMultiplicity(25,5)=',checkMultiplicity(25,5));
console.log('checkMultiplicity(15,3)=',checkMultiplicity(15,3));
console.log('checkMultiplicity(15,5)=',checkMultiplicity(15,5));
console.log('checkMultiplicity(15,4)=',checkMultiplicity(15,4));
