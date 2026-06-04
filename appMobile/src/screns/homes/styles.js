import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

tela:{
flex:1,
backgroundColor:"#fff"
},

container:{
flex:1
},

cabecalho:{
paddingHorizontal:20,
paddingTop:20,
paddingBottom:20,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
borderBottomWidth:2,
borderBottomColor:"#ddd",
},

logo:{
fontSize:28,
fontWeight:"bold",
color:"#d60000"
},

icones:{
flexDirection:"row",
gap:15
},

bannerBox:{
marginHorizontal:15,
borderRadius:25,
overflow:"hidden",
backgroundColor:"#eee",
marginTop:10,
},

banner:{
width:"100%",
height:230
},

pontos:{
position:"absolute",
bottom:10,
width:"100%",
flexDirection:"row",
justifyContent:"center",
gap:8
},

pontoAtivo:{
color:"#d60000"
},

secao:{
marginTop:25,
paddingHorizontal:18
},

tituloLinha:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

titulo:{
fontSize:22,
fontWeight:"bold"
},

ver:{
color:"#d60000",
fontWeight:"bold"
},

categorias:{
marginTop:15,
flexDirection:"row",
justifyContent:"space-between"
},

categoria:{
width:75,
height:75,
backgroundColor:"#fafafa",
borderRadius:18,
alignItems:"center",
justifyContent:"center",
gap:5,
shadowColor:"#000",
shadowOpacity:0.08,
shadowRadius:5,
elevation:3
},

card:{
width:150,
backgroundColor:"#fff",
marginRight:15,
borderRadius:18,
padding:10,
shadowColor:"#000",
shadowOpacity:0.12,
shadowRadius:8,
elevation:4
},

imgCard:{
width:"100%",
height:90,
borderRadius:15
},

preco:{
color:"#d60000",
fontWeight:"bold"
},

oferta:{
backgroundColor:"#fff",
borderRadius:20,
padding:12,
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:8,
elevation:4
},

imgOferta:{
width:"100%",
height:170,
borderRadius:18
},

nomeOferta:{
fontSize:20,
fontWeight:"bold",
marginTop:10
},

botao:{
backgroundColor:"#d60000",
margin:20,
padding:16,
borderRadius:15,
alignItems:"center"
},

botaoTexto:{
color:"#fff",
fontWeight:"bold",
fontSize:15
}

});


export default styles;