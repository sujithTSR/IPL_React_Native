'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  Component,
  Image,
  ListView,
  Navigator,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const SideMenu = require('react-native-side-menu');
var Content = require('./../Dashboard/dashboard.js');
var Kick = require('./Navipanel.js');
var {height, width} = Dimensions.get('window');


class NavigationDashboard extends React.Component{

  state = {
    isOpen: false,
    selectedItem: 'About',
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  updateMenuState(isOpen) {
    this.setState({isOpen});
  }
    render() {
      const content = <Kick navigator={navigator} />
      return (
        <SideMenu menu= {content}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <View style={styles.prefirst}>
              <TouchableOpacity onPress={() => this.toggle()} style={styles.navibutton}>
                <Image
                  style={styles.naviimage}
                  source={require('./../Components/naviIcon.png')}
                />
              </TouchableOpacity>

              <Text style={styles.maintext}>
                Dashboard
              </Text>
          </View>

          <View style={styles.second}>
            <Content />
          </View>
        </SideMenu>
      );
    }
}
var styles = StyleSheet.create({
  contain:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  second:{
    flex: 0.96,
  },
  prefirst:{
    paddingTop:10,
    paddingBottom:10,
    flex: 0.04,
    flexDirection:'row',
    backgroundColor: '#d3d3d3',
  },
  navibutton:{
    flex:0.1,
    paddingLeft:10,
    width: 30,
    height: height/18,
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

});


module.exports = NavigationDashboard;
