//How to find all pairs in array of integers whose sum is equal to given number
var count = 0;// Initialize result
var array=[1, 5, 7, -1, 5];
var sum=6;
        // Consider all possible pairs and check their sums
for (var i = 0; i < array.length; i++)
{
     for (var j = i + 1; j < array.length; j++)
     {
        if ((array[i] + array[j]) == sum)
         console.log("("+array[i]+","+ array[j]+")");
        count++;
     }
    /* if(count==1)
     {
        console.log("("+array[i]+","+ array[j]+")");
        count=0;
     }*/
      
}
           