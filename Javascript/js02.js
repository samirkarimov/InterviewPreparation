
// 2. What will be the output of the following code? Explain your answer.

sampleFunc();
var sampleFunc=function(){
    console.log("Hello World");
}
sampleFunc();
function sampleFunc(){
    console.log("Hello from other side");
}
sampleFunc();


