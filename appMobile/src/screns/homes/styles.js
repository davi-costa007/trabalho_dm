import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    backgroundColor: "#ffffff",
    elevation: 2,
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d60000",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 15,
  },

  notificacao: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: "#d60000",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    zIndex: 10,
    elevation: 4,
  },

  notificacaoText: {
    color: "#fff",
    fontWeight: "bold",
  },

  bannerBox: {
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
  },

  banner: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },

  bannerDots: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    flexDirection: "row",
  },

  dotActive: {
    color: "#d60000",
    margin: 5,
    fontSize: 14,
  },

  dot: {
    color: "#cfcfcf",
    margin: 5,
    fontSize: 14,
  },

  section: {
    marginTop: 25,
    paddingHorizontal: 20,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },

  sectionLink: {
    color: "#d60000",
    fontWeight: "600",
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  categoryItem: {
    alignItems: "center",
    flex: 1,
  },

  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: "#444",
  },

  categoryItemWrapper: {
  flex: 1,
  alignItems: "center",
},

categoryDivider: {
  width: 1,
  height: 40,
  backgroundColor: "#e6e6e6",
},

  card: {
    width: 170,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginRight: 15,
    padding: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ffe3e3",
  },

  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    resizeMode: "cover",
  },

  cardTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  cardPrice: {
    color: "#d60000",
    marginTop: 5,
    fontWeight: "600",
  },

  offerCard: {
    backgroundColor: "#fafafa",
    borderRadius: 15,
    padding: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ffe3e3",
  },

  offerImage: {
    width: "100%",
    height: 170,
    borderRadius: 15,
    resizeMode: "cover",
  },

  offerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#222",
  },

  offerPrice: {
    color: "#d60000",
    marginTop: 5,
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#d60000",
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  footer: {
    alignItems: "center",
    padding: 20,
  },

  footerText: {
    color: "#777",
    fontSize: 12,
  },

});

export default styles;