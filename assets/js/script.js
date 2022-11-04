console.log("%c=== lev1_4 Events addEventListener ===", "color:lightgreen");
// In dieser Übung werden wir addEventListener() kennenlernen.
// Schreibe eine Funktion, die beim Anklicken des Paragraphen eine Nachricht in der Konsole ausgibt.

document.querySelector("#eventParagraph").addEventListener("click", (e) => {
	document.getElementById("eventParagraphAusgabe").innerHTML = "Geklickt!";
});
document
	.querySelector("#eventParagraphRemove")
	.addEventListener("click", (e) => {
		document.getElementById("eventParagraphAusgabe").innerHTML = "";
	});

console.log(
	"%c=== lev1_6 Events addEventListener('change') ===",
	"color:lightgreen"
);
// Der Eventhandler change wird bei einer erfolgten Änderung ausgelöst. Diese Wertänderung wird im Normalfall in einem Formularelement stattfinden.
// Schreibe eine Funktion, die im Paragraph den Text anpasst, nachdem du ein Element aus der Liste ausgewählt hast.

document.querySelector("#my-select").addEventListener("change", (e) => {
	document.getElementById(
		"option-selected"
	).innerHTML = `Du hast ${e.target.value} ausgewählt`;
});

console.log("%c=== lev2_2 KeyCodeInfo ===", "color:lightgreen");
// Schreibe eine kleine App, die Dir die Taste ("key"), den Unicode Tastencode ("keyCode") und  den "Code" anzeigt, sobald Du eine Taste auf deinem Keyboard drückst.

let key = document.getElementById("keyAusgabe");
let keyCode = document.getElementById("keyCodeAusgabe");
let code = document.getElementById("codeAusgabe");
let ascii = document.getElementById("asciiAusgabe");

document.body.addEventListener("keydown", (e) => {
	key.innerHTML = e.key;
	keyCode.innerHTML = e.keyCode;
	document.getElementById("keyCode").innerHTML = e.keyCode;
	code.innerHTML = e.code;
	ascii.innerHTML = e.key.charCodeAt();
});

console.log("%c=== lev2_4 Counter Birthday ===", "color:lightgreen");
// Schreibe eine kleine App, die die Zeit bis zu deinem Geburtstag zählt.
// Zeit = Tage, Stunden, Minuten, Sekunden.

setInterval(countdown, 1000);

function countdown() {
	let datumInput = new Date(document.getElementById("inputDate").value);
	let tage = document.getElementById("tageAusgabe");
	let stunden = document.getElementById("stdAusgabe");
	let minuten = document.getElementById("minAusgabe");
	let sekunden = document.getElementById("sekAusgabe");

	let datum = datumInput.getTime() - new Date().getTime();

	sekunden.innerHTML = Math.floor(datum / 1000)-(Math.floor(datum / 1000 / 60))*60;
	minuten.innerHTML = Math.floor(datum / 1000 / 60)-(Math.floor((datum/1000)/60/60))*60;
    stunden.innerHTML = Math.floor((datum/1000)/60/60)-(Math.floor((datum/1000)/60/60/24)*24)
    tage.innerHTML = Math.floor((datum/1000)/60/60/24)
}
