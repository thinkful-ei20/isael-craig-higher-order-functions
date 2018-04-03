'use strict';
let string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function reducer(str){
    let newString = '';
    let result = str.split(" ");
    
    result.reduce((allNames, names) => {
        if(allNames !== undefined){
            newString += allNames[allNames.length-1].toUpperCase();
        }
        if(names.length === 3){
            newString += " ";
        } else {
            newString += names[names.length-1].toUpperCase();
        }
    });
    return newString;
    
}
console.log(reducer(string));