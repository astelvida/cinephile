import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#00BFA5',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    padding: 5,
    fontSize: 15,
    fontWeight: '600'
  }
};


export { Button };
