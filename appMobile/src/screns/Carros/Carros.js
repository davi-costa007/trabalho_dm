import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView} from "react-native";

import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react-native";
import axios from "axios";
import styles from "./styles";

export default function Carros({ navigation }) {

  const [carros, setCarros] = useState([]);

 useEffect(() => {
  axios.get("http://localhost:3000/carros")
    .then(res => {
      console.log(res.data);
      setCarros(res.data);
    })
    .catch(err => console.log(err));
}, []);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={25} />
        </TouchableOpacity>

        <Text style={styles.titulo}>Carros</Text>

        <Search size={25} />
      </View>

      <TouchableOpacity style={styles.filtro}>
        <SlidersHorizontal size={18} />
        <Text style={styles.filtroTexto}>Filtros</Text>
      </TouchableOpacity>

      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Detalhes", { item })}
          >
            <Image source={{ uri: item.imagem }} style={styles.imagem} />

            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.apartir}>A partir de</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>

            <Text style={styles.seta}>›</Text>
          </TouchableOpacity>
        )}
      />

    </SafeAreaView>
  );
}