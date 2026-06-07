import {StyleSheet} from "react-native";


const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff"
},

header:{
height:70,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingHorizontal:20,
borderBottomWidth:1,
borderColor:"#eee"
},

titulo:{
fontSize:22,
fontWeight:"bold"
},

perfil:{
alignItems:"center",
marginTop:30
},

avatar:{
width:100,
height:100,
borderRadius:50,
backgroundColor:"#d60000",
alignItems:"center",
justifyContent:"center"
},

nome:{
fontSize:25,
fontWeight:"bold",
marginTop:15
},

email:{
color:"#777",
marginTop:5
},

card:{
margin:20,
borderRadius:20,
backgroundColor:"#fff",
elevation:4,
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:5
},

item:{
flexDirection:"row",
alignItems:"center",
padding:20,
borderBottomWidth:1,
borderColor:"#eee"
},

texto:{
marginLeft:15,
fontSize:16
},

botao:{
margin:20,
height:55,
borderRadius:15,
backgroundColor:"#d60000",
alignItems:"center",
justifyContent:"center"
},

botaoTexto:{
color:"#fff",
fontWeight:"bold"
}
});

export default styles;