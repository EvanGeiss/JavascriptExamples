console.log("Find the roots of quadratic equations");
console.log("Created by Evan Geiss");

var counter = 0;
var a = 1;
var b = -8;
var c = -9

negFour = -4;


while(counter < 10){
    console.log("a: " + a + " b: " + b + " c: " + c);

    posAns = ((b * -1) + Math.sqrt( (b * b)+(negFour * a * c))) / 2*a;
    
    negAns = ((b * -1) - Math.sqrt( (b*b)+(-4*a*c))) / 2;

    console.log("Postive Answer: " + posAns);
    console.log("Negative Answer: " + negAns);
    console.log("Ran Test Number: " + counter);

    console.log(" ")
    counter++;

    a++;
    b++;
    c++;
}

