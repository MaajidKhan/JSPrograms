//How to print array into[4,8,16,32] into[8,16,32,64].
var arr=['4','8','16','32'];
var arr1=[];
var k;
for(var i=0;i<arr.length;i++)
{
    k=arr[i]*2;
    arr1.push(k);
}
console.log(arr1);