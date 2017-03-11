import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text } from 'react-native';
import AppIntro from 'react-native-app-intro';

import GenreSetup from './GenreSetup';
import CustomSetup from './CustomSetup';

import * as actions from '../actions';


class AppSetup extends Component {
  state = { genres: {}, custom: {} };

  componentDidMount() {
    this.props.getGenres();
  }

  toggleClick(id) {
    this.setState({ genres: {
      ...this.state.genres, [id]: !this.state.genres[id] }
    });
  }

  goToNext = (index, total) => {}
  skipAndGoToNext = () => {}

  saveAndGoToApp = () => {
    this.props.savePrefs(this.state).then(() => Actions.container());
  }

  render() {
    const { allIds, byId } = this.props;
    return (
      <AppIntro
        onDoneBtnClick={() => this.saveAndGoToApp()}
        onNextBtnClick={() => this.goToNext()}
        onSlideChange={() => this.goToNext()}
        onSkipBtnClick={() => this.skipAndGoToNext()}
        activeDotColor="#424242"
        dotColor="#424242"
        leftTextColor="#424242"
        rightTextColor="#424242"
      >
        <View style={[styles.slide, { backgroundColor: '#fff' }]}>
          <GenreSetup
            toggleGenre={(id) => this.toggleClick(id)}
            allIds={allIds}
            byId={byId}
            parentState={this.state.genres}
          />
        </View>
        <View style={[styles.slide, { backgroundColor: '#fff' }]}>
          <View level={-10}>
            <Text style={{ fontSize: 25, color: '#fff' }}>
              Save genre preferences?
            </Text>
          </View>
        </View>
      </AppIntro>
    );
  }
}

const mapStateToProps = ({ genres, user }) => {
  const { allIds, byId, isFetching, error } = genres;
  return {
    allIds,
    byId,
    isFetching,
    error,
    user
  };
};

export default connect(mapStateToProps, actions)(AppSetup);

// export default AppSetup;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  skipContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#8BC34A',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#8E24AA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  genreContainer: {
    flex: 8,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerText: {
    color: '#eee',
    fontSize: 20,
  },

});
