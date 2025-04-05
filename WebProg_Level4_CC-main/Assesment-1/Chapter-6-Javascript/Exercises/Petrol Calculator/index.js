// defines a function titled "calculate Total"
function calculateTotal() {
    // defines the variable "CostpL", collecting the value of the first field in the first input tag of the HTML document
    var CostpL = document.getElementById("CostpL").value;
    // defines the variable "Lpurchased" collecting the value of the second field in the second input tag of the HTML document
    var Lpurchased = document.getElementById("Lpurchased").value;
    
    // defines the "answer" variable as the product of the two collected values
    var answer = parseFloat(CostpL)*parseFloat(Lpurchased);
    // if statement checks if the "answer" variable is Not a Number or NaN (for error handling)
    if (isNaN(answer)){
        // changes the p tag that contains the "cost" Id within the HTML document with a class titled "answerDesign"
        answer = document.getElementById("cost").innerHTML="<span class='answerDesign'>Invalid Input!</span>";
    }
    // else statement proceeds if the "answer" variable is a number.
    else {
        // changes the p tag that contains the "cost" Id within the HTML document with a class titled "answerDesign"
        answer = document.getElementById("cost").innerHTML=`<span class='answerDesign'>€ ${answer}</span>`;
    }
}