'use strict';
function hello(){
    console.log("Hello World");
}
function goodbye(){
    console.log("Goodbye World");
}
function repeat(fn, n){
    for(let i = 1; i <= n; i++){
        fn();
    }
}
repeat(hello, 5);
repeat(goodbye,5);