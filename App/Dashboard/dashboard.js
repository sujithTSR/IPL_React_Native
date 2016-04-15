
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
  gotoMatches(){
    this.props.navigator.push({ id: 4 });
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
                Dashboard
              </Text>
        </View>
        <View style={styles.first}>
            <View style={styles.leftContainer}>

                  <Image
                    style={styles.thumbnail}
                    source={require('./../../Icons/dashboard/ball.png')}
                  />
                  <View style={{padding:10}}>
                  </View>
                  <Text style={[styles.lrtext, {color: '#1e90ff'} ]}>
                    Played : 15
                  </Text>
            </View>
            <View style={styles.rightContainer}>

                  <Image
                    style={styles.thumbnail}
                    source={require('./../../Icons/dashboard/bat.png')}
                  />
                  <View style={{padding:10}}>
                  </View>
                  <Text style={[styles.lrtext,{color: '#daa520'}]}>
                    Remaining : 05
                  </Text>
              </View>
            </View>
        <View style={styles.second}>
            <View style={styles.leftContainer}>

                  <Image
                    style={styles.thumbnail}
                    source={require('./../../Icons/dashboard/win.png')}
                  />
                  <View style={{padding:10}}>
                  </View>
                <Text style={[styles.lrtext,{color: '#6b8e23'}]}>
                  Won : 11
                </Text>
            </View>

            <View style={styles.rightContainer}>

                  <Image
                    style={styles.thumbnail}
                    source={require('./../../Icons/dashboard/lost.png')}
                  />
                  <View style={{padding:10}}>
                  </View>
                <Text style={[styles.lrtext ,{color: '#f08080'}]}>
                  Lost : 04
                </Text>
              </View>
            </View>

        <View style={styles.third}>

              <Text style={styles.pointstext}>
                Points: 354
              </Text>
        </View>

        <View style={styles.fourth}>
            <TouchableHighlight onPress={this._gotoMatches} style={styles.buttontype}>
              <Text style={styles.text}>
                Place the bet
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
    backgroundColor: '#e6e6fa',
  },
  second:{
    flex: 0.3,
    justifyContent: 'space-around',
    alignItems:'center',
    flexDirection: 'row',
    marginLeft:5,
    backgroundColor: '#e6e6fa',
  },
  third:{
    flex: 0.18,
    alignItems:'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#e6e6fa',
  },
  fourth:{
    flex: 0.18,
    alignItems:'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#e6e6fa',
    paddingBottom:20
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
    flex: 0.6,
    flexDirection: 'column',
  },
  lrtext: {
    flex: 0.4,
    flexDirection: 'column',
    fontSize: 20,
    alignSelf:'center',
    fontWeight:'bold',


  },
  thumbnail:{
    height: height/9 +5,
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
    backgroundColor:'#f0e68c',
    borderRadius:200,
    borderColor:'#000000',
    borderStyle:'dashed',
    paddingTop:10,
    marginTop:20,
    alignSelf:'center'
  },
  pointstext:{
    color:'#d2691e',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10
  },
  text:{
    color:'#2f4f4f',
    fontSize:25,
    fontStyle: 'normal',
    textAlign:'center',
    paddingTop:10
  }
});

module.exports = Dashboard;
