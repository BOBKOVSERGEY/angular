// функция с параметрами

let myFunc = function (name, weather) {
    console.log("Hello " + name + '.');
    console.log("It is " + weather + ' today');
};

myFunc('Sergey', 'sunny');

let myFuncTwo = function (name, weather = 'raining') {
    console.log("Hello " + name + '.');
    console.log("It is " + weather + ' today');
};

myFuncTwo('Sergey');