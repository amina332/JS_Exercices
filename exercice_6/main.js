const ajouter = document.getElementById("ajouter")
const notes = document.getElementById("notes")
let c = notes.children.length

ajouter.addEventListener("click" , () => {

    const li = document.createElement("li")
    console.log(li);    
    
    li.textContent = "Note n° " + c++
    li.classList.add("p-2", "bg-yellow-100" , "rounded")
    notes.appendChild(li)
    console.log(li);    

})
