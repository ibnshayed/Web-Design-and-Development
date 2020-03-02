let p1 = {
    name: "Emran",
    city: "Dhaka",
    email: "emran@eis.com"
};

function sayHello(name,city) {
    console.log(`Hello ${name}, how's weather in ${city}?`);
}
sayHello(p1.name,p1.city);

function sayHello1({name,city}) {
    console.log(`Hello ${name}, how's weather in ${city}?`);
}
sayHello1(p1);

