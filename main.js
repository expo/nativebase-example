import Exponent from 'exponent';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  Content,
  Icon,
} from 'native-base';

class IconExample extends React.Component {
  render() {
    return (
      <Content style={{paddingTop: 50}}>
        <Icon name='ios-home' />
        <Icon name='ios-menu' style={{fontSize: 20, color: 'red'}} />
      </Content>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <IconExample />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
