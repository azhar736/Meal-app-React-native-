import { useLayoutEffect } from "react";
import {
  Button,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("Pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onTap={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: selectedMeals.imageUrl }} />
        <Text style={styles.Title}>{selectedMeals.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{selectedMeals.duration}m</Text>
          <Text style={styles.detailItem}>
            {selectedMeals.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>
            {selectedMeals.affordability.toUpperCase()}
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
          {selectedMeals.ingredients.map((ingredient) => (
            <Pressable
              android_ripple={{ color: "#bd8159" }}
              key={ingredient}
              style={styles.listItem}
            >
              <Text style={styles.itemText}>{ingredient}</Text>
            </Pressable>
          ))}
          <Text style={styles.subTitle}>Steps</Text>
          {selectedMeals.steps.map((step) => (
            <Pressable
              android_ripple={{ color: "#bd8159" }}
              key={step}
              style={styles.listItem}
            >
              <Text style={styles.itemText}>{step}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  container: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
    fontWeight: "bold",
    color: "#e2b497",
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "#e2b497",
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginVertical: 8,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
});
