//age = +prompt('Enter your age: ')

const isAdult = function (age) {
    if (!isNaN(age)) {
        return (age >= 18)
    };
    return null;
};



//const var1 = prompt('Enter first var: ');
//const var2 = prompt('Enter second var: ');

const checkMultiplicity = function (var1, var2) {
    if (!isNaN(var1) && !isNaN(var2)) {
        return (var1 % var2 === 0);
    }
    return null;
};


//const a = prompt('Enter first side: ');
//const b = prompt('Enter second side: ');
//const c = prompt('Enter third side: ');


const checkTriangle = function (a, b, c) {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

        return (a + b > c && a + c > b && b + c > a);
    };
    return null;
};


