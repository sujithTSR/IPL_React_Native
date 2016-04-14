
'use strict';
var _ = require('lodash');
var {height, width} = Dimensions.get('window');
var height_box = 7*height/23;
var width_box=  6*width/10;
var height_line= 2*height/27;
var width_line=  8*width/10;

//var Nav = require('./../Navigation/Navibutton.js');

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
                <TouchableHighlight onPress={this._handlePress} style={styles.lrbox}>
                  <Image
                    style={styles.thumbnail}
                    source={require('./../../Icons/dashboard/ball.png')}
                  />
                </TouchableHighlight>
                  <Text style={[styles.lrtext, {color: '1e90ff'} ]}>
                    Played
                  </Text>
            </View>
            <View style={styles.rightContainer}>
                <TouchableHighlight onPress={this._handlePress} style={styles.lrbox}>
                  <Image
                    style={styles.thumbnail}
                    source={require('./../../Icons/dashboard/bat.png')}
                  />
                </TouchableHighlight>
                  <Text style={[styles.lrtext,{color: 'daa520'}]}>
                    Remaining
                  </Text>
              </View>
            </View>
        <View style={styles.second}>
            <View style={styles.leftContainer}>
                <TouchableHighlight onPress={this._handlePress} style={styles.lrbox}>
                  <Image
                    style={styles.thumbnail}
                    source={require('./../../Icons/dashboard/win.png')}
                  />
                </TouchableHighlight>
                <Text style={[styles.lrtext,{color: '6b8e23'}]}>
                  Won
                </Text>
            </View>

            <View style={styles.rightContainer}>
                <TouchableHighlight onPress={this._handlePress} style={styles.lrbox}>
                  <Image
                    style={styles.thumbnail}
                    source={require('./../../Icons/dashboard/lost.png')}
                  />
                </TouchableHighlight>
                <Text style={[styles.lrtext ,{color: 'f08080'}]}>
                  Lost
                </Text>
              </View>
            </View>

        <View style={styles.third}>
            <TouchableHighlight onPress={this._handlePress} style={styles.buttontype}>
              <Text style={styles.text}>
                Credits
              </Text>
            </TouchableHighlight>
        </View>

        <View style={styles.fourth}>
            <TouchableHighlight onPress={this._handlePress} style={styles.buttontype}>
              <Text style={styles.text}>
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
    backgroundColor: '#f0f8ff',
    shadowColor: '#f0f8ff',
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },
  prefirst:{
    paddingTop:10,
    paddingBottom:10,
    flex: 0.04,
    flexDirection:'row',
    backgroundColor: '#d3d3d3',
  },
  first:{
    flex: 0.3,
    alignItems:'center',
    flexDirection: 'row',
  },
  second:{
    flex: 0.3,
    justifyContent: 'space-around',
    alignItems:'center',
    flexDirection: 'row',
    marginLeft:5,
  },
  third:{
    flex: 0.18,
    alignItems:'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  fourth:{
    flex: 0.18,
    alignItems:'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  leftContainer:{
    padding:20,
    flex:0.5,
    borderStyle:'solid',
    borderRadius: 8,
    borderColor: '#a9a9a9',
  },
  rightContainer: {
    padding: 20,
    flex: 0.5,
    borderStyle:'solid',
    borderRadius: 8,
    borderColor: '#a9a9a9',
  },
  navibutton:{
    flex:0.1,
    paddingLeft:10,
    width: 30,
    height: 30
  },
  naviimage:{
    width: 29,
    height: 29,
  },
  maintext:{
    flex: 0.9,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
    marginLeft: 8,
    textAlign: 'left'
  },
  lrbox:{
    flex: 0.7,
    flexDirection: 'column',
    padding: 5,
  },
  lrtext: {
    flex: 0.3,
    flexDirection: 'column',
    fontSize: 20,
    paddingTop:10,
    alignSelf:'center',
    fontWeight:'bold'

  },
  thumbnail:{
    height: height/9,
    width: width/5,
    alignSelf:'center'
  },
  year: {
    marginLeft:8,
    textAlign: 'left'
  },
  buttontype:{
    width:width,
    height:60,
    backgroundColor:'#1e90ff',
    borderRadius:200,
    borderColor:'#000000',
    borderStyle:'dashed',
    elevation:20,
    paddingTop:10,
    marginTop:20,
    alignSelf:'center'
  },
  text:{
    color:'#000000',
    fontSize:25,
    textAlign:'center',
    paddingTop:10
  }
});

module.exports = Dashboard;
