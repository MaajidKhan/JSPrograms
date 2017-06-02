//In an array 1-100 exactly one number is duplicate how to find it.
var a=['1','2','3','4','5','6','9','7','8','10','8'];
 var a;
 var c;
 var i=0;
 for(i=0;i<a.length;i++)
  {
     c = a[i];
     for(var j=i+1;j<a.length;j++)
     {
       if(c==a[j])
       {
         console.log("The first repeated character is: "+c);
       }
       else
       {

       }
     }
  }
  
 
 
       