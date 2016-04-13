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

class Test extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>
          This is a new page which is rendered.
        </Text>
      </View>

    );
  }
}
var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  }

});

module.exports = Test;
