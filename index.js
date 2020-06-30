/**
 *
 * @param {number} x   //age
 * @returns {boolean}  //or undefined
 */
function isAdult(x) {
    if (!isNaN(x)) return x >= 16;
}

console.log('isAdult("sdf")=undefined=', isAdult('sdf'));
console.log('isAdult(20)=true=', isAdult(20));
console.log('isAdult(4)=false=', isAdult(4));

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {boolean} a%b=0
 */
function checkMultiplicity(a, b) {
    if (!(isNaN(a) && isNaN(b))) return (a % b) === 0;
}

console.log('checkMultiplicity(25,5)=true=', checkMultiplicity(25, 5));
console.log('checkMultiplicity(15,3)=true=', checkMultiplicity(15, 3));
console.log('checkMultiplicity(15,5)=true=', checkMultiplicity(15, 5));
console.log('checkMultiplicity(15,4)=false=', checkMultiplicity(15, 4));

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean} (a+b)>c
 */
function triangle(a, b, c) {
    if (!(isNaN(a) || isNaN(b) || isNaN(c))) {
        a=Number(a);
        b=Number(b);
        c=Number(c);
        return (((a + b) > c) && ((a + c) > b) && ((c + b) > a));
    }
}

console.log('triangle("a",4,5)=undefined=', triangle('a', 4, 5));
console.log('triangle(3,4,5)=true=', triangle(3, 4, 5));
console.log('triangle(3,4,9)=false=', triangle(3, 4, 9));
