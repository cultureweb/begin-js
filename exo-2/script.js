// you can write js here

var registered = false;//prompt('Etes vous inscrit ? oui ou non');
var ageOfRunner =  prompt('Quel age avez vous ?');

var raceNumber = 0;


if (registered === false) {
    raceNumber += 1000;
}
else {
    raceNumber = Math.floor(Math.random()*1000);
   // console.log(raceNumber);
}
if (registered === true && ageOfRunner > 18) {
console.log('You will race at 9:30 am');

}
else if  (registered === true || ageOfRunner > 18){
    console.log('You will race at 11:00 am, vous avez le dossard numéro ' + raceNumber);
    
}
else if (registered === false || ageOfRunner < 18){
        console.log('You will race at 12:30 pm ' + raceNumber);         
}
else {
    console.log('Go to see the registration desk');
}


console.log('exo-2');