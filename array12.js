//how to find top two maximum numbers.

//Method1
/*var a=[5,6,7,10,9,2];
a.sort(function(a,b){
    return a-b;
});
console.log("The maximum two numbers are: "+a[a.length-2]+","+a[a.length-1]);*/

//Method2
var a=[5,6,7,10,9,2];
var max1=0;
var max2=0;
for(var i=0;i<a.length;i++)
{
if(max1<a[i])
{
max2=max1;
max1=a[i];
}
else if(max2<a[i])
{
max2=a[i];
}

}
console.log("The maximum two numbers are: "+max1+","+max2);
