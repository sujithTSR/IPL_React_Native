

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
   sujith = {
     isOpen: false,
     selectedItem: 'About'
   };
   return {
     dataSource: ds.cloneWithRows(testData),
   };
  },

  componentDidMount() {

  },

 _PlaceBet(){
   if(Place_Bet === "Bet Placed"){
     Place_Bet="Place Bet";
   }
   else if(Place_Bet === "Place Bet"){
     Place_Bet= "Bet Placed";
   }
 },
renderUpcoming(rowData){
  var date_elements = rowData.date.split(" ");
  if(date_elements[0] >= 1+Date_current.getMonth()){
    if(date_elements[1] > Date_current.getDate()){
      return(
        <View>
          {this.renderRow(rowData)}
        </View>
      );
    }
    else{
      return (
        <View>
        </View>
      );
    }
  }
  else{
    return (
      <View>
      </View>
    );
  }
},

renderFinished(rowData){
var date_elements = rowData.date.split(" ");
  if(date_elements[0]<= 1+Date_current.getMonth()){
    if(date_elements[1]<Date_current.getDate()){
      return(
        <View>
          {this.renderRow(rowData)}
        </View>
      );
    }
    else{
      return (
        <View>
        </View>
      );
    }
  }
  else{
    return (
      <View>
      </View>
    );
  }
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
        <View style={styles.tabcontainer}>
           <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}
           tabBarBackgroundColor='#ffffff'
           >
             <ScrollView tabLabel='Upcoming' style={styles.tabView} >
               <View style={styles.scontainer}>
                 <ListView
                   ref="listView"
                   dataSource={this.state.dataSource}
                   renderRow={this.renderUpcoming}
                 />
               </View>
             </ScrollView>
             <ScrollView tabLabel='Finished' style={styles.tabView}>
                 <View style={styles.scontainer}>
                   <ListView
                     ref="listView"
                     dataSource={this.state.dataSource}
                     renderRow={this.renderFinished}
                   />
                 </View>
             </ScrollView>
           </ScrollableTabView>
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
    paddingBottom:5,
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

  tabcontainer:{
    flex: 1,
    backgroundColor:'#dcdcdc',
  },
  tab:{
    alignItems: 'center',
  },
  tabView: {
    flex: 1,
},

});

module.exports = Matches;
