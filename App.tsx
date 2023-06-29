import Header from './Components/Header/Header';
import AppContextProvider from './Data/Context/AppContext';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpecScreen from './Screens/SpecScreen';
import NavMenu from './Screens/NavMenu';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const MyTheme = { // Not properly implemented tbf
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    background: '#363B73', // Behind the content
    card: '#657BC9', // Background on the navbar
    text: '#FFF',
    border: 'blue',
    notification: 'blue',
  },
};

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
        <NavigationContainer theme={MyTheme} >
          <AppContextProvider>
            <Stack.Navigator initialRouteName='Screen1'>
              <Stack.Screen 
                name="Screen1" 
                component={Screen1}
                options={{title:'Nav Menu'}}/>
              <Stack.Screen name="Screen2" component={Screen2}/>
              {/* <Header/>
              <NavMenu/>
              <SpecScreen/> */}
            </Stack.Navigator>
          </AppContextProvider>
        </NavigationContainer>
  );
}