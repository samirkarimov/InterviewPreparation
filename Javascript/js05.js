
// 5. Kod blokunun nəticəsi nə olacaq? Nə üçün?

let counter=function(){
    let i=0;
    return () => i++;
}();

console.log(counter());
console.log(counter());
console.log(counter());



