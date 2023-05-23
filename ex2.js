let number = prompt("Podaj pierwszą liczbę");
let action = prompt("Użyj znaku +Dodaj/-Odejmij/*Pomnóż//Podziel");
let number2 = prompt("Podaj drugą liczbę");

if (action === "+") {
	console.log(number + number2);
} else if (action === "-") {
	console.log(number - number2);
} else if (action === "*") {
	console.log(number * number2);
} else if (action === "/") {
	console.log(number / number2);
}
