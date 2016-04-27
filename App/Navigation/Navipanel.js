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

var {height, width} = Dimensions.get('window');

class Navipanel extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
           />
    );
  }
  renderScene(route, navigator) {
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
      this.props.navigator.push({ id: 2 });
    }
    gotoUsers(){
      this.props.navigator.push({ id : 5});
    }
    gotoDashboard(){
      this.props.navigator.push({ id : 1});
    }
    gotoMatches(){
      this.props.navigator.push({ id: 4 });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#e6e6fa',

  },
  firstcontainer:{
    flex: 0.7,
    width:width,
    height:height/2,
  },
  secondcontainer:{
    flex: 0.6,
    width:width,
    height:height/2,
  },
  name:{
    paddingTop:250,
    alignSelf:'center',
    fontSize:30,
    color:'#ffffff',
  },
  profilepic:{
    height:height/2,
    width:width,
  },
  largeimage:{
    height:height/2,
    width:width,
    opacity:0.8,
  },
  image: {
    height: height/4,
    width: height/4,
    borderRadius:height/4,
    borderWidth:0,
    alignSelf:'center',
    marginTop:height/8,
    opacity:1,
  },
  buttonstyle:{
    width:width,
    height:height/12,
    backgroundColor:'#333333',
    borderRadius:200,
    borderColor:'#000000',
    marginTop:20,
    alignSelf:'center',
    justifyContent:'space-around',
  },
  text:{
    color:'#ffffff',
    fontSize:25,
    textAlign:'center',
    marginTop:5,
    alignSelf:'center',
    fontWeight:'normal',
  }
});

module.exports=Navipanel;
