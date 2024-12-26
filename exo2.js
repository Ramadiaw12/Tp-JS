// Créer une fonction qui prend en paramétre une table de multiplication.
// Afficher la table de multiplication.


function multiplication(number){
    /* The line `let nonumber = 8;` is declaring a variable named `nonumber` and assigning it the value
    of 8. However, in the provided code snippet, the variable `nonumber` is not being used anywhere
    in the `multiplication` function. It seems to be a redundant variable declaration that is not
    being utilized in the function logic. */
    // let nonumber = 8;
    for(i=1; i<11; i++){
        console.log(number, "*", i, "=", number * i)
    
    }

}
let result = multiplication(8);
console.log(result);


