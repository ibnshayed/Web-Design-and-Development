/*function hello(name1, name2, name3) {
    console.log("Hello, ", name1, name2, name3);
}
hello("Emran","Rakib","Mozahid");
*/

// rest operator
function hello(name,...names) {
    console.log("Hello, ", names," From ",name);
}

hello("Emran","Rakib","Mozahid","Basit");
