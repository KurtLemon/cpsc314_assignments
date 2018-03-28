function part4(){
    let response = confirm("True (ok) or False (cancel)?");
    if(response){
        alert("True");
    }else{
        alert("False");
    }
}

function part5() {
    let response = confirm("True (ok) or False (cancel)?");
    response ? alert("True") : alert("False");
}

function part7(){
    let input = prompt("Please enter a number: ");
    if(input === null){
        alert("Canceled");
    }else if(isNaN(input)){
        alert("Enter a NUMBER.");
    }else if(input === ""){
        alert("Empty input.");
    }else{
        alert("Thanks.");
    }

}

function parts10Through14(){
    dreamBike = new bike("road", "sprint", "Specialized", "Venge Vias Di2", 2018);
    dreamBikeButWithDreamWheelsThisTime = new bikeCopy(dreamBike, "Zipp 404s");
    originalDreamBike = new bike("road", "sprint", "Specialized", "Venge Vias DuraAce", 2015);
    console.log(dreamBike);
    console.log(dreamBikeButWithDreamWheelsThisTime);
    console.log("Depreciation Multiplier of 2018 Dream Bike: " +
        dreamBikeButWithDreamWheelsThisTime.depreciationMultiplier());
    console.log("Depreciation Multiplier of Original (2015) Dream Bike: " +
        originalDreamBike.depreciationMultiplier());
}

function part15(){
    str1 = "Hi, my name is";
    str2 = "Kurt";
    str3 = "Lamon";
    console.log("String 1: " + str1);
    console.log("String 2: " + str2);
    console.log("String 3: " + str3);
    console.log("Strings 1, 2, and 3: " + combineStrings(str1, str2, str3));
    console.log("Strings 1 and 2: " + combineStrings(str1, str2));
}

function part16() {
    let strComb = combineStrings;
    str1 = "Hi, my name is";
    str2 = "Kurt";
    str3 = "Lamon";
    console.log("Strings 2 and 3: " + strComb(str2, str3));
}

function part17(){
    str1 = "Hi, my name is";
    str2 = "Kurt";
    str3 = "Lamon";
    let combined = (a, b, c="") => {return a + " " + b + " " + c};
    console.log("Strings 3 and 2: " + combined(str3, str2));
}

function bikeCopy(bikeOther, wheels){
    this.type = bikeOther.type;
    this.subtype = bikeOther.subType;
    this.make = bikeOther.make;
    this.model = bikeOther.model;
    this.year = bikeOther.year;
    this.name = bikeOther.year + " " + bikeOther.make + " " + bikeOther.model;
    this.depreciationMultiplier = depreciationValue;
    this.wheels = wheels;
}

function bike(type, subType, make, model, year){
    this.type = type;
    this.subtype = subType;
    this.make = make;
    this.model = model;
    this.year = year;
    this.name = year + " " + make + " " + model;
    this.depreciationMultiplier = depreciationValue;
}

function depreciationValue(){
    let value = .75;
    for(let i = 1; i < 2018 - this.year; i++){
        value = value * .75;
    }
    return value;
}

function combineStrings(a, b, c = ""){
    return a + " " + b + " " + c;
}

part4();
part5();
part7();
parts10Through14();
part15();
part16();
part17();