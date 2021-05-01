// Global Variables
let selling_price = 45; //cost of milk per litre
let shedsProduction = [510, 308, 486, 572];
let shedsName = ["A", "B", "C", "D"];

// initial value of litres
let totalLitres = 0;
let time;

let week = 7;
let year = 365;

// Calculates total production in litres per day
let totalProduction = function(){
    for (let i = 0; i < shedsProduction.length; i++){
        totalLitres = totalLitres + shedsProduction[i];
        console.log("Your production in Shed " +  shedsName[i] + " is " + shedsProduction[i] + " litres per day \n")
    }
    console.log("\n");
    console.log("The total production is " + totalLitres + " litres per day\n");
    return totalLitres;
}

totalProduction();

// Stores total number of days for each respective month in a leap year
let months = {January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31}