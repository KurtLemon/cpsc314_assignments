// Part 1
function charSwap(){
    let str = prompt("Enter a string");
    if(str.length <= 1){
        return str;
    }
    return str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(0);
}

// Part 2
function hiString(){
    let userString = prompt("Enter a String.");
    while(userString.length < 1){
        userString = prompt("Enter a longer String.");
    }
    if((userString.charAt(0) === 'H' || userString.charAt(0) === 'h') &&
        (userString.charAt(1) === 'I' || userString.charAt(1) === 'i')){
        return userString;
    }
    return "Hi " + userString;
}

// Part 3
function threeCharsToFront(){
    let str = prompt("Enter a string.");
    while(str.length < 3){
        str = prompt("Enter a longer String.");
    }
    return str.substring(str.length - 3, str.length) + str.substring(0, str.length - 3);
}

// Part 4
function stringsToSentence(){
    let str = prompt("Enter a comma-separated list of strings.");
    let arr = str.split(", ");
    for(let i = 0; i < arr.length; i++){
        alert(`${arr[i]} is a word, and this is a sentence!`);
    }
}

// Part 5
function upperOrLower(){
    let str = prompt("Enter a string.");
    let str2 = "";
    for(let i = 0; i < str.length && i < 3; i++){
        str2 = str2 + str.charAt(i).toLowerCase();
    }
    return str2 + str.substring(3, str.length);
}

// Part 6
function integerSwap() {
    let nonNumbers = true;
    let arr;
    while (nonNumbers) {
        let str = prompt("Enter a comma separated list of numbers.");
        arr = str.split(",");
        nonNumbers = arr.length <= 0;
        for(let i = 0; i < arr.length; i++) {
            if (isNaN(parseInt(arr[i]))) {
                alert("Non numbers found");
                nonNumbers = true;
            }else{
                arr[i] = parseInt(arr[i]);
            }
        }
    }
    let tmp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = tmp;
    return arr;
}

// Part 7
function longestString(){
    let str = prompt("Enter a comma-separated list of strings.");
    let arr = str.split(", ");
    let c = 0;
    let l = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > c){
            c = arr[i].length;
            l = i;
        }
    }
    if(l !== -1){
        return arr[l];
    }
    return "";
}

// Part 8
function largestEven(){
    let nonNumbers = true;
    let arr;
    while (nonNumbers) {
        let str = prompt("Enter a comma separated list of numbers.");
        arr = str.split(",");
        nonNumbers = arr.length <= 0;
        for(let i = 0; i < arr.length; i++) {
            if (isNaN(parseInt(arr[i]))) {
                alert("Non numbers found");
                nonNumbers = true;
            }else{
                arr[i] = parseInt(arr[i]);
            }
        }
    }
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// Part 9
function currentDayAndTime(){
    let date = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday, my dudes","Thursday","Friday","Saturday"];
    let hour = date.getHours() % 12
    let am = date.getHours() >= 12;
    hour === 0? hour = 12 : true;
    alert(`${date.getDay() === 3? "It" : "Today"} is ${days[date.getDay()]}\n It is ${hour}:${date.getMinutes()}`);
}

// Part 10
function unlimited(){
    let str = "";
    for(let i = 0; i < arguments.length; i++){
        str += arguments[i];
    }
    alert(str);
}