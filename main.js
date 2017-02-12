import Exponent from 'exponent';
import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button,
  Icon,
} from 'native-base';

class IconExample extends React.Component {
  render() {
    return (
      <View style={{paddingTop: 50}}>
        <Icon name='ios-home' />
        <Icon name='ios-menu' style={{fontSize: 20, color: 'red'}} />
      </View>
    );
  }
}

class App extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    if (Platform.OS === 'android') {
      await Exponent.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }

    this.setState({isReady: true});
  }
  render() {
    if (!this.state.isReady) {
      return <Exponent.Components.AppLoading />;
    }

    return (
      <View style={styles.container}>
        <IconExample />
        <Button style={{alignSelf: 'center'}}>
          <Text style={{color: '#fff'}}>
            This is indeed a button
          </Text>
        </Button>
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
