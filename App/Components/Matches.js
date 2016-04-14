
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';


var {height, width} = Dimensions.get('window');
var ch=height/3;
var testData = [
    {"date":"April 14 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"April 14 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"April 14 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"April 14 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"April 14 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"April 14 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
];


var Matches= React.createClass ({
  getInitialState: function() {
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

   return {
     dataSource: ds.cloneWithRows(testData),
   };
 },

 componentDidMount() {

 },
 _navi(){
   this.props.navigator.push({id: 3});
 },
 renderRow(rowData) {
   return(
   <View style={styles.page}>
     <View style={styles.card}>
       <View style={styles.firstContainer}>
         <View style={styles.date}>
         <Text style={{color:'#ff8c00'}}> {rowData.date} </Text>
         </View>
         <View style={styles.time}>
         <Text style={{color:'#00bfff'}}>{rowData.time}</Text>
         </View>
       </View>
       <View style={styles.secondContainer}>
         <View style={styles.betA}>
           <Text style={{fontSize:20}}> {rowData.BetsA} </Text>
           <Text> Bets</Text>
         </View>
         <Image source={{uri:rowData.ImgTeamA}} style={styles.teamA}/>
         <Text style={styles.vs}>VS</Text>
         <Image source={{uri:rowData.ImgTeamB}} style={styles.teamB}/>
         <View style={styles.betB}>
           <Text style={{fontSize:20}}> {rowData.BetsB} </Text>
           <Text> Bets</Text>
         </View>
       </View>
       <View style={styles.thirdContainer}>
         <View style={styles.points}>
         <Text style={{fontSize:30,color:'#00bfff',fontWeight:'bold'}}> {rowData.BetAmt} </Text>
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
 },
  render() {
    return (
      <View style={styles.contain}>
        <View style={styles.prefirst}>
            <TouchableHighlight onPress={this._navi} style={styles.navibutton}>
              <Image
                style={styles.naviimage}
                source={require('./naviIcon.png')}
              />
            </TouchableHighlight>
            <Text style={styles.maintext}>
              Matches
            </Text>
        </View>

        <View style={styles.scontainer}>
          <ListView
            ref="listView"
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>

      </View>
    );
  }
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
  contain:{
    flex: 1,
  },
  scontainer:{
    flex: 0.96,
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
   alignSelf:'center',
 },
 time:{
   flex:1,
   alignItems:'center',
   alignSelf:'center',
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
   borderColor:'#dcdcdc',
   borderWidth:1,
   width:width/5,
   alignSelf:'center',
 },
 teamA:{
   flex:1,
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
   borderColor:'#dcdcdc',
   borderWidth:1,
   width:width/5,
   alignSelf:'center',
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
   backgroundColor:'#b0e0e6',
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

module.exports = Matches;
