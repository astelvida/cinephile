import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');


class Geolocation extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Geolocation;
//
// class Geolocation extends Component {
//   state = {
//     initialPosition: 'unknown',
//     lastPosition: 'unknown',
//   };
//
//   watchID: ?number = null;
//
//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const initialPosition = JSON.stringify(position);
//         this.setState({ initialPosition });
//       },
//       (error) => alert(JSON.stringify(error)),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//     this.watchID = navigator.geolocation.watchPosition((position) => {
//       const lastPosition = JSON.stringify(position);
//       this.setState({ lastPosition });
//     });
//   }
//
//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }
//
//   render() {
//     console.log("GEEEO PROPS", this.props);
//     return (
//       <View style={{ flex: 1 }}>
//         <View style={{ flex: 1 }}>
//           <MapView
//             initialRegion={{
//               latitude: 37.78825,
//               longitude: -122.4324,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             }}
//           />
//         </View>
//         <View style={{ flex: 1 }}>
//           <Text>
//             <Text style={styles.title}>Initial position: </Text>
//             {this.state.initialPosition}
//           </Text>
//           <Text>
//             <Text style={styles.title}>Current position: </Text>
//             {this.state.lastPosition}
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }
//
// export default Geolocation;
//
// const styles = StyleSheet.create({
//   title: {
//     fontWeight: '500',
//   },
// });
