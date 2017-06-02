//Method1

/*var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
console.log(points);
console.log(points[1]);*/

//Method2

var points = [40, 100, 1, 5, 25, 10];
var a;
 for (var i = 0; i < points.length; i++)
    {
        for (var j = i + 1; j < points.length; j++)
        {
            if (points[i] > points[j])
            {
                a =  points[i];
                points[i] = points[j];
                points[j] = a;
            }
        }
    }
    for (var l = 0; l < points.length; l++)
    {
        console.log(points[l]);
    }
        console.log("The second smallest number is",points[1]);