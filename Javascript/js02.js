
// 2. Kod blokunun nəticəsi nə olacaq? Nə üçün?

sampleFunc();
var sampleFunc=function(){
    console.log("Hello World");
}
sampleFunc();
function sampleFunc(){
    console.log("Hello from other side");
}
sampleFunc();


