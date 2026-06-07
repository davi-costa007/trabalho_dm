import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import { ArrowLeft, Car, Bike, WalletCards } from "lucide-react-native";
import estilos from "./styles";

export default function Consorcio({ navigation }) {

  const [tipoVeiculo, setTipoVeiculo] = useState("carro");

  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");

  const [valor, setValor] = useState("");
  const [entrada, setEntrada] = useState("");

  const [prazo, setPrazo] = useState(60);
  const [parcela, setParcela] = useState("");

  function calcular() {
    const v = Number(valor || 0);
    const e = Number(entrada || 0);

    if (v <= 0) return;

    const resultado = (v - e) / prazo;
    setParcela(resultado.toFixed(2));
  }

  return (
    <SafeAreaView style={estilos.tela}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* BANNER */}
          <View style={estilos.banner}>
            <Image
              source={require("../../../components/imgs/imgsHome/baner2.jpg")}
              style={estilos.imagemBanner}
            />

            <TouchableOpacity
              style={estilos.botaoVoltar}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeft size={22} color="#fff" />
            </TouchableOpacity>

            <Text style={estilos.tituloBanner}>
              Simulador de Consórcio
            </Text>
          </View>

          {/* TOGGLE CARRO / MOTO */}
          <View style={estilos.areaTipo}>

            <TouchableOpacity
              style={[
                estilos.botaoTipo,
                tipoVeiculo === "carro" && estilos.botaoTipoAtivo
              ]}
              onPress={() => setTipoVeiculo("carro")}
            >
              <Car size={18} color={tipoVeiculo === "carro" ? "#fff" : "#333"} />
              <Text style={[
                estilos.textoTipo,
                tipoVeiculo === "carro" && estilos.textoTipoAtivo
              ]}>
                Carro
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                estilos.botaoTipo,
                tipoVeiculo === "moto" && estilos.botaoTipoAtivo
              ]}
              onPress={() => setTipoVeiculo("moto")}
            >
              <Bike size={18} color={tipoVeiculo === "moto" ? "#fff" : "#333"} />
              <Text style={[
                estilos.textoTipo,
                tipoVeiculo === "moto" && estilos.textoTipoAtivo
              ]}>
                Moto
              </Text>
            </TouchableOpacity>

          </View>

          {/* INTRO */}
          <View style={estilos.cartaoIntro}>
            <Text style={estilos.tituloCartao}>
              Consórcio de {tipoVeiculo === "carro" ? "Carro" : "Moto"}
            </Text>
            <Text style={estilos.subtituloCartao}>
              Preencha os dados para simular seu consórcio
            </Text>
          </View>

          {/* FORM */}
          <View style={estilos.formulario}>

            <Text style={estilos.textoLabel}>Modelo</Text>
            <TextInput
              style={estilos.campoInput}
              value={modelo}
              onChangeText={setModelo}
              placeholder="Ex: Civic / Fazer"
            />

            <Text style={estilos.textoLabel}>Ano</Text>
            <TextInput
              style={estilos.campoInput}
              value={ano}
              onChangeText={setAno}
              placeholder="Ex: 2024"
              keyboardType="numeric"
            />

            <Text style={estilos.textoLabel}>Cor</Text>
            <TextInput
              style={estilos.campoInput}
              value={cor}
              onChangeText={setCor}
              placeholder="Ex: Preto"
            />

            <Text style={estilos.textoLabel}>
              Valor do {tipoVeiculo}
            </Text>
            <TextInput
              style={estilos.campoInput}
              value={valor}
              onChangeText={setValor}
              placeholder="Ex: 30000"
              keyboardType="numeric"
            />

            <Text style={estilos.textoLabel}>Entrada</Text>
            <TextInput
              style={estilos.campoInput}
              value={entrada}
              onChangeText={setEntrada}
              placeholder="Ex: 5000"
              keyboardType="numeric"
            />

          </View>

          {/* PRAZO */}
          <Text style={estilos.textoLabel}>Escolha o prazo</Text>

          <View style={estilos.areaPrazo}>
            {[12, 24, 36, 48, 60, 72, 84].map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setPrazo(item)}
                style={[
                  estilos.botaoPrazo,
                  prazo === item && estilos.botaoPrazoAtivo
                ]}
              >
                <Text
                  style={[
                    estilos.textoPrazo,
                    prazo === item && estilos.textoPrazoAtivo
                  ]}
                >
                  {item}x
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* BOTÃO */}
          <TouchableOpacity
            style={estilos.botaoCalcular}
            onPress={calcular}
          >
            <Text style={estilos.textoBotao}>
              Calcular simulação
            </Text>
          </TouchableOpacity>

          {/* RESULTADO */}
          {parcela && (
            <View style={estilos.cartaoResultado}>
              <WalletCards size={28} color="#d60000" />

              <Text style={estilos.tituloResultado}>
                Sua simulação de {tipoVeiculo}
              </Text>

              <Text style={estilos.valorResultado}>
                R$ {parcela} <Text style={{ fontSize: 14 }}>/ mês</Text>
              </Text>

              <Text style={estilos.descricaoResultado}>
                {modelo} • {ano} • {cor}
              </Text>
            </View>
          )}

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}