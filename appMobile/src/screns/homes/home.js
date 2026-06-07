import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import { Car, Bike, Compass, Bell, Search } from "lucide-react-native";
import styles from "./styles";

export default function HomeScreen({ navigation }) {

  const [notificacao, setNotificacao] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setNotificacao("🔥 Novas ofertas Honda disponíveis!");

      setTimeout(() => {
        setNotificacao("");
      }, 3000);

    }, 15000);

    return () => clearInterval(intervalo);
  }, []);

  const CategoryItem = ({ icon: Icon, label, route }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => route && navigation.navigate(route)}
    >
      <Icon size={26} color="#d60000" />
      <Text style={styles.categoryText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {/* NOTIFICAÇÃO */}
      {notificacao !== "" && (
        <View style={styles.notificacao}>
          <Text style={styles.notificacaoText}>
            {notificacao}
          </Text>
        </View>
      )}

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>HONDA</Text>

        <View style={styles.headerIcons}>
          <Search size={22} color="#333" />
          <Bell size={22} color="#333" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* BANNER */}
        <View style={styles.bannerBox}>
          <Image
            source={require("../../../components/imgs/baner.jpg")}
            style={styles.banner}
          />

          <View style={styles.bannerDots}>
            <Text style={styles.dotActive}>●</Text>
            <Text style={styles.dot}>●</Text>
            <Text style={styles.dot}>●</Text>
          </View>
        </View>

        {/* CATEGORIAS */}
        <View style={styles.section}>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categorias</Text>
            <Text style={styles.sectionLink}>Ver todas</Text>
          </View>

          <View style={styles.categories}>

            <View style={styles.categoryItemWrapper}>
              <CategoryItem icon={Car} label="Carros" route="Carros" />
            </View>

            <View style={styles.categoryDivider} />

            <View style={styles.categoryItemWrapper}>
              <CategoryItem icon={Bike} label="Motos" route="Motos" />
            </View>

            <View style={styles.categoryDivider} />

            <View style={styles.categoryItemWrapper}>
              <CategoryItem icon={Bike} label="Urbanas" />
            </View>

            <View style={styles.categoryDivider} />

            <View style={styles.categoryItemWrapper}>
              <CategoryItem icon={Compass} label="Adventure" />
            </View>

          </View>

        </View>

        {/* DESTAQUES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Destaques</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <View style={styles.card}>
              <Image
                source={require("../../../components/imgs/imgsHome/cb500.jpg")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>CB 500F</Text>
              <Text style={styles.cardPrice}>R$ 33.900</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("../../../components/imgs/imgsHome/cb300.jpg")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>CB 300R</Text>
              <Text style={styles.cardPrice}>R$ 27.900</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={require("../../../components/imgs/imgsHome/carro.jpg")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>HR-V</Text>
              <Text style={styles.cardPrice}>R$ 151.900</Text>
            </View>

          </ScrollView>
        </View>

        {/* OFERTA DA SEMANA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Oferta da Semana</Text>

          <View style={styles.offerCard}>
            <Image
              source={require("../../../components/imgs/imgsHome/carro.jpg")}
              style={styles.offerImage}
            />

            <Text style={styles.offerTitle}>
              Honda Civic Premium
            </Text>

            <Text style={styles.offerPrice}>
              R$ 199.900
            </Text>
          </View>

        </View>

        {/* BOTÃO */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Consorcio")}
        >
          <Text style={styles.buttonText}>
            SIMULAR CONSÓRCIO
          </Text>
        </TouchableOpacity>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 Honda App • Todos os direitos reservados
          </Text>
        </View>

        <View style={{ height: 90 }} />

      </ScrollView>
    </View>
  );
}