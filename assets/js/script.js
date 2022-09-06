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
    };
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

//const var1 = prompt('Enter var: ');

const sumOdd = function (var1) {
    let result = 0;
    for (i = 1; i <= var1; i++) {
        result += i;
        i += 1;
    };
    return result;
};


//const var1 = prompt('Enter variable: ');

const checkPrime = function (var1) {
    if (!isNaN(var1)) {
        for (let i = 2; i < var1; i++) {
            if (var1 % i === 0) {
                return false;
            };
            return true;
        };
    };
    return null;
};



