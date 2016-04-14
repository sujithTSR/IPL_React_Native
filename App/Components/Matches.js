'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  Component,
  Dimensions,
  Image,
  ListView,
  Navigator,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
var _ = require('lodash');
var {height, width} = Dimensions.get('window');
var ch=height/3;

var testData = [
    {"date":"April 14 2016","time":"20:30","BetAmt":"50","ImgTeamA":"./../Icons/teams/02.png","ImgTeamB":"./../Icons/teams/04.png","BetsA":"23","BetsB":"31" },
    {"date":"April 15 2016","time":"17:30","BetAmt":"50","ImgTeamA":"./../Icons/teams/01.png","ImgTeamB":"./../Icons/teams/07.png","BetsA":"26","BetsB":"28" },
    {"date":"April 16 2016","time":"09:00","BetAmt":"50","ImgTeamA":"./../Icons/teams/02.png","ImgTeamB":"./../Icons/teams/04.png","BetsA":"42","BetsB":"12" },
    {"date":"April 18 2016","time":"20:30","BetAmt":"50","ImgTeamA":"./../Icons/teams/09.png","ImgTeamB":"./../Icons/teams/01.png","BetsA":"50","BetsB":"2" },
    {"date":"April 20 2016","time":"20:00","BetAmt":"100","ImgTeamA":"./../Icons/teams/07.png","ImgTeamB":"./../Icons/teams/04.png","BetsA":"14","BetsB":"40" },
    {"date":"April 22 2016","time":"20:30","BetAmt":"200","ImgTeamA":"./../Icons/teams/04.png","ImgTeamB":"./../Icons/teams/08.png","BetsA":"27","BetsB":"27" },
];

var MatchesRow = React.createClass({
  render(){
    return(
      <View style={styles.page}>
        <View style={styles.card}>
          <View style={styles.firstContainer}>
            <View style={styles.date}>
            <Text style={{color:'#ff8c00'}}> {this.props.date} </Text>
            </View>
            <View style={styles.time}>
            <Text style={{color:'#00bfff'}}>{this.props.time}</Text>
            </View>
          </View>
          <View style={styles.secondContainer}>
            <View style={styles.betA}>
              <Text style={{fontSize:20}}> {this.props.BetsA} </Text>
              <Text> Bets</Text>
            </View>
            <Image source={this.props.ImgTeamA} style={styles.teamA}/>
            <Text style={styles.vs}>VS</Text>
            <Image source={this.props.ImgTeamB} style={styles.teamB}/>
            <View style={styles.betB}>
              <Text style={{fontSize:20}}> {this.props.BetsB} </Text>
              <Text> Bets</Text>
            </View>
          </View>
          <View style={styles.thirdContainer}>
            <View style={styles.points}>
            <Text style={{fontSize:30,color:'#00bfff',fontWeight:'bold'}}>{this.props.BetAmt}</Text>
            <Text style={{fontSize:20,color:'#dcdcdc'}}> points</Text>
            </View>
              <View style={styles.placeBet}>
                <TouchableOpacity>
                <Text style={styles.textbet}> Place Bet</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>

      </View>
    );
  }

});

var Matches = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(testData),
    };
  },
  _navi(){
    this.props.navigator.push({id: 3});
  },
  componentDidMount() {
  },
  renderRow(rowData) {
    return <MatchesRow {...rowData} />
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.prefirst}>
          <TouchableHighlight onPress={this._navi} style={styles.navibutton}>
            <Image
              style={styles.naviimage}
              source={require('./../Icons/naviIcon.png')}
            />
          </TouchableHighlight>
          <Text style={styles.maintext}>
            Matches
          </Text>
        </View>
        <View style={styles.scontainer}>
          <ListView
            ref="listView"
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>
      </View>

    );
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
  container:{
    flex: 1,
    flexDirection: 'Row',
  },
  scontainer:{
    flex: 0.94,
    flexDirection: 'Row',

  },
  card: {
    backgroundColor: '#ffffff',
    marginLeft:width/36,
    marginRight:width/36,
    marginTop:10,
    height:ch,
  },
  firstContainer: {
    flexDirection:'row',
    height:ch/6,
  },
  date:{
    flex:1,
    alignItems:'center',
  },
  time:{
    flex:1,
    alignItems:'center',
  },
  secondContainer:{
    flexDirection:'row',
    height:ch * 5/12,

  },
  betA:{
    flexDirection:'column',
    flex:1,
    alignItems:'center',
    marginLeft:width/36,
    marginRight:width/36,
    marginTop:width/36,
    marginBottom:width/36,
    borderColor:'#000000',
    borderWidth:1,
    width:width/5,
  },
  teamA:{
    flex:1,
    height:90,
    width:width/5,
    height:ch * 5/12,
    alignSelf:'center',
    resizeMode:'contain',
  },
  vs:{
    flex:1,
    textAlign:'center',
    textAlignVertical:'center',
  },
  teamB:{
    flex:1,
    resizeMode:'contain',
    alignSelf:'center',
    width:width/5,
    height:ch * 5/12,
  },
  betB:{
    flexDirection:'column',
    flex:1,
    alignItems:'center',
    marginLeft:width/36,
    marginRight:width/36,
    marginTop:width/36,
    marginBottom:width/36,
    borderColor:'#000000',
    borderWidth:1,
    width:width/5,
  },
  thirdContainer:{
    flexDirection:'row',
    marginBottom:5,
    height:ch * 5/12,
  },
  points:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  textbet:{
    fontSize:20,
    textAlign:'center'
  },
  placeBet:{
    flex:2,
    backgroundColor:'#32cd32',
    height:40,
    alignSelf:'center',
    borderRadius:10,
    marginRight:width/36,
    marginLeft:width/36,
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
});

module.exports=Matches;
AppRegistry.registerComponent('Matches', () => Matches);
