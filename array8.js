//In given two arrays 1,2,3,4,5 and 2,3,1,0,5 find which number is not present in the second array
/*var array1 = ["1","2","3","4","5"];
var array2 = ["2","3","1","0","5"];
var array3 = new Array();
var k=0;
for(var i=0;i<array1.length;i++)
{
    for(var j=0;j<array2.length;j++)
    {

        while(array1[i]!=array2[j])
        {
             console.log(array1[i]);
        }
        

    }*/

/*var a = [1, 2, 3, 4, 5];
var b = [2, 3, 1, 0, 5]
findMissingNumber(a, b);
    
function findMissingNumber(a,b) 
{
   for (var n=0;n<a.length;n++)
   {

            if (!isPresent(n, b)) 
            {
                console.log("missing number: " + n);
                break;
            }
    }
}

function isPresent(n, b) 
{
    for (var i=0; i<b.length; i++) 
    {
        if (n == i) 
        {
        return true;
        }
    }
        return false;
}
*/


//Working here
var array1 = [1,2,3,4,5];
var array2 = [2,3,1,0,5];
var ifpresent=false;
for(var i=0;i<array1.length;i++)
{
    for(var j=0;j<array2.length;j++)
    {
        
        if(array1[i]==array2[j])
        {
          ifpresent=true;
          break; 
        }
        else
        {
        
        }

    }
    if(ifpresent==false) //if(!ifpresent)
    {

      console.log(array1[i]+" is not present in the second array");
    }
    ifpresent=false;
         
  }
  

