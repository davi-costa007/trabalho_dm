import {StyleSheet} from "react-native";

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff"
},

imageContainer:{
position:"relative",
width:"100%",
height:260,
backgroundColor:"#fff"
},

carImage:{
width:"100",
height:260,
resizeMode:"contain",
backgroundColor:"#fff"
},

backIcon:{
position:"absolute",
top:20,
left:15
},

topIcons:{
position:"absolute",
top:20,
right:15,
flexDirection:"row",
alignItems:"center"
},

indicadores:{
flexDirection:"row",
justifyContent:"center",
marginTop:10
},

bolinha:{
width:8,
height:8,
borderRadius:4,
backgroundColor:"#ccc",
marginHorizontal:4
},

ativa:{
backgroundColor:"#d60000"
},

content:{
padding:20
},

title:{
fontSize:30,
fontWeight:"bold"
},

price:{
marginTop:5,
fontSize:16
},

priceHighlight:{
color:"#d60000",
fontWeight:"bold"
},

linha:{
height:1,
backgroundColor:"#ddd",
marginVertical:20
},

options:{
flexDirection:"row",
alignItems:"center"
},

option:{
flex:1,
alignItems:"center"
},

divisorVertical:{
width:1,
height:55,
backgroundColor:"#ddd"
},

optionText:{
marginTop:6,
fontSize:11,
textAlign:"center",
color:"#666"
},

aboutTitle:{
fontSize:18,
fontWeight:"bold",
marginBottom:10
},

aboutText:{
color:"#666",
marginBottom:5
},

primaryButton:{
backgroundColor:"#d60000",
height:52,
borderRadius:8,
justifyContent:"center",
alignItems:"center",
marginTop:25
},

primaryText:{
color:"#fff",
fontWeight:"bold"
},

secondaryButton:{
borderWidth:1,
borderColor:"#d60000",
height:52,
borderRadius:8,
justifyContent:"center",
alignItems:"center",
marginTop:12,
marginBottom:20
},

secondaryText:{
color:"#d60000",
fontWeight:"bold"
}

});

export default styles;