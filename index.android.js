'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  Dimensions,
} from 'react-native';

var {SKNavigator} = require('react-native-sk-navigator');
var Dashboard = require('./dashboard.js')
var Page = React.createClass({
  render() {
    return (
      <View style={styles.page}>
        {/* Second page render */}

        <TouchableHighlight
          style={[styles.button, styles.goback]}
          underlayColor='#c8c7cc'
          onPress={() => this.props.navigator.pop()}
        >
          <Text>go back</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var Home = React.createClass({
  showPage(type){
      this.props.navigator.push({
      type: type, // simple
      component: Page,
      passProps: {
        navigator: this.props.navigator,
        type: type
      },
    });
  },

  renderButton(type, i){
    return (
        <TouchableHighlight
        key={i}  // First Button
        style={styles.button}
        underlayColor='#c8c7cc'
        onPress={() => this.showPage(type)}
        >
      <Text>{type}</Text>
      </TouchableHighlight>
    )
  },

  render() {
    var types = ['simple'];
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {types.map(this.renderButton)}
        </View>
        <View style={styles.bottom}>
          <Dashboard />
        </View>

      </View>
    );
  }
});


var test = React.createClass({
  render() {
    return (
      <SKNavigator
        initialRoute={{
           component: Home,
           title: 'Home',
           type: 'none',
           passProps: {
           }
         }}/>
    );
  }
});

var styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  top:{
    flex:1,
  },
  bottom: {
    flex:1,
  },
  page:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 14,
    color: 'green',
  },
  goback: {
    marginTop: 10
  }
};

AppRegistry.registerComponent('IPL_react_native', () => test);
