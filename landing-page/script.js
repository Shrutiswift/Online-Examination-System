function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("navbar-open-btn").style.display = "none";
}

function closeNav() {
    document.getElementById("navbar-open-btn").style.display = "";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}