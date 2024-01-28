
function myMap(array, callback) {
    // Javascriptin built-in metodlarından olan map() metodunun alqoritmini özünüz 0-dan yazın
}

function myFilter(array, callback) {
    // Javascriptin built-in metodlarından olan filter() metodunun alqoritmini özünüz 0-dan yazın
}


function myReduce(array, callback, initialValue) {
    // Javascriptin built-in metodlarından olan reduce() metodunun alqoritmini özünüz 0-dan yazın
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const squared = myMap(numbers, (num) => num * num);
const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);
const sum = myReduce(numbers, (acc, num) => acc + num, 0);

console.log(squared);
console.log(evenNumbers);
console.log(sum);
