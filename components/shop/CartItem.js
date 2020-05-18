import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.title}>{props.title}</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.title}>${props.amount}</Text>
        <TouchableOpacity onPress={props.OnRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 16
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    }
});
