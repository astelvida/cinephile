export const getMoviesById = (state = {}, arraysList) => {
  const nextState = { ...state };
  if (Array.isArray(arraysList[0])) {
    arraysList.forEach((list) => {
      list.forEach((movie) => {
        nextState[movie.id] = movie;
      });
    });
  } else {
    arraysList.forEach((movie) => {
      nextState[movie.id] = movie;
    });
  }
  return nextState;
};

export const getMovie = (state, id) => state[id];

export const updateMoviesById = (state, list) => {
  const nextState = { ...state };
  for (const movieId in list) {
    nextState[parseInt(movieId, 10)].inWatchlist = true;
  }
  return nextState;
};

// export const updateMovieById = (state, movie) => movie.inWatchlist = true;
