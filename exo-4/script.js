// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop();// méthode pour enlever le dernier element du tableau secretMessage
console.log ('1_ ' + secretMessage);//affiche le tableau

secretMessage.push('to', 'program');//méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau
console.log ('2_ ' + secretMessage);//affiche le tableau

secretMessage[6] = "right";//  Changer le mot 'easily' par 'right' en accédant au bon index du tableau
console.log ('3_ ' + secretMessage);//affiche le tableau

secretMessage.shift();// Supprime le premier element du tableau
console.log ('4_ ' + secretMessage);//affiche le tableau

secretMessage.unshift('Programming');//ajouter la chaine "Programming" en début de tableau
console.log ('5_ ' + secretMessage);//affiche le tableau

secretMessage.splice(5, 5, 'know'); //n définit le nombre d’éléments à supprimer, à partir de l'index jusqu'à la fin du tableau
console.log ('6_ ' + secretMessage);//affiche le tableau

secretMessage.join(' '); //n définit le nombre d’éléments à supprimer, à partir de l'index jusqu'à la fin du tableau
//console.log ('7_ ' + secretMessage);//affiche le tableau
console.log (secretMessage.join(' '));
