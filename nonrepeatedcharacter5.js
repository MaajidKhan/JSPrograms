 var a;
 var c;
 var i=0;
 function dot(string)
 {
 a=string.split("");
 for(i=0;i<a.length;i++)
  {
     c = string.charAt(i);
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
  
 }
 dot("abcdefd");
 