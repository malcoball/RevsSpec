import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import Header from './Components/Header/Header';
import AppContextProvider from './Data/Context/AppContext';
import SpecScreen from './Screens/SpecScreen';
import NavMenu from './Screens/NavMenu';

export default function App() {
  return (
        <AppContextProvider>
          <Header/>
          {/* <NavMenu/> */}
          <SpecScreen/>
        </AppContextProvider>
  );
}