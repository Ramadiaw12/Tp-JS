// Créer un tableau d'objets.
// Afficher les éléments du tableau avec les boucles.


var biblio = [
    {
        nomlivre : "Le Petit Prince",
        prix : "$120"
    },
    {
        nomlivre : "Les Misérables",
        prix : "$50"
    },
    {
        nomlivre : "L'Etranger",
        prix : "$70"
    }
];
for (var i= 0; i<biblio.length; i++){
    console.log(biblio[i].nomlivre, biblio[i].prix);
}