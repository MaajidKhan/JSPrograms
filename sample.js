//How to find out middle element.
var a=[5,6,7,8,9,10];
a.sort(function(a,b){
    return a-b;
});
var k;
k=Math.ceil((a.length/2));
console.log(k);
function h()
{
    if (k!= 0)
 {
      // odd-length array (only one middle element)
        console.log("middle element is "+a[k]);
        
 }
 else
 {
       // even-length array (two middle elements)
    console.log("middle elements are "+a[k]+","+a[k-1]);
        
    }
}
h();
