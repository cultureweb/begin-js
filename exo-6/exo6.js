// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var team = {
    _players: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    }],

    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }],

    addPlayer(first, last, age) {
        let newPlayer = { //créer un nouvel objet
            firstName: first,
            lastName: last,
            age: age
        }
        this._players.push(newPlayer)
    },

    addGame(opponent, teamPoints, opponentPoints) {
        let newGame = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this._games.push(newGame)
    },

    calculTeamPoints() {//Calculer la somme des points de votre équipe sur tous les matchs joués.
        let totalPoint = 0;
        this._games.forEach(function (game) {
            totalPoint += game.teamPoints;
            //console.log(game);
            //console.log(game.teamPoints);
        });
        //console.log('total des points : ' + totalPoint);
        return totalPoint;
    },

    calculMoyPoints() {
        let totalPoints = this.calculTeamPoints();
        let teamPointsIndexNumbers = this._games.length;
        let moyTeamPoints = 0;//Calculer la moyenne des points de l'équipe adverse sur tous les matchs.
        console.log(this._games.length);//renvie 5 (le nombre d'index de mon array)
        moyTeamPoints = totalPoints / teamPointsIndexNumbers;// moyenne=(somme/nb_index);
        return moyTeamPoints;
    },

    findOlderPlayer() {//fonction qui permet de trouver le joueur le plus agé.
        let agePlayers = 0;    
        let oldestPlayer = 0;
        let oldestPlayerlastName;
        let oldestPlayerFirstName;

        this._players.forEach(function (player) {
            agePlayers = player.age;
            console.log(agePlayers);
            if (agePlayers > oldestPlayer) {// conditions pour garder l'age le plus grand 
                oldestPlayer = agePlayers;
                oldestPlayerFirstName = player.firstName;
                oldestPlayerlastName = player.lastName;

            }


        });
        console.log('le joueur le plus agé : '+ oldestPlayerFirstName + ' ' + oldestPlayerlastName + ' ' + oldestPlayer + ' ans');

    },
    SortPlayersByAbc() {//Trier les joueurs par ordre alphabétique.
      this._players.sort(function(a,b){
        return a.firstName.localeCompare(b.firstName);//fonction qui prend deux arguments et les comparer (comparateur)
    })

    //console.log(this._players);
    
    }
}// fin de l'objet Team
team.addPlayer('toto', 'Martin', 18);
team.addPlayer('Mario', 'Simps', 25);
team.addPlayer('yann', 'Varol', 40);
team.addPlayer('henri', 'Foly', 32);

team.addGame('All Blacks', 23, 15);
team.addGame('ASM', 35, 41);
team.addGame('Stars', 19, 25);
team.addGame('wallons', 40, 39);


console.log(team);
console.log(team.calculTeamPoints());
console.log(team.calculMoyPoints());
team.findOlderPlayer();
team.SortPlayersByAbc();
console.log(team._players);

// Partie 8 code academy pour mémo


/**********  2 CREATING OBJECT LITERALS *************/
/*
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};


// Write your code below
var crewCount  = spaceship.numCrew;
var planetArray = spaceship.flightPath;
*/

/******   3 ACCESSING PRPRERTIES *********/
/*
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};


// Write your code below
var crewCount  = spaceship.numCrew;
var planetArray = spaceship.flightPath;

*/

/********  4 BRACKET NOTATION *************/ 
/*
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below

let isActive = spaceship['Active Mission'];
console.log(isActive);*/
  
  /*****************  5 PROPRETY ASSIGNEMENT ***************************** */
  // Write your code below
 /* var crewCount  = spaceship.numCrew;

  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship.color = 'glorious gold';//Reassign the color property of the spaceship object to have a value of 'glorious gold'

  spaceship.numEngines = 5; // add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
  delete spaceship['Secret Mission'];  // Removes the mission property*/

  /********************* 6  METHODS  ************************* */
  
  /*let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

  // Write your code below
  const alienShip = {
    retreat() {
        console.log( retreatMessage);
      },
    takeOff() {// method takeOff()
      console.log('Spim... Borp... Glix... Blastoff!');
    }
    };
alienShip.retreat();
alienShip.takeOff();*/
/********************* 7  Nested Objects  ************************* */

/*let spaceship = {
  passengers: [{
    name: "Toto",
    age: 15
  },{
    name:"Titi",
    age:28
  }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
var capFave = spaceship.crew.captain['favorite foods'][0]; //assign to capFave the element in the 0th index de la propriete captain‘s favorite food
var firstPassenger = spaceship.passengers[0];//assign to firstPassenger the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made).
*/