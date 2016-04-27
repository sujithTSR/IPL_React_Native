

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
var testData = 'https://raw.githubusercontent.com/sujithTSR/IPL_React_Native/master/matches.json' ;



var Matches= React.createClass ({
  getInitialState: function() {
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     return {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
 },
 fetchData() {
    fetch(testData)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.matches),
          loaded: true,
        });
      })
      .done();
  },
 componentDidMount() {
    this.fetchData();
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
 },
  renderUpcoming(rowData){
    var date_elements = rowData.time_stamp.split(" ");
    if(date_elements[1] >= 1+Date_current.getMonth()){
      if(date_elements[2] > Date_current.getDate()){
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
  var date_elements = rowData.time_stamp.split(" ");
    if(date_elements[1]<= 1+Date_current.getMonth()){
      if(date_elements[2]<Date_current.getDate()){
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
         <Text style={{color:'#ff8c00'}}> {rowData.time_stamp} </Text>
         </View>
         <View style={styles.time}>
         <Text style={{color:'#00bfff'}}>12:30 PM </Text>
         </View>
       </View>
       <View style={styles.secondContainer}>
         <View style={styles.betA}>
           <Text style={{fontSize:20}}> {rowData.bets_A} </Text>
           <Text> Bets</Text>
         </View>
         <Image source={{uri:rowData.Image_A}} style={styles.teamA}/>
         <Text style={styles.vs}>VS</Text>
         <Image source={{uri:rowData.Image_B}} style={styles.teamB}/>
         <View style={styles.betB}>
           <Text style={{fontSize:20}}> {rowData.bets_B} </Text>
           <Text> Bets</Text>
         </View>
       </View>
       <View style={styles.thirdContainer}>
         <View style={styles.points}>
         <Text style={{fontSize:30,color:'#00bfff',fontWeight:'bold'}}> {rowData.bet_points} </Text>
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
 renderSeparator(sectionID, rowID) {
      return (
          <View style={styles.separator} key={sectionID+rowID}/>
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
        <View style={styles.tabcontainer}>
           <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}>
             <ScrollView tabLabel='Upcoming' style={styles.tabView} >
               <View style={styles.scontainer}>
                 <ListView
                   ref="listView"
                   dataSource={this.state.dataSource}
                   renderRow={this.renderUpcoming}
                   renderSeparator={this.renderSeparator}
                 />
               </View>
             </ScrollView>
             <ScrollView tabLabel='Finished' style={styles.tabView}>
                 <View style={styles.scontainer}>
                   <ListView
                     ref="listView"
                     dataSource={this.state.dataSource}
                     renderRow={this.renderFinished}
                     renderSeparator={this.renderSeparator}
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
  tabcontainer:{
    flex: 1,
  },
  tab:{
    alignItems: 'center',
  },
  tabView: {
    flex: 1,
},

});

module.exports = Matches;
