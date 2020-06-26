// assigning menu btn img and navBar to variables
const navBar = document.getElementById("nav-bar");
const menuIcon = document.getElementById("nav-toggle");

// setting navBar to display none so it is not visble before menu btn click
window.onload = navBar.style.display = "none";

// function to set navBar display to block when clicked and then back to display none when clicked again
function menuClick(){    
    if(navBar.style.display === "none"){
        navBar.style.display = "block";
    }
    else{
        navBar.style.display = "none";
    }
}



