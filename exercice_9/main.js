const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];
console.log(produits[1].nom);
console.log(produits[2].prix);

function creerFiche(produit){
    const article = document.createElement("article")
    const titre = document.createElement("h2")
    titre.textContent = produit.nom
    const prix = document.createElement("p")
    prix.textContent = produit.prix + " DH"
    article.appendChild(titre)
    article.appendChild(prix)
    return article
}