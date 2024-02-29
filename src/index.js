// Say hello let'us build a calculator


// Asking the users for theirs numbers
let firstNumber = Number(prompt("Enter Your  First Number"));
while (isNaN(firstNumber)){ alert('Please Enter A Valid Number');
firstNumber = Number(prompt("Enter Your First Number Again: "));
}

let secondNumber = Number(prompt("Enter Your Second Number "));
while (isNaN(secondNumber)) {
    alert('Please Enter A Valid Number');
    secondNumber = Number(prompt("Enter  Your Second Number Again : "));
    }

// Asking the users for their operators
let operator = prompt("What Operator Do You Want To Use '+ , - , * or / '?");

//  Checking if the user entered an invalid operator and asking again until they enter a valid one.
while (!(operator == '+' || operator == '-' || operator == '*'|| operator=='/')){
    alert ('You Entered An Invalid Operator Please Try Again \n The Available Operators Are +, - , * Or /') ;
    operator= prompt ("Invalid Input Please Enter + , - , * or / ");
}

//  Calling the operators.
let Answer;
 if (operator === '+' ){
   Answer = firstNumber  + secondNumber;
 } else if(operator === "-"){
    Answer = firstNumber - secondNumber;
 }else if(operator === "*"){
    Answer = firstNumber * secondNumber;
     }else if(operator === "/"){
        Answer = firstNumber / secondNumber
     }
     else{
        Answer = ('invalid input')
     }

     alert('Here is your Answer : ' + Answer);