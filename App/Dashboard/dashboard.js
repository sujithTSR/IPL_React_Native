
'use strict';
var _ = require('lodash');
var {height, width} = Dimensions.get('window');
var height_box = 7*height/23;
var width_box=  6*width/10;
var height_line= 2*height/27;
var width_line=  8*width/10;

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
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
  _navi(){
    this.props.navigator.push({id: 3});
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.prefirst}>
          <TouchableHighlight onPress={this._navi} style={styles.navibutton}>
            <Image
              style={styles.naviimage}
              source={require('./../../Icons/naviIcon.png')}
            />
          </TouchableHighlight>
          <Text style={styles.maintext}>
            User Details
          </Text>
        </View>
        <View style={styles.first}>
          <View style={styles.leftContainer}>
            <TouchableHighlight onPress={this._handlePress} style={{flex:1, height: height_box, width: width_box, backgroundColor:'e9eaed'}}>
            <Image
              style={styles.thumbnail}
              source={require('./../../Icons/dashboard/ball.png')}
            />
            </TouchableHighlight>
            <Text>
              Played
            </Text>
          </View>

          <View style={styles.rightContainer}>
            <TouchableHighlight onPress={this._handlePress} style={{flex:1, height: height_box, width: width_box, backgroundColor:'e9eaed'}}>
            <Image
              style={styles.thumbnail}
              source={require('./../../Icons/dashboard/bat.png')}
            />
            </TouchableHighlight>
            <Text>
              Remaining
            </Text>
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.leftContainer}>
            <TouchableHighlight onPress={this._handlePress} style={{flex:1, height: height_box, width: width_box, backgroundColor:'e9eaed'}}>
            <Image
              style={styles.thumbnail}
              source={require('./../../Icons/dashboard/win.png')}
            />
            </TouchableHighlight>
            <Text>
              Won
            </Text>
          </View>

          <View style={styles.rightContainer}>
            <TouchableHighlight onPress={this._handlePress} style={{flex:1,height: height_box, width: width_box, backgroundColor:'e9eaed'}}>
            <Image
              style={styles.thumbnail}
              source={require('./../../Icons/dashboard/lost.png')}
            />
            </TouchableHighlight>
            <Text>
              Lost
            </Text>
          </View>
        </View>
        <View style={styles.third}>
          <TouchableHighlight onPress={this._handlePress} style={{flex:1, height: height_line, width: width_line, backgroundColor:'e9eaed'}}>
            <Text>
              Credits
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.fourth}>
          <TouchableHighlight onPress={this._handlePress} style={{flex:1, height: height_line, width: width_line, backgroundColor:'e9eaed'}}>
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
    backgroundColor: '#e9eaed',
    shadowColor: '#F5FCFF',
    shadowOpacity: 1.2,
    shadowRadius: 2,
    paddingTop:10,
  },
  prefirst:{
    flex: 0.2,
    flexDirection:'row',

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
  navibutton:{
    flex:1,
    paddingLeft:10,
    width: 30,
    height: 30
  },
  naviimage:{
    width: 29,
    height: 29,
  },
  maintext:{
    flex: 5.5,
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 8,
    textAlign: 'left'

  },
  thumbnail:{
    height: 45,
    width: 45,
  },
  year: {
    marginLeft:8,
    textAlign: 'left'
  },

});

module.exports = Dashboard;
