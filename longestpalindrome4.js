var carname = "Volvo malayalam genie moom";
var srr = carname.split(" ");
    array  = [];
    arr=[];

array = array.concat(srr);
function is_Palindrome(str1)
 {
var rev = str1.split("").reverse().join("");
return str1 == rev;
}

function verify(arrayo)
{
for(var i=0;i<arrayo.length;i++)
{
  if(is_Palindrome(arrayo[i]))
  {
    arr.push(arrayo[i]);
  }
  else
  {

  }
}
console.log(arr);
}

verify(array);
var m=0;
arr.sort(function(a, b){return b-a});
console.log("The longest palindrome is "+arr[0]);
  
  