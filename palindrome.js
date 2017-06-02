var carname = "Volvo XC60";


function findPalindrome(myString){

 
var myStringArr = myString.split("");

for(var i=0;i<myStringArr.length/2 ; i++){
if(myStringArr[i]== myStringArr[((myStringArr.length-1)-i)]){
    
}else{
   return myString + " is not a Palindrome"
}
  return myString + " is a Palindrome"
}
}

var givenNum = 10;

console.log( isNaN(givenNum) );

console.log(findPalindrome("Hindi"));
