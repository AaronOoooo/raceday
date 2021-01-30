/* Codecademy Boston – Intro to JS 
Over the past week you were assigned to begin learning about conditionals, functions, and
arrays. In this assignment you will demonstrate your understanding of these concepts through
the project detailed below.
*/

let raceNumber = Math.floor(Math.random()*1000)

// create random race number
console.log(raceNumber);

let regEarly = false;
let runnerAge = 13;

if (regEarly === true && runnerAge > 18 ) {
    raceNumber += 1000;
}

if (runnerAge > 18 && regEarly) {
    console.log(`Runner ${raceNumber} will start at 9:30 AM`);
} else {
    if (runnerAge > 18 && !regEarly) {
        console.log(`Runner ${raceNumber} will start at 11:00 AM`);
    } else {
        console.log(`Runner ${raceNumber} will start at 12:30 PM`)
    }
}

//console.log(raceNumber);

