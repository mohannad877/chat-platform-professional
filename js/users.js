const searchBar = document.querySelector(".search input"),
searchIcon = document.querySelector(".search button"),
usersList = document.querySelector(".users-list");

let isSearchActive = false;

searchIcon.onclick = ()=>{
    isSearchActive = !isSearchActive; // toggle state
    
    if(isSearchActive) {
        searchBar.classList.add("show");
        searchIcon.classList.add("active");
        searchBar.focus();
    } else {
        searchBar.classList.remove("show");
        searchIcon.classList.remove("active");
        searchBar.value = "";
        // reload users once search is closed
        loadUsers();
    }
}

searchBar.onkeyup = ()=>{
    let searchTerm = searchBar.value;
    if(searchTerm != "") {
        searchUsers(searchTerm);
    } else {
        loadUsers();
    }
}

function searchUsers(searchTerm) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/search.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            usersList.innerHTML = xhr.response;
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("searchTerm=" + searchTerm);
}

function loadUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "php/users.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            usersList.innerHTML = xhr.response;
        }
    }
    xhr.send();
}

// refresh users list every 500ms when search is inactive
setInterval(()=>{
    if(!isSearchActive) {
        loadUsers();
    }
}, 500);