'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  Component,
  Image,
  ListView,
  View,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

var Dashboard= require('./NavigationDashboard.js');
var Sample= require('./sample.js');
var Matches = require('./NavigationMatches.js');
var Users = require('./NavigationUsers.js');
var {height, width} = Dimensions.get('window');

width= 2*width/3;
class Navipanel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstcontainer}>
            <View style={styles.profilepic}>
              <Image source={require('./../../images/navicover.jpg')} style={styles.largeimage}>
                <Image source={require('./../../images/yuvaraj.jpg')} style={styles.image}/>
                <Text style={styles.name}>Yuvaraj</Text>
              </Image>
            </View>
        </View>

        <View style={styles.secondcontainer}>
            <View style={styles.buttonstyle}>
              <TouchableOpacity
                  onPress={this.gotoMatches.bind(this)}>
                <Text style={styles.text}>Matches</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonstyle}>
              <TouchableOpacity
                  onPress={this.gotoDashboard.bind(this)}>
                <Text style={styles.text}>Dashboard</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonstyle}>
              <TouchableOpacity
                  onPress={this.gotoUsers.bind(this)}>
                <Text style={styles.text}>Users</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }

    gotoNext() {
      //navigator.pop();
      this.props.navigator.push({id: Sample });
    }
    gotoUsers(){
      //navigator.replace({id: Users});
      this.props.navigator.push({id: Users  });
    }
    gotoDashboard(){
      this.props.navigator.push({id: Dashboard });
      //this.props.navigator.push({ id : Dashboard });
    }
    gotoMatches(){
      this.props.navigator.push({id: Matches });

      //navigator.replace({id: Matches});

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#e6e6fa',
    borderBottomRightRadius:0,
    borderTopRightRadius:0,
  },
  firstcontainer:{
    flex: 0.7,
  },
  secondcontainer:{
    flex: 0.6,
    borderBottomRightRadius:0,
    borderTopRightRadius:0,
  },
  name:{
    paddingTop:250,
    alignSelf:'center',
    fontSize:30,
    opacity:1,
    color:'#ffffff',
  },
  profilepic:{
    height:300,
    width:width,
  },
  largeimage:{
    height:300,
    width:width,
    opacity:0.8,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius:100,
    borderWidth:0,
    alignSelf:'center',
    marginTop:50,
    opacity:1,
  },
  buttonstyle:{
    width:300,
    height:60,
    backgroundColor:'#333333',
    borderRadius:200,
    borderColor:'#000000',
    borderStyle:'dashed',
    elevation:20,
    paddingTop:10,
    marginTop:20,
    alignSelf:'center'
  },
  text:{
    color:'#ffffff',
    fontSize:25,
    textAlign:'center',
    paddingTop:10
  }
});

module.exports=Navipanel;
