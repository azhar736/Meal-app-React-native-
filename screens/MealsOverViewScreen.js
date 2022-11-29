import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
const MealsOverViewScreen = ({ route }) => {
  const id = route.params.categoryId;
  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageURL={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
