// How to find out smallest and largest number

//Method1
/*var a=[5,6,7,10,9,2];
a.sort(function(a,b){
    return a-b;
});
console.log("Smallest number is "+a[0]);
console.log("Largest number is "+a[a.length-1]);*/

//Method2
var a=[5,6,7,10,9,2];
var lar=a[0];
var sma=a[0];
for(var i=1;i<a.length;i++)
{
if((a[i])>lar)
{
    lar=a[i];
}
if((a[i])<sma)
{
    sma=a[i];
}
else
{

}
}
console.log("The smallest number is "+sma);
console.log("The largest number is "+lar);
