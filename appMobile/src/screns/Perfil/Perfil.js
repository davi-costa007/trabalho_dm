import React,{useEffect,useState} from "react";


import {
View,
Text,
TouchableOpacity,
SafeAreaView,
ScrollView
} from "react-native";


import {
ArrowLeft,
User,
Mail,
Phone,
Settings,
Bell,
Shield
} from "lucide-react-native";


import styles from "./styles";



export default function Perfil({navigation}){


const [carregado,setCarregado] = useState(false);



useEffect(()=>{


setTimeout(()=>{

setCarregado(true)

},500)



},[]);




return(


<SafeAreaView style={styles.container}>


<View style={styles.header}>


<TouchableOpacity

onPress={()=>navigation.goBack()}

>


<ArrowLeft size={25}/>


</TouchableOpacity>




<Text style={styles.titulo}>

Perfil

</Text>



<View/>


</View>






{

carregado &&



<ScrollView>



<View style={styles.perfil}>


<View style={styles.avatar}>


<User

size={50}

color="#fff"

/>


</View>




<Text style={styles.nome}>

Davi

</Text>


<Text style={styles.email}>

usuario@email.com

</Text>



</View>







<View style={styles.card}>


<TouchableOpacity style={styles.item}>


<User size={22} color="#d60000"/>


<Text style={styles.texto}>

Meus dados

</Text>


</TouchableOpacity>





<TouchableOpacity style={styles.item}>


<Mail size={22} color="#d60000"/>


<Text style={styles.texto}>

Email

</Text>


</TouchableOpacity>






<TouchableOpacity style={styles.item}>


<Phone size={22} color="#d60000"/>


<Text style={styles.texto}>

Telefone

</Text>


</TouchableOpacity>






<TouchableOpacity style={styles.item}>


<Bell size={22} color="#d60000"/>


<Text style={styles.texto}>

Notificações

</Text>


</TouchableOpacity>






<TouchableOpacity style={styles.item}>


<Shield size={22} color="#d60000"/>


<Text style={styles.texto}>

Privacidade

</Text>


</TouchableOpacity>






<TouchableOpacity style={styles.item}>


<Settings size={22} color="#d60000"/>


<Text style={styles.texto}>

Configurações

</Text>


</TouchableOpacity>




</View>





<TouchableOpacity style={styles.botao}>


<Text style={styles.botaoTexto}>

SAIR

</Text>


</TouchableOpacity>




</ScrollView>



}





</SafeAreaView>


)


}