let names = ["vinod", "Emran", "Kabir", "Masud", "Rakib"];

let chars = names.map(function (name,index) {
    return name.charAt(0);
});

console.log(names);
console.log(chars);

chars = names.map(name => name.charAt(0));
console.log(chars);

let index = names.findIndex(value => value === "Kabir");
console.log("Kabir is found at index : ", index);