'use strict';
function warningCounter(typeOfWarning){
    let warningCounter = 0;
    return (location) => {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
        console.log(`The ${typeOfWarning} hazard has triggered ${warningCounter} time${warningCounter === 1 ? "" : "(s)"} today!`);
    };
}
const rockWarnings = warningCounter("Rock Warnings");
const wetRoad = warningCounter("Wet Road");
const thinIce = warningCounter("Thin Ice")
rockWarnings("Main St and Pacific Ave");
wetRoad('Centinela Ave and Olympic Blvd');
thinIce("Ice on Federal Blvd");

thinIce();
wetRoad();
rockWarnings();
rockWarnings();
thinIce();