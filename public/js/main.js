// EXO 1

// tabPrenoms = ['maxence', 'jamila', 'alex', 'louise', 'zulma']
// tabLength = tabPrenoms.length
// console.log(tabLength);
// console.log(`Bonjour ${tabPrenoms[0]}`);
// console.log(`Bonjour ${tabPrenoms[1]}`);
// console.log(`Bonjour ${tabPrenoms[2]}`);
// console.log(`Bonjour ${tabPrenoms[3]}`);
// console.log(`Bonjour ${tabPrenoms[4]}`);

// EXO 2

// let random = Math.floor(Math.random() * 10) + 1
// console.log(random);

// let question = parseInt(prompt("Entrez un chiffre entre 1 et 10"))

// if (random == question) {
//     alert("C'est le bon chiffre bravo !")
// }
// else {
//     prompt("Entrez un chiffre entre 1 et 10")
// }

// EXO 3

// tabQuestions = ["couleur la + foncée", "couleur la + claire", "couleur du soleil"]
// tabReponses = ["noir", "blanc", "jaune"]

// EXO 3 PART 2

// let reponse = prompt("Bonjour comment vas-tu ?")
// console.log(reponse)

// let question = prompt('Comment vas-tu ?')
// alert("Super je suis content que tu ailles bien")

let temps = prompt("Quel temps fait-il aujourd'hui ?")

if (temps == "soleil") {
    alert("Sortez en t-shirt")
}
else if (temps == "vent") {
    alert("Sortez en pull")
}
else if (temps == "pluie") {
    alert("Mettez une veste")
}
else if (temps == "neige") {
    alert("Il faut mettre un bonnet")
}
else {
    alert("Je n'ai pas compris")
}