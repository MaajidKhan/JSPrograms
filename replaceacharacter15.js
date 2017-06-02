//Replacing a character in a given string.
var s = "Hello world";
var index = 3;
s = s.substr(0, index) + 'x' + s.substr(index + 1);
console.log(s);