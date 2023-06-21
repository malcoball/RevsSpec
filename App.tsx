import Header from './Components/Header/Header';
import AppContextProvider from './Data/Context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpecScreen from './Screens/SpecScreen';
import NavMenu from './Screens/NavMenu';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const Screen1 = ({navigation})=>{
  return (
    <View>
      {/* <Header/> */}
      <NavMenu nav={(pageTitle:string)=>{navigation.navigate('Screen2',{
        pageTitle:pageTitle,
        itemId : 86
        });
      }}
    />
      
    </View>
  )
}
const Screen2 = ({route,navigation})=>{
  const {itemId,pageTitle} = route.params;
  return (
    <View>
      <SpecScreen title={pageTitle}/>
    </View>
  )
}

export default function App() {
  return (
        <NavigationContainer>
          <AppContextProvider>
            <Stack.Navigator initialRouteName='Screen1'>
              <Stack.Screen 
                name="Screen1" 
                component={Screen1}
                options={{title:'OverView'}}/>
              <Stack.Screen name="Screen2" component={Screen2}/>
              {/* <Header/>
              <NavMenu/>
              <SpecScreen/> */}
            </Stack.Navigator>
          </AppContextProvider>
        </NavigationContainer>
  );
}