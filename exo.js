//Récupérez la valeur contenue dans le paragraphe #is-integer.
// Si la valeur est un nombre entier, alors mettre à jour le paragraphe #is-integer
//     valeur ==> est un nombre entier.
// Si ce n'es pas le cas, alors mettre à jour ce même paragraphe
//     valeur ==> n'est pas un nombre entier.

let paraIS = document.getElementById("is-integer");

if(isNaN(paraIS)){
    paraIS.innerHTML += " ==> ce n'est pas un nombre entier.";

}
else {
    paraIS.innerHTML += " ==> c'est un nombre entier.";
}


//Récupérez la valeur contenue dans le paragraphe #is-nan
// Si la valeur n'est pas un nombre, alors mettre à jour le paragraphe #is-nan
//     valeur ==> est NaN ( Not a Number )
// Dans le cas contraire, mettre à jour ce même paragraphe comme suit
//     valeur ==> est un nombre.

let paraNan = document.getElementById("is-nan");

if(isNaN(paraNan)){
    paraNan.innerHTML += " ==> NaN";

}
else {
    paraNan.innerHTML += " ==> c'est un nombre entier.";
}

//Récupérez la valeur contenue dans le paragraphe #parse-float
// Multipliez cette valeur par votre âge et mettez à jour le paragraphe
// Attention, le paragraphe contient du texte, trouvez une solution pour conserver ce texte ! Solution libre.

let paraFloat = document.getElementById("parse-float").value;
paraFloat = 52.563;
let peuple = document.getElementById("population");
paraFloat *= 30;
peuple.innerHTML = paraFloat;

//Récupérez la valeur contenue dans le paragraphe #parse-int
// Divisez cette valeur par votre âge et mettez à jour le paragraphe, attention, ne gardez que la partie entière !
// Attention, le paragraphe contient du texte, trouvez une solution pour conserver ce texte !

let paraINT = document.getElementById("parse-int");
let nombre = document.getElementById("px");
paraINT = 65;
paraINT %= 30;
nombre.innerHTML = paraINT;

//Récupérez la valeur contenue dans le paragraphe #to-fixed
// Modifiez la valeur pour que la précision soit de deux chiffres
// après la virgule et mettez à jour le paragraphe !

let fix =document.getElementById("to-fixed");
fix.innerHTML = 41.95;


