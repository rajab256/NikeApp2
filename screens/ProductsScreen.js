import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import products from "../data/products";

const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ url: item.image }} style={styles.image} />
        </View>
      )}
      numColumns={2}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
