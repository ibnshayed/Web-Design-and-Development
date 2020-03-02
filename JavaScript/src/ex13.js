/*function divide(n1, n2) {
    if(typeof n1 !=="number")
        throw "first argument is not a number";
    if(typeof n2 !=="number")
        throw "second argument is not a number";
    if(typeof n2 === 0)
        throw "can not divide by zero";

    return n1/n2;
}*/

/*function divide(n1, n2,callback) {
    if(typeof callback !== "function"){
        throw "callback must be supplied and must be a function";
    }
    setTimeout(() =>{
        if(typeof n1 !=="number") {
            callback("first argument is not a number");
            return ;
        }
        if(typeof n2 !=="number"){
            callback("second argument is not a number");
            return ;
        }
        if(typeof n2 === 0){
            callback("can not divide by zero");
            return ;
        }


        callback(null, n1 / n2);
    },0);
}

console.log("strat of script");
let a = 13, b = 5;
divide(a, b,(err,result)=>{
    if(err)
        console.log('There was an error: ', err);
    else console.log("The result of division : ", result);
});
console.log("end of script");*/


function divide1(n1, n2) {

    return new Promise((resolve,reject) =>{
        if(typeof n1 !=="number") {
            reject("first argument is not a number");
        }
        if(typeof n2 !=="number"){
            reject("second argument is not a number");
        }
        if(typeof n2 === 0){
            reject("can not divide by zero");
        }
        resolve(n1 / n2);
    });

}

console.log("strat of script");
let a1 = 13, b1 = 5;
/*
let result = divide1(a1, b1); //promise object and asyncronous
result.then(result=> console.log("Result of division: ",result));
result.catch(err=> console.log("There is an error: ",err));
*/
/*
divide1(a1, b1)
    .then(result=> console.log("Result of division: ",result))
    .catch(err=> console.log("There is an error: ",err));
*/
setTimeout(async ()=>{
    try {
        let result = await divide1(a1,b1);
        console.log("Result of division: ",result);
    }catch (err) {
        console.log("There is an error: ",err);
    }

},0);

console.log("end of script");