import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import GenreButton from './GenreButton';
// import * as actions from '../actions/movieActions';

class CustomSetup extends Component {

  render() {
    const { container,
      headerContainer,
      headerText,
      selectContainer,
    } = styles;

    // TODO: show error message if applicable

    return (
      <View style={container}>

        <View style={headerContainer}>
          <Text style={headerText}>I&apos;m in the mood for...</Text>
        </View>

        <View style={selectContainer}>
          <Text>Some data here...</Text>
        </View>

      </View>
    );
  }
}

export default CustomSetup;

// const mapStateToProps = ({ selects }) => {
//   const { allIds, byId, isFetching, error } = selects;
//   return {
//     allIds,
//     byId,
//     isFetching,
//     error,
//   };
// };
//
// export default connect(mapStateToProps, actions)(CustomSetup);

const styles = {
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#8E24AA',
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerText: {
    color: '#eee',
    fontSize: 20,
  },

  selectContainer: {
    flex: 8,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#BDBDBD',
  },
};
