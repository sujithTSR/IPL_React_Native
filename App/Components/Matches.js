

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
var Place_Bet = "Place Bet";
var Date_current = new Date();

var {height, width} = Dimensions.get('window');
var ch=height/3;
var testData = [
    {"date":"03 10 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"04 23 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"04 29 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"04 11 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"03 22 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
    {"date":"04 14 2016","time":"20:30","BetAmt":"50","ImgTeamA":"http://9fa6cd9123d7ed1fa6c1-0231e2a04f3b76fed5ea3702225ca4f7.r63.cf3.rackcdn.com/Mumbai%20Indians.png","ImgTeamB":"http://sports24hour.com/wp-content/uploads/2016/04/Gujarat-Lions-Team-Logo-in-PNG-128x128.jpg","BetsA":"23","BetsB":"31" },
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
 _PlaceBet(){
   if(Place_Bet === "Bet Placed"){
     Place_Bet="Place Bet";
   }
   else if(Place_Bet === "Place Bet"){

     Place_Bet= "Bet Placed";
   }
 }
renderUpcoming(rowdata){
  var date_elements = rowData.date.split(" ");
  if(date_elements[0] >= Date_current.getMonth()){
    if(date_elements[1] > Date_current.getDate()){
      renderRow(rowData);
    }
  }
}

renderFinished(rowData){
var date_elements = rowData.date.split(" ");
  if(date_elements[0]<=Date_current.getMonth()){
    if(date.elements[1]<Date_current.getDate()){
      renderRow(rowData);
    }
  }
}
 renderdivide(rowData){
   // 0 - month
   // 1 - day
   // 2 - Year

   return(
     <View>
          <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}>
              <ScrollView tabLabel='Upcoming'>
                <View>
                  {this.renderUpcoming(rowData)}
                </View>
              </ScrollView>
              <ScrollView tabLabel='Finished'>
                <View>
                  {this.renderFinished(rowData)}
                </View>
              </ScrollView>
          </ScrollableTabView>
      </View>
   );

 }
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
             <TouchableOpacity onPress={this._PlaceBet}>
              <Text style={styles.textbet}> {Place_Bet}</Text>
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
            renderRow={this.renderdivide}
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
