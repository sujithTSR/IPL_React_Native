import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
} from 'react-native';

var {height, width} = Dimensions.get('window');
var ch=height/3;

var testData = [
    {"Name":"Mahendra Singh Dhoni","Rank":"1","WinsPts":"650","Profilepic":"http://i.bollywoodmantra.com/celebrities/50/mahendra-singh-dhoni.jpg","WinIcon":"https://cdn1.iconfinder.com/data/icons/2015-best-seo-pack-2/512/16-128.png","LooseIcon":"http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/simple-red-glossy-icons-symbols-shapes/020960-simple-red-glossy-icon-symbols-shapes-smileyfacesad.png","loosePts":"0","Points":"650" },
    {"Name":"Mahendra Singh Dhoni","Rank":"2","WinsPts":"450","Profilepic":"http://i.bollywoodmantra.com/celebrities/50/mahendra-singh-dhoni.jpg","WinIcon":"https://cdn1.iconfinder.com/data/icons/2015-best-seo-pack-2/512/16-128.png","LooseIcon":"http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/simple-red-glossy-icons-symbols-shapes/020960-simple-red-glossy-icon-symbols-shapes-smileyfacesad.png","loosePts":"23","Points":"450" },
    {"Name":"Mahendra Singh Dhoni","Rank":"3","WinsPts":"330","Profilepic":"http://i.bollywoodmantra.com/celebrities/50/mahendra-singh-dhoni.jpg","WinIcon":"https://cdn1.iconfinder.com/data/icons/2015-best-seo-pack-2/512/16-128.png","LooseIcon":"http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/simple-red-glossy-icons-symbols-shapes/020960-simple-red-glossy-icon-symbols-shapes-smileyfacesad.png","loosePts":"23","Points":"330" },
    {"Name":"Mahendra Singh Dhoni","Rank":"4","WinsPts":"275","Profilepic":"http://i.bollywoodmantra.com/celebrities/50/mahendra-singh-dhoni.jpg","WinIcon":"https://cdn1.iconfinder.com/data/icons/2015-best-seo-pack-2/512/16-128.png","LooseIcon":"http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/simple-red-glossy-icons-symbols-shapes/020960-simple-red-glossy-icon-symbols-shapes-smileyfacesad.png","loosePts":"23","Points":"31" },
    {"Name":"Mahendra Singh Dhoni","Rank":"5","WinsPts":"156","Profilepic":"http://i.bollywoodmantra.com/celebrities/50/mahendra-singh-dhoni.jpg","WinIcon":"https://cdn1.iconfinder.com/data/icons/2015-best-seo-pack-2/512/16-128.png","LooseIcon":"http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/simple-red-glossy-icons-symbols-shapes/020960-simple-red-glossy-icon-symbols-shapes-smileyfacesad.png","loosePts":"23","Points":"31" },
    {"Name":"Mahendra Singh Dhoni","Rank":"6","WinsPts":"-99","Profilepic":"http://i.bollywoodmantra.com/celebrities/50/mahendra-singh-dhoni.jpg","WinIcon":"https://cdn1.iconfinder.com/data/icons/2015-best-seo-pack-2/512/16-128.png","LooseIcon":"http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/simple-red-glossy-icons-symbols-shapes/020960-simple-red-glossy-icon-symbols-shapes-smileyfacesad.png","loosePts":"23","Points":"31" },
];

var Users= React.createClass ({

  getInitialState: function() {
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

   return {
     dataSource: ds.cloneWithRows(testData),
   };
 },
 _navi(){
   this.props.navigator.push({id: 3});
 },
 renderRow(rowData){
   return(
     <View style={styles.page}>
       <View style={styles.card}>
         <View style={styles.firstContainer}>

           <Image source={{uri:rowData.Profilepic}} style={styles.profilepic}/>

           <View style={styles.name}>
           <Text style={{color:'#00bfff',fontSize:15}}> {rowData.Name}</Text>
           </View>
           <View style={styles.rank}>
             <Text style={{textAlignVertical:'center'}}>Rank</Text>
             <Text style={{fontSize:40}}> {rowData.Rank} </Text>
           </View>
         </View>
         <View style={styles.secondContainer}>
           <View style={styles.wins}>

             <Image source={{uri:rowData.WinIcon}} style={styles.cup}/>

             <View style={styles.noOfWins}>
             <Text style={{fontSize:25}}> {rowData.WinsPts} </Text>
             <Text> wins</Text>
             </View>
           </View>
           <View style={styles.loose}>

             <Image source={{uri:rowData.LooseIcon}} style={styles.sadSmile}/>
             <View style={styles.noOfLoose}>
               <Text style={{fontSize:25}}> {rowData.loosePts} </Text>
               <Text>Looses</Text>
           </View>
         </View>
         </View>
         <View style={styles.thirdContainer}>
           <View style={styles.points}>
           <Text style={{fontSize:20,color:'#00bfff',fontWeight:'bold'}}> Net Gain/Loss- </Text>
           <Text style={{fontSize:30,color:'#dcdcdc'}}>{rowData.Points} </Text>
           <Text> points </Text>
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
              Users
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
    height:ch/3,
  },
  profilepic:{
    height:ch/4,
    width:ch/4,
    borderRadius:100,
    marginTop:5,
    marginLeft:10,

  },
  name:{
    flex:2,
    alignItems:'flex-start',
    marginLeft:10,
    alignSelf:'center',
  },
  rank:{
    flex:1,
    flexDirection:'row',
    alignSelf:'center',
  },
  secondContainer:{
    flexDirection:'row',
    height:ch/3,
    borderBottomWidth:1,
    borderColor:'#dcdcdc'
  },
  wins:{
    flex:1,
    flexDirection:'row',
    alignSelf:'center',
    height:ch/4,
  },
  cup:{
    flex:1,
    height:ch/4,
    width:width/6,
    resizeMode:'contain',
    alignSelf:'center',

  },
  noOfWins:{
    flexDirection:'column',
    flex:1,
    alignItems:'flex-start',


  },
  loose:{
    flex:1,
    flexDirection:'row',
    height:ch/4,
    alignSelf:'center',
  },

  sadSmile:{
    flex:1,
    height:ch/4,
    width:width/6,
    resizeMode:'contain',
    alignSelf:'center',
  },
  noOfLoose:{
    flexDirection:'column',
    flex:1,
    alignItems:'flex-start',
    height:ch/3,
  },
  thirdContainer:{
    flexDirection:'row',
    height:ch/3,
    alignItems:'center',
    alignSelf:'center',
  },
  points:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
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

module.exports=Users;
