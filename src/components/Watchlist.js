import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class WatchList extends Component {
  static defaultProps = {
    movies: []
  }

  render() {
    return (
      <View style={styles.movieListContainer}>
        <View style={styles.listContainer}>
          <ScrollView>
            {this.props.movies.map((movie) =>
              <Text key={movie.id}>{movie.title}</Text>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default WatchList;


const styles = {
  movieListContainer: {
    flex: 1,
  },
  featuredContainer: {
    flex: 2,
  },
  listContainer: {
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
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
    padding: 10,
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
  }
};
