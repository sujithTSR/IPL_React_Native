'use strict';
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
var _ = require('lodash');
class Dashboard extends React.Component{


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <View style={styles.leftContainer}>
            <Image
              style={styles.thumbnail}
              source={require('./ball.png')}
            />
          </View>

          <View style={styles.rightContainer}>
            <Image
              style={styles.thumbnail}
              source={require('./bat.png')}
            />
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.leftContainer}>
            <Image
              style={styles.thumbnail}
              source={require('./win.png')}
            />
          </View>

          <View style={styles.rightContainer}>
            <Image
              style={styles.thumbnail}
              source={require('./lost.png')}
            />
          </View>
        </View>
        <View style={styles.third}>
          <Text>
          Credits
          </Text>
        </View>
        <View style={styles.fourth}>
          <Text>
          PLACE THE BET
          </Text>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 300,
    justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
    shadowColor: '#ffff',
    shadowOpacity: 1.2,
    shadowRadius: 2,

  },
  first:{
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  second:{
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginLeft:5,
  },
  third:{
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  fourth:{
    flex: 1,
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
