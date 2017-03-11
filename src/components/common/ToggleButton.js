import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ToggleButton = ({ name='plus-circle', onPress, style, iconStyle }) => {

  return (
    <Icon.Button
      name={name}
      style={style}
      backgroundColor="#fff"
      iconStyle={[{ color: '#CDDC39' }, iconStyle]}
      size={30}
      onPress={onPress}
    >
      <Text style={{ fontSize: 13, color: 'black' }}>Watchlist</Text>
    </Icon.Button>
  );
};

export { ToggleButton };
