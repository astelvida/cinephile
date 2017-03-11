import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ToggleButton } from './common';
import * as actions from '../actions';

const MovieItem = (props) => {

  const genres = props.movie.genre_ids.map((genreId) =>
    props.genres.byId[genreId]);
  const getIcon = (movie, tab) => (tab === 'watchlist'?
    'times': movie.inWatchlist? 'check-circle': 'plus-circle');
  const removeOrAdd = (movie) => !movie.inWatchlist?
    props.addMovie(movie) : props.removeMovie(movie.id);
  const getIconStyle = (tab) => tab === 'watchlist'? { color: '#FF5252' } : '';

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => Actions.movieDetail({
        title: props.movie.title,
        movie: props.movie,
        removeOrAdd,
        genres,
        getIcon
      })}
    >
      <View style={styles.itemTextContainer}>
        <Text style={styles.titleText}>
          {props.movie.title} <Text style={styles.releaseText}>
          ({props.movie.release_date.slice(0, 4)})</Text>
        </Text>
        <View style={styles.genres}>
          {genres.map((genre) =>
            <Text style={styles.text} key={genre.id}>{genre.name} </Text>
          )}
        </View>
        <Text style={styles.text}>Rating: {props.movie.vote_average}</Text>
        <View style={styles.watchlistButton}>
          <ToggleButton
            name={getIcon(props.movie, props.selectedTab)}
            iconStyle={getIconStyle(props.selectedTab)}
            onPress={() => removeOrAdd(props.movie)}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          resizeMode={Image.resizeMode.contain}
          source={{ uri: `https://image.tmdb.org/t/p/w92${props.movie.poster_path}` }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default connect(null, actions)(MovieItem);

const styles = {
  itemContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    padding: 5,
    borderBottomWidth: 0,
    justifyContent: 'space-between',
    // alignItems: 'center'
  },
  itemTextContainer: {
    flex: 3,
    paddingLeft: 10,
    paddingRight: 5,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  textHeaderContainer: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  watchlistButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    paddingBottom: 5
  },
  releaseText: {
    fontStyle: 'italic',
    fontWeight: 'normal'
  },
  text: {
    fontSize: 13,
    paddingBottom: 2,
  },
  genres: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    width: 100,
    height: 100,
  },
};
