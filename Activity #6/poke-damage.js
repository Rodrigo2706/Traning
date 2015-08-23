
/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: poke-damage.js
 */

/*
*Autor: Rodrigo Navarro Vargas
*Makes a Pokemon
*Inputs:
       *Name
       *Type
       *Attack
       *Defense
Output:
      *A Pokemon with all hes attributes.
*/
function makePokemon (pName,pType,pAttack,pDefense) {
    var pokemon = {};

    pokemon.name = pName;
    pokemon.type = pType;
    pokemon.attack = pAttack;
    pokemon.defense = pDefense;

    return pokemon;
}

/*
*Autor: Rodrigo Navarro Vargas
*Calculates the efectiveness of an attack
*Inputs:
       *Attack type of the attacking Pokemon
       *Defense type of the defending Pokemon
Output:
      *The efectiveness of the attack.

Note: Order of the cases are:
      case 1: Efective
      case 2: Neutral
      default: Not very efective
*/
function calculateEfectiveness(pAtkType, pDefType){
    switch (pAtkType){
        case "fire":
            switch (pDefType){
                case "grass":
                  return 2;
                case "electric":
                  return 1;
                default: return 0.5;
              }
        case "water":
            switch (pDefType){
                case "fire":
                  return 2;
                default:
                  return 0.5;
                }
        case "grass":
            switch (pDefType){
                case "water":
                  return 2;
                case "electric":
                  return 1;
                default: return 0.5;
              }
        case "electric":
            switch (pDefType){
                case "water":
                  return 2;
                case "fire":
                  return 1;
                default:
                  return 0.5;
                }
    }
}

/*
* Author: Rodrigo Navarro Vargas
* Calculates the damage of the attack
* Inputs:
        *Attacking Pokemon
        *Defending Pokemon
* Output: Calls a function for printing the results
*/
function calculateDamage(pAtkPokemon, pDefPokemon){
    var efectiveness = calculateEfectiveness(pAtkPokemon.type, pDefPokemon.type);

    var damage = 50 * (pAtkPokemon.attack/pDefPokemon.defense) * efectiveness;
    damage = Math.round(damage);

    printResults(pAtkPokemon.name, pDefPokemon.name, damage);
}

/*
*Author: Rodrigo Navarro Vargas
*Prints the results of the attack.
*Inputs:
        *Name of the attaking Pokemon
        *Name of the defending Pokemon
*Output: a console log of the results.
*/
function printResults(pAtkPokemonName, pDefPokemonName, pDamage){
    console.log(pAtkPokemonName + " did " + pDamage + " to " + pDefPokemonName);
}


/*//////////////////////////////////////////////////////////////
                  ///////////////////////
                          Testing
                  ///////////////////////
///////////////////////////////////////////////////////////////*/
var charmander = makePokemon("Charmander", "fire", 100, 50);
var squirtle = makePokemon("Squirtle", "water", 80, 70);
var bulbasaur = makePokemon("Bulbasaur", "grass", 70, 80);
var pikachu = makePokemon("Pikachu", "electric", 90, 90);

calculateDamage(charmander, squirtle);
calculateDamage(charmander, bulbasaur);
calculateDamage(charmander, pikachu);
calculateDamage(charmander, charmander);

calculateDamage(squirtle, charmander);
calculateDamage(squirtle, bulbasaur);
calculateDamage(squirtle, pikachu);
calculateDamage(squirtle, squirtle);

calculateDamage(bulbasaur, charmander);
calculateDamage(bulbasaur, squirtle);
calculateDamage(bulbasaur, pikachu);
calculateDamage(bulbasaur, bulbasaur);

calculateDamage(pikachu, charmander);
calculateDamage(pikachu, squirtle);
calculateDamage(pikachu, bulbasaur);
calculateDamage(pikachu, pikachu);
