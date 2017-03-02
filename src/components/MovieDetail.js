import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MovieDetail extends Component {
  componentWillMount() {
    // console.log('movieDetail has been clicked');
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>
          More info on {this.props.movie.title}
        </Text>
        <Text style={styles.textStyle}>
          TBC - note: movie prop passed
        </Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'pink',
  },

  textStyle: {
    flex: 1,
  }
};


export default MovieDetail;
