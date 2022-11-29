import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ onTap }) => {
  return (
    <Pressable
      onPress={onTap}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
