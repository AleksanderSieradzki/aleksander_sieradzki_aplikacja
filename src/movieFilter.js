export const filterMovies = (movies, searchWord) => {
  let result = [];
  movies.forEach((movie) => {
    if (
      movie.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchWord.toLowerCase()) ||
      searchActors(movie.actors, searchWord)
    ) {
      result.push(movie);
    }
  });

  return result;
};

const searchActors = (actors, word) => {
  let result = false;
  actors.forEach((actor) => {
    if (actor.toLowerCase().includes(word.toLowerCase())) {
      result = true;
    }
  });
  return result;
};
