import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import products from "./data/products";
// import ProductsScreen from "./screens/ProductsScreen";
import ProductDetails from "./screens/ProductDetails";
import ShoppingCart from "./screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductDetails /> */}
      <ShoppingCart />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
