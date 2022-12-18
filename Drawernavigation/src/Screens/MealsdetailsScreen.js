import { StyleSheet, Text, View,Image, ScrollView, Button} from 'react-native'

import { MEALS} from '../data/dummy-data'
import MealsDeatils from '../Compontents/MealsDeatils'
import SubText from '../Compontents/SubText'
import ListView from '../Compontents/ListView'
import React,{useLayoutEffect } from 'react';
import IconButton from '../Compontents/IconButton'
import { useSelector , useDispatch} from 'react-redux'
// import { FavoritesContext } from '../../Store/Context/Favorites_contex'
import {addFavorite,removeFavorite} from '../../Store/Redux/Favorites'


const MealsdetailsScreen = ({route,navigation}) => {
 const favoritesRedux= useSelector((state)=>state.Favoritesmeals.id)

 const dispatch = useDispatch()
 
  // const favoritesctx = useContext(FavoritesContext);
    const mealsId = route.params.mealId

const selectedModal =MEALS.find((meal)=>meal.id === mealsId)

// const isFavorites=favoritesctx.ids.includes(mealsId);

const isFavorites=favoritesRedux.includes(mealsId);

console.log("isFavorites",isFavorites)


function ChangeFavorites(){
    if(isFavorites){
      //favoritesRedux.removeFavorite(mealsId)
      dispatch(removeFavorite({id:mealsId}))
    }else{
      //favoritesRedux.addFavorite(mealsId)
      dispatch(addFavorite({id :mealsId}))
    }
}

useLayoutEffect(()=>{
navigation.setOptions({
    headerRight: ()=>{
        return <IconButton 
        name={isFavorites ? 'star' :'star-outline' }
        onPress={ChangeFavorites}/>
    }
})
},[navigation,ChangeFavorites])

  return (
    <ScrollView>
    <Image source={{ uri :selectedModal.imageUrl }} style={styles.image}/>
      <Text style={styles.txt}>{selectedModal.title}</Text>
      
<View>
    <MealsDeatils  duration={selectedModal.duration} 
    complexity={selectedModal.complexity}
    affordability={selectedModal.affordability}

    />
</View>
<View style={styles.listOuterContainer}>


<View style={styles.listContainer}>
   <SubText SubText={'Ingredients'}/>
   <ListView data={selectedModal.ingredients}/>
<SubText SubText={'Steps PV'}/>
   <ListView data={selectedModal.steps}/>
</View>
</View>
    </ScrollView>
  )
}

export default MealsdetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        borderColor:'#edddec',
        borderWidth:2
      },
      txt:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'700',
        margin:5
      },
      listOuterContainer: {
        alignItems: 'center',
      },
      listContainer: {
        width: '80%',
      },
})