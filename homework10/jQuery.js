//Example from scratch with own data
$('document').ready(() => {
    $.ajax({
        // url to request
        url: "https://jsonplaceholder.typicode.com/users",
        // GET or POST
        type: "GET",
        // Type of data we expect
        dataType: "json"
    })
    // if the request succeeds
        .done(function(response){
            //console.log(response);
            displayPosts(response);
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
});


function displayPosts(data){
    for(let line of data){
        let postContainer = document.createElement('div');
        postContainer.id = line.id;
        postContainer.className = 'post-container';
        let name = document.createElement('h4');
        name.className = 'user-name';
        name.innerHTML = line.name;
        let email = document.createElement('p');
        email.className = 'email';
        email.innerHTML = line.email;
        let company = document.createElement('p');
        company.className = 'company';
        company.innerHTML = line.company.name;
        let albumButton = document.createElement('button');
        albumButton.className = 'button';
        albumButton.innerHTML = 'Show Albums';
        $(albumButton).click((event) => {
            getAlbums(line.id);
        });
        let todoButton = document.createElement('button');
        todoButton.className = 'button';
        todoButton.innerHTML = 'Show ToDos';
        $(todoButton).click((event) => {
            getToDos(line.id);
        });

        $('.content').append(postContainer);
        $(`#${line.id}`).append(name);
        $(`#${line.id}`).append(email);
        $(`#${line.id}`).append(company);
        $(`#${line.id}`).append(albumButton);
        $(`#${line.id}`).append(todoButton);
    }
}

function displayAlbums(data, id){
    for(let album of data){
        if(id === album.userId) {
            let albumContainer = document.createElement('div');
            albumContainer.id = album.id;
            albumContainer.className = 'album-container';
            let albumTitle = document.createElement('h5');
            albumTitle.className = 'title';
            albumTitle.innerHTML = "Album: " + album.title;
            $(`#${id}`).append(albumContainer);
            $(`#${album.id}`).append(albumTitle);
        }

    }
}

function getAlbums(id){
    $.ajax({
        // url to request
        url: "https://jsonplaceholder.typicode.com/albums",
        // GET or POST
        type: "GET",
        // Type of data we expect
        dataType: "json"
    })
    // if the request succeeds
        .done(function(response){
            //console.log(response);
            displayAlbums(response, id);
        })
        // if the request fails
        .fail(function(status, errorThrown){
            console.log("Error" + errorThrown);
            console.log("Status" + status);
        })
        // always do this
        .always(function(){
            console.log("Album Request Done");
        })
}

function displayToDos(data, id){
    for(let item of data){
        if(id === item.userId) {
            let todoContainer = document.createElement('div');
            todoContainer.id = item.id;
            todoContainer.className = 'todo-container';
            let todoTitle = document.createElement('h5');
            todoTitle.className = 'title';
            todoTitle.innerHTML = "ToDo: " + item.title;
            $(`#${id}`).append(todoContainer);
            $(`#${item.id}`).append(todoTitle);
            if(item.completed){
                let icon = document.createElement('i');
                icon.className = 'fas fa-check';
                $(`#${item.id}`).append(icon);
            }
        }

    }
}

function getToDos(id){
    $.ajax({
        // url to request
        url: "https://jsonplaceholder.typicode.com/todos",
        // GET or POST
        type: "GET",
        // Type of data we expect
        dataType: "json"
    })
    // if the request succeeds
        .done(function(response){
            //console.log(response);
            displayToDos(response, id);
        })
        // if the request fails
        .fail(function(status, errorThrown){
            console.log("Error" + errorThrown);
            console.log("Status" + status);
        })
        // always do this
        .always(function(){
            console.log("ToDo Request Done");
        })
}