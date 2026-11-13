const moins = document.getElementById("moins")
const valeur = document.getElementById("valeur")
const plus = document.getElementById("plus")
const reset = document.getElementById("reset")
let compteur = 0
function afficher() {
    valeur.textContent = compteur
}
plus.addEventListener("click", function(){
    compteur = compteur + 1
    afficher()
})
moins.addEventListener("click", function() {
    if (compteur > 0) {
        compteur = compteur - 1
    }
    afficher()
})
reset.addEventListener("click" , function() {
    compteur = 0
    afficher()
})
