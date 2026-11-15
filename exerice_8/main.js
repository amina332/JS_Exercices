const notes = document.querySelectorAll(".note")
const notes2 = document.getElementsByClassName(".note")
console.log(notes);
console.log(notes2);
const surligner = document.getElementById("surligner")

surligner.addEventListener("click", () => {
    notes.forEach(note => {
        note.classList.toggle("bg-yellow-200")
    })
})
Array.from(notes2).forEach(note => {
    note.classList.add("bg-yellow-200")
})
const lire = document.getElementById("lire")

lire.addEventListener("click", () => {
    const themes = document.getElementsByName("theme")
    themes.forEach(theme => {

        if (theme.checked) {
            console.log("Thème choisi :", theme.value)
        }
    })
})
const nouvelleNote = document.createElement("p")

nouvelleNote.textContent = "Note D"
nouvelleNote.classList.add("note")
document.body.appendChild(nouvelleNote)
console.log("Nombre avec querySelectorAll :", notes.length)
console.log("Nombre avec getElementsByClassName :", notes2.length)