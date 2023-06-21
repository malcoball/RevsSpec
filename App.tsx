import Header from './Components/Header/Header';
import AppContextProvider from './Data/Context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpecScreen from './Screens/SpecScreen';
import NavMenu from './Screens/NavMenu';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const MenuScreen = ({navigation:any})=>{
  return (
    <>
      <Header/>
      <Button
                title='Go to Spec'
                onPress={()=> navigation.navigate('Spec')}
            />
      <NavMenu/>
    </>
  )
}
const SpecScreen2 = ()=>{
  return(
    <>
      <Header/>
      <SpecScreen/>
    </>
  )
}

export default function App() {
  return (
        <AppContextProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Menu'>
              <Stack.Screen name="Menu" component={MenuScreen}/>
              <Stack.Screen name="Spec" component={SpecScreen2}/>
              {/* <Header/>
              <NavMenu/>
              <SpecScreen/> */}
            </Stack.Navigator>
          </NavigationContainer>
        </AppContextProvider>
  );
}