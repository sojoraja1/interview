console.log('a');
let timmy = setTimeout(function () {
    console.log('b');
}, 1);
let timothy = setTimeout(function () {
    console.log('c');
}, 10);
let timer = setTimeout(function () {
    console.log('d');
}, 0);
console.log('e');

/**
 * Explanation
 * Always synchronous will get more priority then async.Thuse, a will be first and b will be second.
 * 
 * Then, b ,c and d coz b is sent to resolve firt,then c will resolve and d will
 */