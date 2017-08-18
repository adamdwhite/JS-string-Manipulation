console.log("let's thing some strings");
// Requirements

// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.

// The output of each of the functions should immediately appear as well.

var input = document.getElementById("input");
var submitBtn = document.getElementById("submit");
var outputArea = document.getElementById("outPut");

submitBtn.addEventListener("click", noNumbers);
// Function to output the input, if noNumbers is "passed", on submit button click or enter (13) key, 
// and invoke the manipulation functions:    

// input.addEventListener("keyup", function(event) {
//     if (event.which === 13);
//     console.log("you pressed enter key");
// });

//If input passes noNumbers, fire the functions defined below
function onEnter() {
    var solUtion = input.value;
    outPut.innerHTML = solUtion;
    reversal();
}

//Function to forbid anything but letters, throw an error, etc...
// input.addEventListener("keypress", noNumbers);
function noNumbers() {
    var keys = input.value;
    if (keys.match(/^[a-zA-Z]+$/)) {
        onEnter();
    } else {
        alert("Please enter one word in only letters, no numbers or spaces!");
        input.value = "";
        outputArea.value = "";
        console.log("No Numbers Allowed!");
    }
}

// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
function reversal() {
    outPut.innerHTML = input.value.split("").reverse(this).join("");
    // alphabits();
    // palindrome();
}

// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
function alphabits() {
    outputArea.innerHTML = input.value.split("").sort(this).join("");
}

// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome() {
    if (input.value === input.value.split("").reverse().join("")) {
        outPut.innerHTML += "<p> You input a palindrome! </p>";
    } else {
        outputArea.innerHTML = input.value;
    }
}