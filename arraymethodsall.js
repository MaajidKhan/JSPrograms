/*//Converting Arrays into Strings
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
console.log(fruits);*/

/*//Joining Arrays into Strings. It behaves just like toString(), but in addition you can specify the separator:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join("*");
console.log(fruits);*/

/* //pop function
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"*/

/* //push function
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits*/

/* //The shift() method returns the string that was "shifted out":
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); 
console.log(fruits);            // Returns "Banana"*/

/* //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits*/

/* //Array elements are accessed using their index number:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruit*/

/*var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruit*/

/*Deleting Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined*/

/* //The splice() method can be used to add new items to an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");*/

/* //Using splice() to Remove Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits
*/

/* //Merging (Concatenating) Arrays
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias","Linus"];
var myChildren = myGirls.concat(myBoys);     // Concatenates (joins) myGirls and myBoys*/

/* //Example (Merging Three Arrays)
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias","Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);     // Concatenates arr1 with arr2 and arr3 */

/* //The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);*/

 /*//The slice() method creates a new array. It does not remove any elements from the source array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(citrus);
*/

/* // Sorting an Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();            // Sorts the elements of fruits */

/* //Reversing an Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();            // Sorts the elements of fruits 
fruits.reverse();         // Reverses the order of the elements
console.log(fruits);*/

/* //Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); */







