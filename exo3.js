// Créer un objet et ajouter des éléments.
// Afficher les éléments de l'objet avec les boucles.



let etudiantL1 = {
    nom : "Ndiaye",
    prenom : "Kadijah",
    age : 19,
    adresse : "Louga",
}
for(cle in etudiantL1){
    console.log(cle + " " + ":" + " " + etudiantL1[cle]);
}