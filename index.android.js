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
  BackAndroid,
} from 'react-native';

<<<<<<< HEAD
<<<<<<< HEAD
var _navigator;
var Dashboard=require('./App/Navigation/NavigationDashboard');
=======
>>>>>>> parent of 56186a6... Hardware back android final
=======
>>>>>>> parent of 56186a6... Hardware back android final
var Navipanel=require('./App/Navigation/Navipanel.js');

var Sample= require('./App/Navigation/sample.js');
var Matches = require('./App/Navigation/NavigationMatches.js');
var Users = require('./App/Navigation/NavigationUsers.js');

var SCREEN_WIDTH =require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;
var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  snapVelocity: 8,
  edgeHitWidth: SCREEN_WIDTH,
});
BackAndroid.addEventListener('hardwareBackPress', () => {
if (_navigator.getCurrentRoutes().length === 1  ) {
   return false;
}
_navigator.pop();
return true;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 56186a6... Hardware back android final
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
>>>>>>> parent of 56186a6... Hardware back android final

  _configureScene(route){
    return CustomSceneConfig;
  },
  render() {
    return (
      <Navigator
        initialRoute={{id: Dashboard}}
        renderScene={(route, navigator)=>{
          if(route.id){
            return React.createElement(route.id, {navigator});
          }
        }}
        configureScene={() => {
          return Navigator.SceneConfigs.FadeAndroid;
        }}
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
