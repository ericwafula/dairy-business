// Global Variables
let input = document.getElementById("input");

let selling_price = 45; //cost of milk per litre
let shedsProduction = [510, 308, 486, 572];
let shedsName = ["A", "B", "C", "D"];

// initial value of litres
let totalLitres = 0;
// let time;

let week = 7;
let year = 365;

// Gets the button element from the html file and stores it
let button = document.getElementById("calculate");

// gets the sheds output text container in the html file and stores it
let shedsOutput = document.getElementById("sheds-output-container");

// gets the weekly/yearly income's container paragraph element and stores it
let weeklyIncome = document.getElementById("weekly-income-output");

// gets the monthly income's paragraph and stores it
let monthlyIncome = document.getElementById("monthly-income-container");

// Calculates total production in litres per day
let totalProduction = function(){
    for (let i = 0; i < shedsProduction.length; i++){
        totalLitres = totalLitres + shedsProduction[i];

        // creates a div element and outputs the data on the screen
        let div = document.createElement('div');
        div.innerHTML = `<p>Your production in Shed ${shedsName[i]} is ${shedsProduction[i]}</p>`;

        shedsOutput.appendChild(div);

    }

    return totalLitres;
   
}


button.addEventListener("click", function(){
    button.disabled = true;
    incomeOverTime(selling_price);
});

// Stores total number of days for each respective month in a leap year
let months = {January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31}

// calculate total income on a weekly, daily, monthly and yearly basis
let incomeOverTime = function income(selling_price){      
    
    let weeklyTotal;
    let yearlyTotal;

    weeklyTotal = week * selling_price * totalLitres;
    yearlyTotal = year * selling_price * totalLitres;
    

    // creates a div element and outputs the data on the screen
    let div3 = document.createElement('div');
        div3.innerHTML = `<p>Your weekly income will be Ksh ${weeklyTotal}</p>`;

        weeklyIncome.appendChild(div3);

    // creates a div element and outputs the data on the screen
    let div4 = document.createElement('div');
        div4.innerHTML = `<p>Your yearly income will be Ksh ${yearlyTotal}</p>`;

        weeklyIncome.appendChild(div4);

    // Iterates over the months object and prints the total amount of money to be made
    for (const [key, value] of Object.entries(months)) {

        // creates a div element and outputs the data on the screen
        let div2 = document.createElement('div');
        div2.innerHTML = `<p>Your total income for  ${key} is ${value * totalLitres * selling_price}</p>`;

        monthlyIncome.appendChild(div2);
      }    
}

// incomeOverTime(selling_price);