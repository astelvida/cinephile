import React, { Component } from 'react';
import { Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as actions from '../actions';
import { ToggleButton } from './common';

const { width, height } = Dimensions.get('window');

class MovieDetail extends Component {
  static defaultProps = {
    cast: [],
    crew: []
  }
  componentWillMount() {
    this.props.getCredits(this.props.movie.id);
    this.props.getRecommendations(this.props.movie.id);
  }

  render() {
    const { movie, cast, crew, genres, getIcon, recommendations, genresById } = this.props;

    const getCrewMember = (job) => {
      const result = crew.find((member) => member.job === job);
      return result? result.name : '';
    };
    const director = getCrewMember('Director');
    const screenplay = getCrewMember('Screenplay');

    const mapNamesWithComma = (array, key) =>
      array.map((item) => item[key]).join(',   ').split('  ')
      .map((item) => <Text key={item} style={styles.list}>{item}</Text>);

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}` }}
            />
          </View>

          <View style={styles.movieTextContainer}>
            <View style={{ flexDirection: 'row', flex: 1, padding: 2, paddingBottom: 8 }}>
              <Text style={styles.title}>{movie.title}
                <Text style={styles.date}> ({movie.release_date.slice(0, 4)})</Text>
              </Text>
              <ToggleButton
                style={{ flex: 1, width: 100, height: 25 }}
                name={getIcon(movie)}
                onPress={() => this.props.removeOrAdd(movie)}
              />
            </View>

            <Text style={styles.key}>
              Genres: {mapNamesWithComma(genres, 'name')}
            </Text>
            <Text style={styles.key}>
              Rating: <Text style={styles.list}>{movie.vote_average}</Text>
            </Text>
            <Text style={styles.key}>
              Director: <Text style={styles.list}>{director}</Text>
            </Text>
            <Text style={styles.key}>
              Screenplay: <Text style={styles.list}>{screenplay}</Text>
            </Text>
            <Text style={styles.key}>
              Cast: {mapNamesWithComma(cast, 'name')}
            </Text>
            <Text style={styles.key}>
              Summary: <Text style={styles.overview}>{movie.overview}</Text>
            </Text>
          </View>

          <View style={styles.suggestionsContainer}>
            <Text style={styles.subTitle}>
              Users who liked {movie.title} also liked...
            </Text>
            <ScrollView
              horizontal
            >
              {recommendations.map((rec) =>
                <TouchableOpacity
                  style={styles.imagesRecContainer}
                  key={rec.id}
                  onPress={() => Actions.movieDetail({
                    movie: rec,
                    genres: rec.genre_ids.map((genreId) =>
                      genresById[genreId]
                    ),
                    getIcon,
                    removeOrAdd: this.props.removeOrAdd
                  })}>
                  <Image
                    style={styles.imageRec}
                    source={{ uri: `https://image.tmdb.org/t/p/w185${rec.poster_path}` }}
                  />
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ movies, genres }, { movie }) => ({
  movie: movies.byId[movie.id],
  genresById: genres.byId,
  cast: movies.byId[movie.id].cast,
  crew: movies.byId[movie.id].crew,
  recommendations: movies.byId[movie.id].recommendations?
  movies.byId[movie.id].recommendations.map((id) => movies.byId[id]): []
});

export default connect(mapStateToProps, actions)(MovieDetail);


const styles = {
  mainContainer: {
    flex: 1,
    paddingTop: 63,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  imageContainer: {
    width,
    height: height/4,
    justifyContent: 'flex-end',
  },
  movieTextContainer: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  date: {
    fontWeight: 'normal'
  },
  image: {
    height: 100,
    flex: 1,
    width: null,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  key: {
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  list: {
    fontWeight: 'normal'
  },
  suggestionsContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'space-around',
  },
  imagesRecContainer: {
    height: 185,
    width: (width - 10)/3,
  },
  imageRec: {
    height: 180,
    width: (width - 30)/3,
  },
  overview: {
    fontWeight: 'normal',
  },
};
