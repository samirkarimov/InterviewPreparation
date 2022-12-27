
// 3. Kod blokunun nəticəsi nə olacaq? Nə üçün?

var data="Hello World";
(() => {
    console.log(data);
    data="Hello from other side";
    console.log(data);
})();
console.log(data);
var data="Greetings for all";



