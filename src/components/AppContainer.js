import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Spinner } from './common';

import TabBar from './TabBar';
import LoginForm from './LoginForm';

import * as actions from '../actions';
import { getMoviesList } from '../reducers';


class AppContainer extends Component {
  static defaultProps = {
    movies: [],
    isFetching: false,
  };

  componentWillMount() {
    this.props.getGenres();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isAuth && !this.props.user.isAuth) {
      nextProps.getInitialData().then(() => nextProps.getWatchlist());
      nextProps.getByCategory(['popular']);
    }
  }

  render() {
    const { user, movies, isFetching, selectedTab } = this.props;
    if (!user.isAuth) {
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.mainContainer}>
            <Text style={styles.headerText}>Welcome to Cinephile!</Text>
            <Text style={styles.text}>
              Create an account or login
            </Text>
            <LoginForm />
          </View>
        </View>
      );
    }
    if ((isFetching || !movies.length) &&
        this.props.selectedTab !== 'watchlist') {
      return <Spinner />;
    }
    return (
      <View style={styles.mainContainer}>
        <TabBar
          changeTab={(selected) => this.props.changeTabPress(selected)}
          movies={this.props.movies}
          selectedTab={this.props.selectedTab}
          genres={this.props.genres}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let options;
  if (state.selectedTab === 'home') {
    options = state.auth.preferences.genres;
  }
  if (state.selectedTab === 'popular') {
    options = ['popular'];
  }
  if (state.selectedTab === 'watchlist' ||
      state.selectedTab === 'geolocation') {
    options = ['watchlist'];
  }
  return {
    genres: state.genres,
    isFetching: state.movies.isFetching ||
      state.movies.listByGenre.popular.isFetching,
    isFetchingWatchlist: state.movies.listByGenre.watchlist.isFetching,
    user: state.auth,
    movies: getMoviesList(state, options),
    selectedTab: state.selectedTab,
  };
};

export default connect(mapStateToProps, actions)(AppContainer);


const styles = {
  mainContainer: {
    flex: 1,
    paddingTop: 63,
    flexDirection: 'column',
    backgroundColor: '#eee',
    justifyContent: 'center',
  },

  headerText: {
    alignSelf: 'center',
    marginBottom: 15,
    fontSize: 20
  },
  text: {
    alignSelf: 'center',
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 17,
  }
};
