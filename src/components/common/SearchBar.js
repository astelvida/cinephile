import React from 'react';
import { TextInput, View, Text } from 'react-native';

const SearchBar = ({ value, placeholder, onChangeText }) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle} >
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    fontSize: 17,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  }
};

export { SearchBar };
