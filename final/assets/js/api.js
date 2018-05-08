$('document').ready(() => {
    requestAll();
});

function displayBeers(data){
    $('#content').empty();
    for(let line of data){
        let postContainer = document.createElement('div');
        postContainer.className = 'post-container';
        let name = document.createElement('h4');
        name.innerHTML = line.name;
        let tagline = document.createElement('p');
        tagline.innerHTML = line.tagline;
        let hRule = document.createElement('hr');

        postContainer.append(name);
        postContainer.append(tagline);
        postContainer.append(hRule);
        $('#content').append(postContainer);
    }
}

function displayRandom(data){
    $('#content').empty();
    for(let line of data){
        let postContainer = document.createElement('div');
        postContainer.className = 'post-container';
        let name = document.createElement('h4');
        name.innerHTML = line.name;
        let tagline = document.createElement('p');
        tagline.innerHTML = line.tagline;
        let hRule = document.createElement('hr');
        let description = document.createElement('p');
        description.innerHTML = line.description;

        postContainer.append(name);
        postContainer.append(tagline);
        postContainer.append(hRule);
        postContainer.append(description);
        $('#content').append(postContainer);
    }
}

function requestRandom(){
    $.ajax({
        url: "https://api.punkapi.com/v2/beers/random",
        type: "GET",
        dataType: "json"
    })
    // if the request succeeds
        .done(function(response){
            //console.log(response);
            displayRandom(response);
        })
        // if the request fails
        .fail(function(status, errorThrown){
            console.log("Error" + errorThrown);
            console.log("Status" + status);
        })
        // always do this
        .always(function(){
            console.log("Request Done");
        })
}

function requestAll(){
    $.ajax({
        url: "https://api.punkapi.com/v2/beers",
        type: "GET",
        dataType: "json"
    })
    // if the request succeeds
        .done(function(response){
            console.log(response);
            displayBeers(response);
        })
        // if the request fails
        .fail(function(status, errorThrown){
            console.log("Error" + errorThrown);
            console.log("Status" + status);
        })
        // always do this
        .always(function(){
            console.log("Request Done");
        });
}