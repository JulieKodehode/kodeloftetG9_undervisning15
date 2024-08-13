// if/else statement

// operators
/*
= betyr å erklære noe
=== betyr samme verdi og samme datatype

< betyr mindre enn (less then)
> betyr større enn (more then)

&& betyr og (and)
|| betyr eller (or)
*/

const hour = 20;

// Sjekker om klokken er mindre enn 12
if (hour < 12) {
    console.log("Good morning")
} else if (hour === 12) {
    // Sjekker om klokken er akkurat 12
    console.log("The clock is 12!")
} else if ( hour > 14 && hour < 18) {
    // Sjekker om klokken er mellom 14 og 18.
    console.log("The clock is between 14 and 18")
} else {
    // Tidspunkt som ikke passer før 12 eller akkurat 12
    console.log("Good day")
};

//
//

// En enkel kalkulator / Simple Calculator
// Endret at vi tar i mot en id fra en separert knapp som blir hendelsen som blir lyttet etter for å aktivere funksjonen.
const calculate = document.querySelector("#calculate");
console.log(calculate);

/*
En event listner som tar i mot at vi registrerer et klikk på select-elementet i HTML og henter ut input-element verdiene som gir oss muligheten til å sette opp en kalkulator med feedback fra nettsiden.
 */
calculate.addEventListener("click", function () {
    const calculatorValue = document.querySelector("#calculator").value;
    console.log(calculatorValue)

    // Lagt til etter undervisning for å vise frem resultatet av kakluleringen på nettsiden som en av bonus kravene foreslår. 
    const displaySum = document.querySelector("#displaySum");
    console.log(displaySum);

    // Edit fra error i undervisningen: Jeg håpte vi kunne unngå å bruke parseFloat() i dag for å spare dere en ekstra introudksjon, men det ser ut som at det må inkluderest for å få lov til å bruke + som en mattematisk operator istedenfor en string opperator.
    const number1 = parseFloat(document.querySelector("#number1").value);
    const number2 = parseFloat(document.querySelector("#number2").value);
    let sum;

    if (calculatorValue === "addition") {
        sum = number1 + number2
        console.log(sum)
        displaySum.textContent = sum;
    } else if (calculatorValue === "subtraction") {
        sum = number1 - number2 
        console.log(sum)
        displaySum.textContent = sum;
    } else if (calculatorValue === "multiplication") {
        sum = number1 * number2
        console.log(sum)
        displaySum.textContent = sum;
    } else if (calculatorValue === "devition") {
        sum = number1 / number2
        console.log(sum)
        displaySum.textContent = sum;
    } else {
        sum = "Kan ikke kalkulere"
        console.log(sum)
}    
});
