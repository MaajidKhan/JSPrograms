//In an array 1-100 numbers are stored,one number is missing how to you findout.
var a=['1','2','3','4','5','6','9','7','10'];
var i;
var total;
var n=a.length+1;
    total  = (n)*(n+1)/2;   
    for ( i = 0; i< a.length; i++)
    {
        total -= a[i];
    
    }
    console.log("THe missing number is: "+total);
       