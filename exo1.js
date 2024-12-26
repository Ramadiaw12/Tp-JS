// Créer une fonction qui prend en paramètre deux nombres et le type d'opération.
// Vérifier le type d'opération et effectuer le calcul correspondant.
// Renvoyer le résultat.


function addition(nbr1, nbr2){
    return nbr1 + nbr2
}

function calcul(nbr1, nbr2, operateur){
  if (operateur == "+"){
    return addition(nbr1 + nbr2)
  }else{
    console.log("Erreur veuillez saisir l'oppérateur d'addition")
  }
}

let result = addition(20, 3, "*")
console.log(result) //Affichage du resultat
