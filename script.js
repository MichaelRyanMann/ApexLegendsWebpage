const navBar = document.getElementById("nav-bar");
const menuIcon = document.getElementById("nav-toggle");


window.onload = navBar.style.display = "none";

function onClick(){
        
        if(navBar.style.display === "none"){
            navBar.style.display = "block";
        }
        else{
            navBar.style.display = "none";
        }
        
    }

