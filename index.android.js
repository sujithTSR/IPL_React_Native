

'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  Dimensions,
  Navigator,
} from 'react-native';

var Navipanel=require('./App/Navigation/Navipanel.js');
var Dashboard= require('./App/Dashboard/dashboard.js');
var Sample= require('./App/Navigation/sample.js');
var Matches = require('./App/Components/Matches.js');
var Users = require('./App/Components/Users.js');

var SCREEN_WIDTH =require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;
var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  snapVelocity: 8,
  edgeHitWidth: SCREEN_WIDTH,
});
var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1,
  // Use our custom gesture defined above
  gestures: {
    pop: CustomLeftToRightGesture,
  }
});

var test = React.createClass({
  _renderScene(route,navigator){
    if(route.id === 1){
      return <Dashboard navigator={navigator}/>;
    }
    else if(route.id === 2){
      return <Sample navigator={navigator} /> ;
    }
    else if(route.id === 3){
      return <Navipanel navigator={navigator} /> ;
    }
    else if(route.id === 4){
      return <Matches navigator={navigator} /> ;
    }
    else if(route.id === 5){
      return <Users navigator={navigator} />
    }

  },
  _configureScene(route){
    return CustomSceneConfig;
  },
  render() {
    return (
      <Navigator initialRoute={{id:1}}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
      />
    );
  }
});

var styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
  },
  top:{
    flex:0.1,
    flexWrap: 'wrap',
  },
  bottom: {
    flex:1,
    justifyContent: 'space-around',
  },
  page:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
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
