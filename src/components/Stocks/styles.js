import {
  StyleSheet
} from "react-native"


export default StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#fff"
  },
  content: {
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#935CAE"
  },
  card: {
    backgroundColor: "green",
    height: 175,
    width: 175,
    backgroundColor: "#fff",
    elevation: 15,
    margin: 15,
    marginRight: 5,
    marginBottom: 20,
    paddingHorizontal: -35,
    justifyContent: "flex-end"
  },
  meta: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    left: 35
  },
  stockData: {
    position: "absolute",
    bottom: 5,
    left: 35,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  stockPrice: {
    fontWeight: "bold",
    color: "#484848",
    fontSize: 16,
    marginLeft: 5,
    lineHeight: 30
  },
  stockPercentage: {
    color: "#FE8080",
    fontSize: 17,
    marginTop: -5
  },
  gradient: {
    position: "absolute",
    bottom: -5,
    width: 200,
    height: 50,
  },
  brandsList: {
    backgroundColor: "#fff",
    paddingVertical: 5,
  },
  brand: {
    flexDirection: "row",
    paddingHorizontal: 10,
    // backgroundColor: "red"
  },
  thumbnailBubble: {
    borderRadius: 50,
    padding: 2,
    position: "absolute",
    left: 10,
    height: 50,
    width: 50,
    margin: 5
  },
  brandName: {
    fontSize: 16,
    lineHeight: 60,
    color: "#484848",
    fontWeight: "bold",
    textAlign: "left",
    flex: 1,
    marginHorizontal: 65
  },
  brandPrice: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    height: 55,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  brandPriceText: {
    fontWeight: "bold",
    color: "#76DB6E",
    fontSize: 14,
    marginBottom: -5,
    marginLeft: 5
  },
  brandPriceIcon: {
  },
})