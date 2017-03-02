// class Component of LoginForm
import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, InputField, Spinner } from './common';
import { loginUser, emailChanged, passwordChanged } from '../actions';


class LoginForm extends Component {
  login() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading === true) {
      return (<Spinner size="large" />);
    }
    return (
      <Button onPress={() => this.login()}>
        <Text>Sign in</Text>
      </Button>
    );
  }

  render() {
    const { email, password, error } = this.props;
    return (
      <Card>
        <CardSection>
          <InputField
            label={'Email'}
            value={email}
            placeholder={'user@email.com'}
            onChangeText={(text) => this.props.emailChanged(text)}
          />
        </CardSection>

        <CardSection>
          <InputField
            secureTextEntry
            label={'Password'}
            value={password}
            placeholder={'password'}
            onChangeText={(text) => this.props.passwordChanged(text)}
          />
        </CardSection>
        <View style={{ backgroundColor: '#fff' }}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error, isAuth, user } = auth;
  return { email, password, loading, error, isAuth, user };
};


export default connect(mapStateToProps, { loginUser, emailChanged, passwordChanged })(LoginForm);

// 3 cardsections
// one will have a button - Login
