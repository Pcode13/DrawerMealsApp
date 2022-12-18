import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridList from "../Compontents/CategoriesGridList";



const MainScreen = ({navigation}) => {

  function renderItemData(itemData) {
    function HandleOnpress() {
        
     navigation.navigate('MealsOverView',{
        demo :itemData.item.id
     });
    }
    return (
      <CategoriesGridList
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={HandleOnpress}
      />
    );
  }

  return (
   
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItemData}
        numColumns={2}
      />
  
  );
};

export default MainScreen;


