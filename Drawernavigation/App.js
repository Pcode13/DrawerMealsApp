import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/Screens/MainScreen';

import AllNavigation from './src/AllNavigation';
import { Provider } from 'react-redux'; 
import { Store } from './Store/Redux/Store';

export default function App() {
  return (
    <Provider store={Store}>
  <AllNavigation/> 
    </Provider>
  
  )
  
  
}


