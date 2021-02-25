const inquirer = require("inquirer");
const playGame = () => {
  inquirer
    .prompt([
      // we pass in the questions here
      {
        type: "input",
        message: "What is your trainer name?",
        name: "trainerName",
      },
      {
        type: "password",
        message: "Set your password",
        name: "password",
      },
      {
        type: "list",
        message: " Choose your starter Pokemon!",
        choices: ["Bulbasaur", "Squirtle", "Charmander", "Picachu"],
        name: "pokemon",
      },
    ])

    .then((res) => {
      inquirer
        .prompt([
          {
            type: "input",
            message: `What would you like to name your ${res.pokemon}`,
            name: "pokemonName",
          },
        ])
        .then((inqRes) => {
          let trainerName = res.trainerName;
          let pokemonType = res.pokemon;
          let pokemonName = inqRes.pokemonName;
          console.log(`Welcome ${trainerName}`);
          console.log(
            `Your ${pokemonType}, ${pokemonName} is ready for battle! `
          );
          console.log(`A wild Catepie appeared!`);
          console.log(`${trainerName}, called ${pokemonName}`);
          let pokemon_hp = 50;
          let cat_hp = 30;
          const battleSequence = (pokemonName, cat_hp, pokemon_hp) => {
            pokemon_hp -= Math.floor(Math.random() * 10);
            cat_hp -= Math.floor(Math.random() * 10);

            inquirer
              .prompt([
                {
                  type: `list`,
                  message: `Which move will you attack with`,
                  choices: [`Tackle`, `sand Attack`, `Glare`],
                  name: "attack",
                },
              ])
              .then((res) => {
                pokemon_hp -= Math.floor(Math.random() * 10);
                cat_hp -= Math.floor(Math.random() * 10);
                console.log(`${pokemonType}, used ${res.attack}`);
                console.log(`caterpie used Tackle`);
                console.log(
                  `${pokemonType}, has ${pokemon_hp} health points remaining!`
                );
                if (pokemon_hp <= 0) {
                  console.log(`${pokemonName} has fainted`);
                } else if (cat_hp <= 0) {
                  console.log(`caterpie fainted, you won!`);
                } else {
                  battleSequence(pokemonName, cat_hp, pokemon_hp);
                }
              });
          };

          battleSequence(pokemonType, cat_hp, pokemon_hp);
        });
      console.log(`Welcome ${res.trainerName}`);
    });
};

playGame();
