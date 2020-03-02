let nums = [10,23,34,45,56];

let anotherNums = [100, 200, ...nums];

console.log(nums);
console.log(anotherNums);

//let nums2 = nums; //same reference
let nums2 = [...nums];
nums2.push(999);

console.log(nums);
console.log(nums2);

let p1 = {name: "vinod", email:"vinod@vinod.co"};
let p2 = {city: "Bangalor", ...p1, country: "India"};

console.log(p1);
console.log(p2);

//let p3 = p1; //pointing same object
let p3 = {...p1}; // not pointing same object
console.log(p3===p1);





