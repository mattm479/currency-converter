//Write your code here
const input = require("sync-input");
const currencies = ["USD", "JPY", "EUR", "RUB", "GBP"];
const ratios = [
    { type: "USD", ratio: 1 },
    { type: "JPY", ratio: 113.5 },
    { type: "EUR", ratio: 0.89 },
    { type: "RUB", ratio: 74.36 },
    { type: "GBP", ratio: 0.75 }
];

console.log("Welcome to Currency Converter!");
ratios.forEach(function (ratioObj) {
    console.log("1 USD equals  " + ratioObj.ratio + " " + ratioObj.type)
});
console.log("What do you want to do?");
console.log("1-Convert currencies 2-Exit program");
let action = input();

do {
    switch (action) {
        case "1":
            console.log("What do you want to convert?");
            const currencyToConvertFrom = input("From: ").toUpperCase();
            const currencyFromExists = currencies.includes(currencyToConvertFrom);

            if (!currencyFromExists) {
                console.log("Unknown currency");
            } else {
                const currencyToConvertTo = input("To: ").toUpperCase();
                const currencyToExists = currencies.includes(currencyToConvertTo);

                if (!currencyToExists) {
                    console.log("Unknown currency");
                } else {
                    const amount = Number.parseInt(input("Amount: "));
                    if (amount < 1) {
                        console.log("The amount can not be less than 1");
                    } else if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else {
                        const fromIndex = ratios.findIndex((ratio) => ratio.type === currencyToConvertFrom);
                        const toIndex = ratios.findIndex((ratio) => ratio.type === currencyToConvertTo);
                        const result = (amount / ratios[fromIndex].ratio) * ratios[toIndex].ratio;
                        console.log("Result: " + amount + " " + currencyToConvertFrom + " equals " + result.toFixed(4) + " " + currencyToConvertTo);
                    }
                }
            }
            break;
        case "2":
            console.log("Have a nice day!");
            break;
        default:
            console.log("Unknown input");
            break;
    }

    if (action !== "2") {
        console.log("What do you want to do?");
        console.log("1-Convert currencies 2-Exit program");
        action = input();
    }
} while (action !== "2");
