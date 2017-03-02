import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button2 = ({ onPress }) => {
  const { button, buttonText } = styles;
  return (
    <TouchableOpacity
      style={button}
      onPress={onPress}
    >
      <Text style={buttonText}>Get Started</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#CDDC39',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  }
};


export { Button2 };
