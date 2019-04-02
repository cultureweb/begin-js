var input ='Turpentine and turtles';
var vowels = ['a', 'e', 'i', 'e', 'o', 'u', 'y' ]
var resultArray =[];
for (let i = 0; i < input.length; i++) {// input[i] renvoie le ième caractère de maChaine
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] == vowels[j]){       
    resultArray.push(input[i]);   
        }
    }
    // if (vowels.indexOf(input[i]) != -1 ) {//renvoie le premier indice du tableau. Si pas d'élément renvoie -1
    // console.log(input[i]);
    // }
}

console.log(resultArray.join(''));
resultArray = resultArray.join('').toUpperCase();

console.log(resultArray);


console.log('exo-5');
