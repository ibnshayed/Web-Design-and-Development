let p1 = {
    name: "Emran",
    city: "Dhaka",
    email: "emran@eis.com"
};

/*let name = p1.name;
let city = p1.city;
let email = p1.email;*/

/*
let {name,city,email} = p1;

console.log(name);
console.log(city);
console.log(email);
*/

/*
let {name,city} = p1;

console.log(name);
console.log(city);*/

let {name,city,country} = p1;

console.log(name);
console.log(city);
console.log(country);

let nums = [10,20,33,44,55,66];
let [n1,n2,...restNums] = nums;
console.log("n1 = ",n1);
console.log("n2 = ",n2);
console.log("restNums = ",restNums);
