
// 3. What will be the output of the following code? Explain your answer.

var data="Hello World";
(() => {
    console.log(data);
    data="Hello from other side";
    console.log(data);
})();
console.log(data);
var data="Greetings for all";



