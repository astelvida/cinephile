import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const GenreButton = ({ id, name, style, buttonStyle, onPress }) => {
  const { genreText, genreButton } = styles;

  return (
    <TouchableOpacity
      key={id}
      style={[genreButton, style]}
      id={id}
      value={id}
      onPress={onPress}
    >
      <Text style={[genreText, buttonStyle]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  genreButton: {
    borderRadius: 5,
    backgroundColor: '#26A69A',
    padding: 10,
    margin: 10,
  },

  genreText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
};
export default GenreButton;
