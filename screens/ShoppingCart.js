import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => (
          <View style={styles.total}>
            <View style={styles.row}>
              <Text style={styles.text}>Subtotal</Text>
              <Text style={styles.text}>410,00 Ugx</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Delivery</Text>
              <Text style={styles.text}>100,00 Ugx</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textb}>Total</Text>
              <Text style={styles.textb}>510,00 Ugx</Text>
            </View>
          </View>
        )}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  total: {
    paddingTop: 20,
    margin: 20,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: { color: "white", fontWeight: "500", fontSize: 16 },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textb: {
    fontSize: 16,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
export default ShoppingCart;
