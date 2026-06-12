//arthimetic
console.log ("arthimetic operator")
var a=10;
var b=20;
console.log (a+b);//addition
console.log (a-b);//subtraction
console.log (a*b);//multiplication
console.log (a/b);//divison
console.log (a%b);//modulus
console.log (a**b);//exponentiation
//assignment
console.log ("assignment operator")
var c=30;
console.log(c+=10);
console.log(c-=10);
console.log(c*=10);
console.log(c/=10);

//comparison operator
console.log("comparison operator")
var a=10;
var b=20;
console.log (a==b);
console.log (a!=b);
console.log (a>b);
console.log (a<b);
console.log (a<=b);
console.log (a>=b);

//logical operator
console.log("logical operator")
var a=10;
var b=20;
console.log (a>0 && b>0);
console.log (a>0 && b<0);
console.log (a<0 || b<0);
console.log (!(a>0));
console.log (!(a<0));

//unary operator
console.log("unary operator")
var c=30;
console.log (c++);
console.log (c--);
console.log (--c);
console.log (++c);

//ternary operator
console.log ("ternary operator");
var a=10;
var b=20;
var result = (a>b)?"a is greater":"b is greater";
console.log(result);
