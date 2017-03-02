import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image } from 'react-native';
import { Button } from './common';
import * as actions from '../actions';

const MovieItem = (props) => {
  const sliceText = (text) => `${text.slice(0, 100)}...`;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.titleText}>{props.movie.title}</Text>
        <Text style={styles.text}>
          {sliceText(props.movie.overview)}
        </Text>
        <Text style={styles.text}>{props.movie.release_date}</Text>
        <Text style={styles.text}>Rating: {props.movie.vote_average}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button onPress={() => Actions.movieDetail({ movie: props.movie })}>
            More info..
          </Button>
          <Button
            onPress={() => props.addMovie(props.movie)}
            style={props.movie.inWatchlist? { backgroundColor: '#E91E63' }: ''}
          >
            {props.movie.inWatchlist? 'in Watchlist': 'Add To WatchList'}
          </Button>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          resizeMode={Image.resizeMode.contain}
          source={{ uri: `https://image.tmdb.org/t/p/w92${props.movie.poster_path}` }}
        />
      </View>
    </View>
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
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemTextContainer: {
    flex: 3,
    padding: 5,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    flex: 1,
    width: 100,
    height: 100,
  },
  titleText: {
    fontWeight: 'bold'
  },
  text: {
    flex: 1,
  }
};
