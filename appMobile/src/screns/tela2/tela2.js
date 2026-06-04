import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, TextInput,} from "react-native";

const carros = [
  {
    id: "1",
    nome: "City",
    preco: "R$ 117.900",
    imagem: require("./componentes/img/carro1.jpeg"),
  },
  {
    id: "2",
    nome: "Civic",
    preco: "R$ 146.900",
    imagem: require("./componentes/img/carro2.jpeg"),
  },
  {
    id: "3",
    nome: "HR-V",
    preco: "R$ 151.900",
    imagem: require("./componentes/img/carro3.jpeg"),
  },
  {
    id: "4",
    nome: "CR-V",
    preco: "R$ 214.900",
    imagem: require("./componentes/img/carro4.jpeg"),
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.icone}>‹</Text>
        <Text style={styles.titulo}>Carros</Text>
        <Text style={styles.icone}>⌕</Text>
      </View>

      {/* Filtros */}
      <TouchableOpacity style={styles.filtro}>
        <Text style={styles.filtroTexto}>⚙ Filtros</Text>
      </TouchableOpacity>

      {/* Lista */}
      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image
              source={item.imagem }
              style={styles.imagem}
            />

            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.apartir}>A partir de</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>

            <Text style={styles.seta}>›</Text>
          </TouchableOpacity>
        )}
      />

      {/* Menu Inferior */}
      <View style={styles.bottomBar}>
        <View style={styles.menuItem}>
          <Text>🏠</Text>
          <Text style={styles.menuText}>Home</Text>
        </View>

        <View style={styles.menuItem}>
          <Text style={{ color: "red" }}>📋</Text>
          <Text style={[styles.menuText, { color: "red" }]}>
            Catálogo
          </Text>
        </View>

        <View style={styles.menuItem}>
          <Text>❤</Text>
          <Text style={styles.menuText}>Favoritos</Text>
        </View>

        <View style={styles.menuItem}>
          <Text>📍</Text>
          <Text style={styles.menuText}>Concessionárias</Text>
        </View>

        <View style={styles.menuItem}>
          <Text>👤</Text>
          <Text style={styles.menuText}>Perfil</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },

  icone: {
    fontSize: 22,
  },

  filtro: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  filtroTexto: {
    fontSize: 15,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },

  imagem: {
    width: 200,
    height: 120,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },

  apartir: {
    color: "#777",
    marginTop: 3,
  },

  preco: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 3,
  },

  seta: {
    fontSize: 26,
    color: "#999",
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  menuItem: {
    alignItems: "center",
  },

  menuText: {
    fontSize: 10,
    marginTop: 2,
  },
});