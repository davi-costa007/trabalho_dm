import { StyleSheet } from "react-native";

export default StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: "#f5f6fa"
  },

  /* BANNER */
  banner: {
    height: 200,
    position: "relative"
  },

  imagemBanner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },

  botaoVoltar: {
    position: "absolute",
    top: 45,
    left: 15,
    backgroundColor: "rgba(0,0,0,0.35)",
    padding: 10,
    borderRadius: 20
  },

  tituloBanner: {
    position: "absolute",
    bottom: 15,
    left: 15,
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },

  cartaoIntro: {
    margin: 20,
    marginTop: -25,
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    elevation: 3
  },

  tituloCartao: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    color: "#111"
  },

  subtituloCartao: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
    marginTop: 5
  },

  formulario: {
    paddingHorizontal: 20
  },

  textoLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 6,
    color: "#333"
  },

  campoInput: {
    backgroundColor: "#fff",
    height: 52,
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    elevation: 1
  },

  areaTipo: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10
  },

  botaoTipo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginHorizontal: 6,
    borderRadius: 20,
    backgroundColor: "#eee"
  },

  botaoTipoAtivo: {
    backgroundColor: "#d60000"
  },

  textoTipo: {
    marginLeft: 6,
    color: "#333",
    fontWeight: "600"
  },

  textoTipoAtivo: {
    color: "#fff"
  },

  /* PRAZO */
  areaPrazo: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginTop: 10
  },

  botaoPrazo: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#e9e9e9",
    alignItems: "center",
    minWidth: 65,
    margin: 5
  },

  botaoPrazoAtivo: {
    backgroundColor: "#d60000",
    transform: [{ scale: 1.05 }]
  },

  textoPrazo: {
    color: "#333",
    fontWeight: "600"
  },

  textoPrazoAtivo: {
    color: "#fff"
  },

  botaoCalcular: {
    margin: 20,
    backgroundColor: "#d60000",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    elevation: 3
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },

  /* RESULTADO */
  cartaoResultado: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    elevation: 3,
    marginBottom: 30
  },

  tituloResultado: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "#111"
  },

  valorResultado: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#d60000",
    marginTop: 10
  },

  descricaoResultado: {
    marginTop: 8,
    color: "#777"
  }

});