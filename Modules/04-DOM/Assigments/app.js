const popUp = document.getElementById("popUp")
const addButton = document.getElementById("addButton")
const removeButton = document.getElementById("removeButton")

addButton.addEventListener("click", show)

function show() {
    popUp.classList.add("show")
}

removeButton.addEventListener("click", () => {
    popUp.classList.remove("show")
})
