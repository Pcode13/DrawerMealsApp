import { View, FlatList, StyleSheet ,Text} from 'react-native';
import React,{useEffect,useLayoutEffect } from 'react';
import MealItem from '../Compontents/MealItem';

import { MEALS ,CATEGORIES} from "../data/dummy-data";
import Category from '../models/category';
import MealsDeatils from '../Compontents/MealsDeatils';
import MealsList from '../Compontents/MealsList';

function MealsOverView({ route,navigation }) {
  const catId = route.params.demo;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });


  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  

  // function renderMealItem(itemData) {

  //   const item = itemData.item;

  //   const mealItemProps = {
  //       id:item.id,
  //     title: item.title,
  //     imageUrl: item.imageUrl,
  //     affordability: item.affordability,
  //     complexity: item.complexity,
  //     duration: item.duration
  //   };
    
  //   return (
  //       <>

        
  //     <MealItem {...mealItemProps} />
      
  //     </>
  //   );
  // }

   return <MealsList item={displayedMeals}/>
   // (
  //   <View style={styles.container}>
    
  //     <FlatList
  //       data={displayedMeals}
  //       keyExtractor={(item) => item.id}
  //       renderItem={renderMealItem}
  //     />
  //   </View>
  // );
}

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});