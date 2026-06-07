import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import {Car,Bike,Compass,Home,User} from "lucide-react-native";

import styles from "./styles";

export default function BarraTabs({navigation}){

return(

<View style={styles.container}>

<TouchableOpacity
style={styles.item}
onPress={()=>navigation.navigate("Home")}
>
<Home size={22} color="#d60000"/>
<Text style={styles.text}>Home</Text>
</TouchableOpacity>


<TouchableOpacity
style={styles.item}
onPress={()=>navigation.navigate("Carros")}
>
<Car size={22} color="#d60000"/>
<Text style={styles.text}>Carros</Text>
</TouchableOpacity>


<TouchableOpacity
style={styles.item}
onPress={()=>navigation.navigate("Motos")}
>
<Bike size={22} color="#d60000"/>
<Text style={styles.text}>Motos</Text>
</TouchableOpacity>


<TouchableOpacity
style={styles.item}
onPress={()=>navigation.navigate("Concessionarias")}
>
<Compass size={22} color="#d60000"/>
<Text style={styles.text}>Lojas</Text>
</TouchableOpacity>


<TouchableOpacity
style={styles.item}
onPress={()=>navigation.navigate("Perfil")}
>
<User size={22} color="#d60000"/>
<Text style={styles.text}>Perfil</Text>
</TouchableOpacity>

</View>

);

}