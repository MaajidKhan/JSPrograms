//How to find the duplicacy of words in any string.
var str="maajid is a good boy maajid khan";
var arr=str.split(" ");
var unique=new Array();
for(i=0;i<arr.length;i++)
{
    if((i==arr.indexOf(arr[i])))  //||(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])))
    {
        //unique.push(arr[i]);   
    }
    else
    {
        unique.push(arr[i]);
    }
}
unique.join(",");
console.log(unique); 