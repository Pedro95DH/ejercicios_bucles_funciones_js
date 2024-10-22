// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

const mutantFound = [];

function findMutantByPower(mutants, power) {
  for (const mutant of mutants) {
    if (mutant.power == power) {
      mutantFound.push(mutant.name);
    }
  }
  if (mutantFound.length == 0) {
    console.log(`No existen mutantes con ${power} en la base de datos`);
  } else if (mutantFound.length == 1) {
    console.log(`El mutante con ${power} es: ${mutantFound}`);
  } else {
    console.log(`Los mutantes con ${power} son : ${mutantFound}`);
  }
}
findMutantByPower(mutants, "sensualidad");
