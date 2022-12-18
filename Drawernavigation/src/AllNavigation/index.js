import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
//drawer navigation
import MainScreen from '../Screens/MainScreen';
import Favrote from '../Screens/Favrote';

//stack navigation
import MealsOverView from '../Screens/MealsOverView';
import MealsdetailsScreen from '../Screens/MealsdetailsScreen';
import FavoritesContextProvider from '../../Store/Context/Favorites_contex';



const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function AllNavigation() {

function DrawerNavigation(){
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="MainScreen" component={MainScreen}  options={{
          title: 'All Categories',
          drawerIcon:({color,size})=>(
            <Ionicons name='list' color={color} size={size}/>
          ),
        }}

        />
          <Drawer.Screen name="Favrote" component={Favrote} 

options={{
          title: 'Favorites',
          drawerIcon:({color,size})=>(
            <Ionicons name='star' color={color} size={size}/>
          ),
        }}


          />
        </Drawer.Navigator>
      );
}


  return (
    <>
    {/* <FavoritesContextProvider> */}
    <NavigationContainer>
 <Stack.Navigator>
        <Stack.Screen name="Drawer" component={DrawerNavigation} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="MealsOverView" component={MealsOverView} />
        <Stack.Screen name="MealsdetailsScreen" component={MealsdetailsScreen}  options={{
              title: 'About the Meal',
            }} />
      </Stack.Navigator>
    </NavigationContainer>
    {/* </FavoritesContextProvider> */}
    </>
  );
}