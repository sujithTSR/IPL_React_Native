
'use strict';
var _ = require('lodash');
var Sample = require('./sample.js');

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  Component,
  Image,
  ListView,
  View,
  TouchableHighlight,
} from 'react-native';

var Dashboard = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 2});
  },
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <View style={styles.leftContainer}>
            <TouchableHighlight onPress={this._handlePress}>
            <Image
              style={styles.thumbnail}
              source={require('./ball.png')}
            />
            </TouchableHighlight>
            <Text>
              Played
            </Text>

          </View>

          <View style={styles.rightContainer}>
            <TouchableHighlight onPress={this._handlePress}>
            <Image
              style={styles.thumbnail}
              source={require('./bat.png')}
            />
            </TouchableHighlight>
            <Text>
              Remaining
            </Text>
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.leftContainer}>
            <TouchableHighlight onPress={this._handlePress}>
            <Image
              style={styles.thumbnail}
              source={require('./win.png')}
            />
            </TouchableHighlight>
            <Text>
              Won
            </Text>
          </View>

          <View style={styles.rightContainer}>
            <TouchableHighlight onPress={this._handlePress}>
            <Image
              style={styles.thumbnail}
              source={require('./lost.png')}
            />
            </TouchableHighlight>
            <Text>
              Lost
            </Text>
          </View>
        </View>
        <View style={styles.third}>
          <TouchableHighlight onPress={this._handlePress}>
            <Text>
              Credits
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.fourth}>
          <TouchableHighlight onPress={this._handlePress}>
            <Text>
            PLACE THE BET
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
    shadowColor: '#ffff',
    shadowOpacity: 1.2,
    shadowRadius: 2,

  },
  first:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  second:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems:'center',
    flexDirection: 'row',
    marginLeft:5,
  },
  third:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  fourth:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  leftContainer:{
    padding:20,
    flex:1,
  },
  rightContainer: {
    padding: 20,
    flex: 1,
  },
  starcontainer: {
    flex:1,
    padding:7,
    flexDirection: 'row'
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  star:{
    width: 10,
    height: 10
  },
  play:{
    width: 20,
    height: 20,
    marginLeft: 160
  },
  title: {
    fontSize: 18,
    marginLeft: 8,
    textAlign: 'left'

  },
  year: {
    marginLeft:8,
    textAlign: 'left'
  },

  separator: {
    height: 1,
    backgroundColor: '#CCC',
    shadowColor: '#FFFF',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset:{
      height:1,
      width:0
    }

    },
  listView: {
    paddingTop: 10,
    backgroundColor: '#F5FCFF'
  }
});

module.exports = Dashboard;
