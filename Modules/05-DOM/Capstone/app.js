const navBar = document.getElementById("navbar")
let mouseY = 0
window.addEventListener("scroll", hideNavBar)

function hideNavBar(){
    if(window.scrollY > 300){
        navBar.classList.add("unstick")
    }
    else{
        navBar.classList.remove("unstick")
    }
}

window.addEventListener("mousemove", hoverNavBar)

function hoverNavBar(e){
    mouseY=e.clientY
    if(mouseY<150){
        navBar.classList.remove("unstick")
    }
    else{
        navBar.classList.add("unstick")
    }
}
