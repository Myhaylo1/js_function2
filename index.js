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
    if (!(isNaN(a) || isNaN(b))) return (a % b) === 0;
}

console.log('checkMultiplicity("a1",5)=undefined=', checkMultiplicity('a1', 5));
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
        a = Number(a);
        b = Number(b);
        c = Number(c);
        return (((a + b) > c) && ((a + c) > b) && ((c + b) > a));
    }
}

console.log('triangle("a",4,5)=undefined=', triangle('a', 4, 5));
console.log('triangle(3,4,5)=true=', triangle(3, 4, 5));
console.log('triangle(3,4,9)=false=', triangle(3, 4, 9));

/**
 *
 * @param {Number} i: 1 - S=d1*d2/2, 2 - S=(a^2)*sin(alfa)
 * @param {Number} d1
 * @param {Number} d2
 * @returns {number}
 */
function squareRhombus(i, d1, d2) {
    if (!(isNaN(d1) || isNaN(d2))) {
        d1 = Number(d1);
        d2 = Number(d2);
        switch (Number(i)) {
            case 1:
                return (d1 * d2 / 2);
            case 2:
                return (d1 * d1 * Math.sin(d2));
        }
    }
}

console.log('The first equation: squareRhombus(0,4,3)=undefined=', squareRhombus(0, 4, 3));
console.log('The first equation: squareRhombus(1,2,3)=3=', squareRhombus(1, 2, 3));
console.log('The second equation: squareRhombus(2,1,pi/2)=1=', squareRhombus(2, 1, Math.PI / 2));

/**
 *
 * @param {number} r
 * @param {number} h
 * @returns {number}
 */
function squareCylinder(r, h) {
    if (!(isNaN(r) || isNaN(h))) {
        r = Number(r);
        return (2 * Math.PI * r * Number(h) + Math.PI * r * r);
    }
}

console.log('squareCylinder("a",3)=undefined=', squareCylinder('a', 3));
console.log('squareRhombus(1,1)=3*pi=', squareCylinder(1, 1));

/**
 *
 * @param a
 * @param b
 * @param alfa
 * @returns {number}
 */
function squareTriangle(a, b, alfa) {
    if (!(isNaN(a) || isNaN(b) || isNaN(alfa))) {
        return (Number(a) * Number(b) * Math.sin(Number(alfa)) / 2);
    }
}

console.log('squareTriangle(3,4,pi/2)=6=', squareTriangle(3, 4, Math.PI / 2));
