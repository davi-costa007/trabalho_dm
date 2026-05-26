import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>HONDA</Text>
      </View>

      {/* Banner */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        }}
        style={styles.banner}
      />

      {/* Título */}
      <View style={styles.content}>
        <Text style={styles.title}>Honda Civic 2026</Text>
        <Text style={styles.subtitle}>
          Tecnologia, potência e design moderno.
        </Text>

        {/* Botões */}
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOutline}>
            <Text style={styles.buttonOutlineText}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>

        {/* Cards */}
        <Text style={styles.section}>Modelos Populares</Text>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Honda Civic</Text>
          <Text style={styles.cardPrice}>R$ 145.000</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1502877338535-766e1452684a"
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Honda HR-V</Text>
          <Text style={styles.cardPrice}>R$ 170.000</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#cc0000",
    padding: 20,
    alignItems: "center",
  },

  logo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  banner: {
    width: "100%",
    height: 220,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },

  buttons: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#cc0000",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  buttonOutline: {
    borderWidth: 2,
    borderColor: "#cc0000",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },

  buttonOutlineText: {
    color: "#cc0000",
    fontWeight: "bold",
  },

  section: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: 180,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },

  cardPrice: {
    fontSize: 18,
    color: "#cc0000",
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
});