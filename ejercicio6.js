// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

// Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

// Añade tu código de bucle aquí
const starWarsDecade = {
  the70: [],
  the80: [],
  the90: [],
  the2000: [],
  the2010: [],
};

for (const movie of starWarsMovies) {
  if (1970 <= movie.releaseYear && movie.releaseYear < 1980) {
    starWarsDecade.the70.push(movie.title);
  } else if (1980 <= movie.releaseYear && movie.releaseYear < 1990) {
    starWarsDecade.the80.push(movie.title);
  } else if (1990 <= movie.releaseYear && movie.releaseYear < 2000) {
    starWarsDecade.the90.push(movie.title);
  } else if (2000 <= movie.releaseYear && movie.releaseYear < 2010) {
    starWarsDecade.the2000.push(movie.title);
  } else if (2010 <= movie.releaseYear && movie.releaseYear < 2020) {
    starWarsDecade.the2010.push(movie.title);
  }
}

console.log(starWarsDecade);
