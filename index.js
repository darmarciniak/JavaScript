const name = prompt("Podaj imię");
const surname = prompt("Podaj nazwisko");
const age = prompt("Podaj wiek");

if (age > 18) {
	console.log(name, surname);
} else {
	console.log(name, surname, age);
}
