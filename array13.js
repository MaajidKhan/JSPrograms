//How to find out middle element.
var a=[5,6,7,9,2];
a.sort(function(a,b){
    return a-b;
});
function h()
{
    if (a.length %2 == 0)
 {
        // even-length array (two middle elements)
    console.log("middle elements are "+a[(a.length/2) - 1]+","+a[(a.length/2)]);
 }
 else if(a.length %2 !=0)
 {
        // odd-length array (only one middle element)
        console.log("middle element is "+a[(a.length-1)/2]);
        
    }
}
h();
