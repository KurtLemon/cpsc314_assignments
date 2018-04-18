alert("JS Loaded")

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

let btnBlue = document.getElementById("btnBlue");
let btnGreen = document.getElementById("btnGreen");

let btnPink = document.getElementById("btnPink");

let listTextBox = document.getElementById("listTextBox");
let listButton = document.getElementById("listButton");

let remList = document.getElementById("remList");
let rem1 = document.getElementById("rem1");
let rem2 = document.getElementById("rem2");
let rem3 = document.getElementById("rem3");
let rem4 = document.getElementById("rem4");

let litList = document.getElementById("litList");
let lit1 = document.getElementById("lit1");
let lit2 = document.getElementById("lit2");
let lit3 = document.getElementById("lit3");
let lit4 = document.getElementById("lit4");

btn1.onclick = function(){
    let target = document.getElementById("one");
    target.scrollIntoView();
};

btn2.onclick = function(){
    let target = document.getElementById("two");
    target.scrollIntoView();
};

btn3.onclick = function(){
    let target = document.getElementById("three");
    target.scrollIntoView();
};

btn4.onclick = function(){
    let target = document.getElementById("four");
    target.scrollIntoView();
};

btn5.onclick = function(){
    let target = document.getElementById("five");
    target.scrollIntoView();
};

btnBlue.onclick = function(){
    document.body.style.backgroundColor = "#8ba1c4";
};

btnGreen.onclick = function(){
    document.body.style.backgroundColor = "#8bc48b";
};

btnPink.onclick = function(){
    if(btnPink.innerHTML === "Click for pink!"){
        document.body.style.backgroundColor = "#ff9bec";
        document.getElementById("btnPink").innerHTML = "Click for orange!";
    }else{
        document.body.style.backgroundColor = "#ffc068";
        document.getElementById("btnPink").innerHTML = "Click for pink!";
    }
};

listButton.onclick = function(){
    let ul = document.getElementById("list");
    let text = listTextBox.value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
};

rem1.onclick = function(){
    remList.removeChild(rem1);
};

rem2.onclick = function(){
    remList.removeChild(rem2);
};

rem3.onclick = function(){
    remList.removeChild(rem3);
};

rem4.onclick = function(){
    remList.removeChild(rem4);
};

lit1.onclick = function(){
    lit1.style.backgroundColor = "#8cd1c2";
    lit2.style.backgroundColor = "lightgray";
    lit3.style.backgroundColor = "lightgray";
    lit4.style.backgroundColor = "lightgray";
};

lit2.onclick = function(){
    lit1.style.backgroundColor = "lightgray";
    lit2.style.backgroundColor = "#8cd1c2";
    lit3.style.backgroundColor = "lightgray";
    lit4.style.backgroundColor = "lightgray";
};

lit3.onclick = function(){
    lit1.style.backgroundColor = "lightgray";
    lit2.style.backgroundColor = "lightgray";
    lit3.style.backgroundColor = "#8cd1c2";
    lit4.style.backgroundColor = "lightgray";
};

lit4.onclick = function(){
    lit1.style.backgroundColor = "lightgray";
    lit2.style.backgroundColor = "lightgray";
    lit3.style.backgroundColor = "lightgray";
    lit4.style.backgroundColor = "#8cd1c2";
};

