import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import GenreButton from './GenreButton';
// import * as actions from '../actions/movieActions';

class GenreSetup extends Component {


  render() {
    const { mainContainer,
      headerContainer,
      headerText,
      genreContainer,
    } = styles;

    // TODO: show error message if applicable
    const { allIds, byId, parentState, toggleGenre } = this.props;

    return (
      <View style={mainContainer}>

        <View style={genreContainer}>
          {allIds.map((id) =>
            <GenreButton
              name={byId[id].name}
              key={id}
              id={id}
              style={parentState[id]? { backgroundColor: '#E57373' }: ''}
              buttonStyle={parentState[id]? { color: '#fff' }: ''}
              onPress={() => toggleGenre(id)}
            />
          )}
        </View>

      </View>
    );
  }
}

export default GenreSetup;

const styles = {
  mainContainer: {
    flex: 1,
  },

  genreContainer: {
    flex: 8,
    paddingTop: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
};

  // randomButtonContainer: {
  //   flex: 1,
  //   backgroundColor: '#cecece',
  //   // justifyContent: 'space-around',
  //   // alignItems: 'stretch',
  //   // margin: 10,
  //   // padding: 10,
  // },
  //
  // randomButton: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   alignSelf: 'stretch',
  //   margin: 10,
  //   padding: 10,
  //   borderRadius: 10,
  //   backgroundColor: '#8E24AA',
  // },
  //
  // randomButtonText: {
  //   color: '#fff',
  //   fontWeight: 'bold',
  //   fontSize: 18
  // }
