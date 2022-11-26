import { Pressable, StyleSheet, Text, View } from "react-native";
const CategoryGridTile = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({});
