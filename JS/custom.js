var person = "";
var budget = 0;
var needs = 0;
var savings = 0;
var wants = 0;
var total;

function myBudget(){
    person = prompt("Please enter your name.");
    budget = Number(prompt("What is your monthly salary? (Numbers only)"));
    needs = budget * (50 / 100);
    savings = budget * (20 / 100);
    wants = budget * (30 / 100);
    $("#part-one").append("<p>Hello " + person + "! Here is your budget for this month:</p>", "<p>Needs: $" + needs + "</p>", "<p>Savings: $" + savings + "</p>", "<p>Wants: $" + wants + "</p>").css("border", "1px solid black");
}

function inputYourNeeds(){
    let food = Number(prompt("How much do you spend on food? (numbers only)"));
    let housing =  Number(prompt("How much do you spend on housing? (numbers only)"));
    let bills =  Number(prompt("How much do you spend on bills? (numbers only)"));
    let healthcare = Number(prompt("How much do you spend on healthcare? (numbers only)"));
    let transportation = Number(prompt("How much do you spend on transportation? (numbers only)"));
    let other = Number(prompt("How much do you spend on other essentials? (numbers only)"));
    total = needs - (food + housing + bills + healthcare + transportation + other);
    $("#part-two").append("<p> The remaining amount in your needs is: $" + total + "</p>")
    if (total < 0) {
        wants = (total + wants);
        $("#part-two").append("<p>You are $" + (-total) + " over budget. We will deduct from your wants!</p>" + "<p>Your new wants total is: $" + wants + "</p>");   
    } else {
        wants = wants;
        $("#part-two").append("<p> You're doing great!</p>")
    }  
    $("#part-two").append("<p>Needs: $" + total + "</p>", "<p>Savings: $" + savings + "</p>", "<p>Wants: $" + wants + "</p>").css("border", "1px solid black");
}

function emergencyFund (){
    $("#line-two").hide();
    let funds = Number(prompt("How much will you put towards your emergency fund?"));
    if (funds > savings) {
       funds = Number(prompt("That's too much. Try a smaller amount."));
        $("#part-three").append("<p>Hello " + person + "! Here is your updated budget for this month:</p>", "<p>Needs: $" + total + "</p>", "<p>Savings: $" + (savings - funds) + "</p>", "<p>Wants: $" + (wants) + "</p>").css("border", "1px solid black");
    } else {
        $("#part-three").append("<p>Hello " + person + "! Here is your updated budget for this month:</p>", "<p>Needs: $" + total + "</p>", "<p>Savings: $" + (savings - funds) + "</p>", "<p>Wants: $" + (wants) + "</p>").css("border", "1px solid black");
    }
}

function startOver (){
    person = "";
    needs = 0;
    wants = 0;
    savings = 0;
    budget = 0;
    $("#line-two").show();
    $("#part-one").empty().css("border", "none");
    $("#part-two").empty().css("border", "none");
    $("#part-three").empty().css("border", "none");
}


$("#btn-one").on("click", function(){
    myBudget();
});
$("#btn-two").on("click", function(){
    inputYourNeeds();
});
$("#btn-three").on("click", function(){
    emergencyFund();
});
$("#btn-four").on("click", function(){
    startOver();
});

