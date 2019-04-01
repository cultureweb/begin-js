var kelvin = 294; // variable kelvin qui prends pour valeur 294;
function calculCelsius(Kelvin) {// fonction qui calcule les Fahrenheit avec celsius en parametre
    let celsius = kelvin - 273;
    return celsius;// retourne le résultat
}
var celsius = calculCelsius(kelvin);// j'affecte à la variable celsus le resultat de la fonction calculCelsius()

console.log(celsius);// je vérifie que celsius a bien été modifié selon la fonction

function calculFahrenheit(celsius) {// fonction qui calcule les Fahrenheit avec celsius en parametre
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;// retourne le résultat
}
var fahrenheit = calculFahrenheit(celsius);
console.log(fahrenheit);
fahrenheit = Math.floor(fahrenheit);//renvoie le plus grand entier qui est inférieur ou égal à un nombre 
console.log(fahrenheit);
var kelvin = prompt('Quelle est la température en Kelvin aujourd\'hui ?');
console.log(kelvin + ' en Kelvin donne le réultat : ' + '\n' );

console.log(calculCelsius(kelvin) + ' en Celsius');
console.log(calculFahrenheit(celsius) + ' en Fahrenheit');

console.log('hello from file');