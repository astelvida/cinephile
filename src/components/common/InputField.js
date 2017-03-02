import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputField = ({ value, placeholder, label, onChangeText, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle} >
      <Text style={labelStyle}>{ label }</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 18,
  },
  inputStyle: {
    color: '#000',
    flex: 2,
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

export { InputField };
