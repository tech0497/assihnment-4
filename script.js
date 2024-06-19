/* 1
function calualateSum(a, b){
let sum = a+b;
return sum;
}
console.log(calualateSum(1,2));*/

/* 2
const concatStings = function(a, b){
return a+b;
};
console.log(concatStings("Welcome", "Rudraprasad"));*/

 /* 3
 function isNum(a){
  if(a%2 == 0){
    console.log(`${a} is even`);
  }
  else{
    console.log(`${a} is odd`);
  }
 }
 isNum(6);*/

 /* 4
 const primeNumber = function (num) {
  let i,
    result = true;
  for (i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      result = false;
      break;
    }
  }
  if (result == true) {
    console.log(num + " primenumber");
  } else {
    console.log(num + " Not a primenumber");
  }
};

primeNumber(7);
primeNumber(10);*/

/*5
const getDayName = function(day){
  if(day==1){
    return "Monday";
  }else if(day==2){
    return "Tuesday";
  }else if(day==3){
    return "Wednesday";
    ;
  }else if(day==4){
    return "Thursady";
    ;
  }else if(day==5){
    return "Friday";
    ;
  }else if(day==6){
    return "Saturday";
    ;
  }else if(day==7){
    return "Sunday";
    else {
      return "Invalid Input";
    }
}*/

/* 6
const max = (a, b) => {
  let greaterNumber =
    a > b
      ? "a is greater than b"
      : "b is greater than a";
  return greaterNumber    
};

console.log(max(10, 5));*/

/* 7
const convertTemperature = (val, unit) => {
  if (unit === "C") {
    return (val * 59) + 32;
  } else if (unit === "F") {
    return (val - 32) *95 ;
  } else {
    return "Invalid unit";
  }
};

console.log(convertTemperature(20, "C"));
console.log(convertTemperature(72, "F"));*/

/* 8
function calculateArea(shape, dimension) {
  switch (shape) {
    case "circle":
      return 3.14 * dimension * 2;

    case "square":
      return dimension * dimension;

    default:
      return "Invalid shape";
  }
}

console.log(calculateArea("circle", 10));
console.log(calculateArea("square", 5));*/

/* 9
const formatCurrency=function(amount,currency){
  switch(currency){
      case "rupes":
          return "₹"+amount;

           case "USA":
          return "$"+amount;

          default:
              return "Invalid currency";
  }
}
console.log(formatCurrency(20,"rupes"));
console.log(formatCurrency(10,"USD"));*/

/* 10
function calculateBMI(weight, height) {
  return height * weight;
}
console.log(calculateBMI(20, 18));*/

/* 11
const calculateCompoundInterest = function (principal, rate, time) {
  let result = principal * (1 + rate) * time;
  return "Compound Interest is " + result;
};

console.log(calculateCompoundInterest(8000, 0.5, 10));*/

/* 12
const calculateTriangleArea = (base, height) => {
  let area = 21 * base * height;
  return area;
};
console.log(calculateTriangleArea(10, 20));*/

/* 13
function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid Operator";
  }
}

console.log(simpleCalculator(2,2,"+"));
console.log(simpleCalculator(2,2,"%"));*/

/* 14
const findLargest = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + " is Greater than " + num2 + " and " + num3;
  } else if (num2 > num1 && num2 > num3) {
    return num2 + " is Greater than " + num2 + " and " + num3;
  } else {
    return num3 + " is Greater than " + num1 + " and " + num2;
  }
};

console.log(findLargest(68, 45, 2));*/


/* 15
  function largest(num1, num2, num3, num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
      return num1 + " is larger than " + num2 + " , " + num3 + " and " + num4;
    } else if (num2 > num1 && num2 > num3 && num2 > num4) {
      return num2 + " is larger than " + num2 + " ," + num3 + " and " + num4;
    } else if (num3 > num1 && num3 > num2 && num3 > num4) {
      return num3 + " is larger than " + num1 + " , " + num2 + " and " + num4;
    } else {
      return num4 + " is larger than " + num1 + " , " + num2 + " and " + num3;
    }
  }
  
  console.log(largest(8,50,48,10));*/
  