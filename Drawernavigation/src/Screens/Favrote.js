import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import { FavoritesContext } from '../../Store/Context/Favorites_contex'
import { MEALS } from '../data/dummy-data'
import MealsList from '../Compontents/MealsList'
import { useDispatch, useSelector } from 'react-redux'

 function Favrote() {
// const favoritesctx =useContext(FavoritesContext);
const favoritesRedux =useSelector((state)=> state.Favoritesmeals.id)

const DisplayFavorites = MEALS.filter((meal)=>
  // favoritesctx.ids.includes(meal.id)
  favoritesRedux.includes(meal.id)
);

if (DisplayFavorites.length === 0) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  );
}



  return <MealsList item={DisplayFavorites}/> ;
    
  
}

export default Favrote;

const styles = StyleSheet.create({

  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  }
});