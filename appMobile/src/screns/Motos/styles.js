import {StyleSheet} from "react-native";


const styles = StyleSheet.create({


container:{

flex:1,

backgroundColor:"#fff"

},



header:{

flexDirection:"row",

justifyContent:"space-between",

alignItems:"center",

padding:20,

borderBottomWidth:1,

borderBottomColor:"#eee"

},



titulo:{

fontSize:22,

fontWeight:"bold"

},



filtro:{

flexDirection:"row",

alignItems:"center",

gap:8,

padding:15

},



filtroTexto:{

fontSize:16

},



card:{

flexDirection:"row",

alignItems:"center",

padding:15,

borderBottomWidth:1,

borderBottomColor:"#eee"

},



imagem:{

width:140,

height:100,

borderRadius:15

},




info:{

flex:1,

marginLeft:15

},



nome:{

fontSize:19,

fontWeight:"bold"

},



apartir:{

fontSize:13,

color:"#777"

},



preco:{

fontSize:16,

fontWeight:"bold",

color:"#d60000"

},



seta:{

fontSize:30,

color:"#999"

}



});


export default styles;