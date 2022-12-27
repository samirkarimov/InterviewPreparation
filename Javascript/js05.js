
// 5. What will be the output of the following code? Explain your answer.

let counter=function(){
    let i=0;
    return () => i++;
}();

console.log(counter());
console.log(counter());
console.log(counter());



