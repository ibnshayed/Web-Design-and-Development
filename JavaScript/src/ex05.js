function hello() {
    return "Hello,World!";
}

let s1 = hello();
console.log(s1);

//anonymous function
let greet = function () {
    return "Hello,World!";
};

let s2 = greet();
console.log(s2);

/*function welcome() {
    return console.log( "Welcome to react.js Training");
}
setInterval(welcome, 1000);
*/
/*
setInterval(function () {
    return console.log( "Welcome to react.js Training");
}, 1000);
*/

//Arrow Function
setInterval(() => console.log( "Welcome to react.js Training"),1000);
