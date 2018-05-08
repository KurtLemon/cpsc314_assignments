let submitButton = document.getElementById("submit");
let brandTextBox = document.getElementById("brand");
let sizeSelector = document.getElementById("size");
let typeSelector = document.getElementById("terrain");

alert("Enter in some bike info: \n" +
    "Brands: Trek, Specialized, BMC, Fuji, and a few others \n " +
    "Size: 48-62");

submitButton.onclick = function(){
    let brandText = brandTextBox.value;
    let sizeText = sizeSelector.value;
    let typeText = typeSelector.value;
    let priceText = document.querySelector('input[name="price"]:checked').value;
    let display = true;
    if(!checkBrand(brandText)) {
        document.getElementById("brand").className = document.getElementById("brand").className + " text-box-error";
        display = false;
    }else{
        document.getElementById("brand").className =
            document.getElementById("brand").className.replace("text-box-error", "");
    }
    if(!checkSize(sizeText)) {
        document.getElementById("size").className = document.getElementById("size").className + " text-box-error";
        display = false;
    }else{
        document.getElementById("size").className =
            document.getElementById("size").className.replace("text-box-error", "");
    }
    if(priceText === undefined){
        display = false;
        document.getElementById("price").className = document.getElementById("price").className + " text-box-error";
    }else{
        document.getElementById("price").className =
            document.getElementById("price").className.replace("text-box-error", "");
    }
    if(display){
        displayFunction(brandText, sizeText, typeText, priceText);
    }
};

function checkBrand(brandText){
    return brandText === "Trek" ||
        brandText === "Specialized" ||
        brandText === "Pinarello" ||
        brandText === "Colnago" ||
        brandText === "Cervelo" ||
        brandText === "BMC" ||
        brandText === "Felt" ||
        brandText === "Giant" ||
        brandText === "Fuji";
}

function checkSize(size){
    return size > 47 && size < 63;
}

function displayFunction(brandText, sizeText, typeText, priceText){
    document.getElementById("content").innerHTML =
        "<p>Brand: " + brandText + "</p>" +
        "<p>Size: " + sizeText + "</p>" +
        "<p>Type: " + typeText + "</p>" +
        "<p>Price: " + priceText + "</p>";
}