export const getMoviesById = (state = {}, arraysList) => {
  const nextState = { ...state };
  arraysList.forEach((list) => {
    list.forEach((movie) => {
      nextState[movie.id] = movie;
    });
  });
  return nextState;
};

export const getMovie = (state, id) => state[id];

export const updateMoviesById = (state, list) => {
  const nextState = { ...state };
  for (const movie in list) {
    nextState[parseInt(movie)].inWatchlist = true;
  }
  return nextState;
};

// export const updateMovieById = (state, movie) => movie.inWatchlist = true;
