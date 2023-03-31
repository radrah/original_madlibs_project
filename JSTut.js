//function to calculate Pi using formula (4/1-4/3+4/5-4/7+4/9+...)
function calcPi(iterations) {
    const piFixed = 3.14593
    let pi = 0;
    let divisor = 1;
    for (i = 0; i <= iterations; i++) {
        pi = pi + (4 / divisor) - (4 / (divisor + 2));
        divisor += 4;
    }
    document.getElementById("output1").value = pi.toFixed(10);
}

//Get Fibonacci feature

//fibonacci array
let fibList = []

//fibonacci list function (1,1,2,3,5,8,13,21,...)

function getFibList(fibLimit) {
    for (i = 0; i < fibLimit; i++) {
        fibList[i] = findFib(i)
    }
    fibList.shift()
    document.getElementById("output1").value = fibList.join(",");
}
//calculate individual fibonacci numbers
function findFib(numLimit) {
    let num1 = 1, num2 = 0, tempVal, i = 0;
    while (i < numLimit) {
        tempVal = num1;
        num1 = num1 + num2;
        num2 = tempVal;
        i++;
    }
    return num2;
}


//the madlibs part

let mLText = "My dear old ~ sat me down to hear some words of wisdom \n 1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n 2. He who ~ at the right time can ~ again \n 3. Always wear ~ ~ in case you're in a ~ \n 4. Don't use your ~ to wipe your ~ Always have a clean ~ with you";

let mLText1 = "The Owl and the Pussycat went to sea \n In a beautiful pea-green boat, \n They took some honey, and plenty of money, \n Wrapped up in a five pound note.";

//individual word array

//splitting the poem
let mLArray = mLText.split(" ");

//take in user input
let inputArray = [];

//function for generator
function madLibGenerator() {
    createInputArray();
    //in case user doesnt input anything
    if (checkForMissingInput()) {
        document.getElementById("output1").value = "Enter the poem above";
    }
    //creating a sentence from user input
    else {
        createMLSentence();
    }
}
//getting everything user input from 0 to 13 to match ids
function createInputArray() {
    for (i = 0; i <= 13; i++) {
        inputArray[i] = document.getElementById("i" + i).value;
    }
}
//check for input
function checkForMissingInput() {
    let defaultArrayVals = ["Person", "Noun", "Verb", "Adjective", "Plural Verb", "Body Part", "Event"];

    for (i = 0; i < inputArray.length; i++) {
        if (defaultArrayVals.indexOf(inputArray[i]) > -1) {
            return true;
        }
    }
    return false;
}

function createMLSentence() {
    let arrIndex = 0;
    for (i = 0; i < mLArray.length; i++) {
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray[arrIndex];
        arrIndex++;
    }
    document.getElementById("output1").value = mLArray.join(" ");
}