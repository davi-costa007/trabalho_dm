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




card:{

margin:15,

padding:20,

borderRadius:20,

backgroundColor:"#fff",

flexDirection:"row",

alignItems:"center",

elevation:4,

shadowColor:"#000",

shadowOpacity:0.1,

shadowRadius:5

},




info:{

marginLeft:15,

flex:1

},




nome:{

fontSize:19,

fontWeight:"bold"

},




texto:{

color:"#777",

marginTop:5

},




linha:{

flexDirection:"row",

alignItems:"center",

gap:5,

marginTop:8

}



});


export default styles;