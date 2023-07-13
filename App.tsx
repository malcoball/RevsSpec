import AppContextProvider from './Data/Context/AppContext';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpecScreen from './Screens/SpecScreen';
import NavMenu from './Screens/NavMenu';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { darkTheme, defaultTheme, lightTheme } from './Data/ColorThemes';
import Header from './Components/Header/Header';

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
const ColorChange = (props:{onPress:()=>void})=>{
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>Change col</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  const [themes] = useState([
    darkTheme,
    defaultTheme,
    lightTheme
  ])
  const [currentTheme,setCurrentTheme] = useState(1);
  const changeTheme = ()=>{
    let next = currentTheme === themes.length-1 ? 0 : currentTheme+1;
    setCurrentTheme(next);
  }
  return (
        <NavigationContainer theme={themes[currentTheme]} >
          <AppContextProvider>
            <Stack.Navigator initialRouteName='Screen1'>
              <Stack.Screen 
                name="Screen1" 
                component={Screen1}
                options={{title:'Nav Menu',header:()=><Header showBack={false}/>}}/>
              <Stack.Screen 
                name="Screen2" 
                component={Screen2}
                options={{title:'Spec Screen',header:()=><Header showBack={true}/>}}
                />
            </Stack.Navigator>
          </AppContextProvider>
        </NavigationContainer>
  );
}