import { DefaultTheme } from "@react-navigation/native";

const defaultTheme = { // Not properly implemented tbf
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
const darkTheme = { // Not properly implemented tbf
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    background: '#303030', // Behind the content
    card: '#494949', // Background on the navbar
    text: '#101010',
    border: 'white',
    notification: 'blue',
  },
};
const lightTheme = { // Not properly implemented tbf
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    background: '#98a3b7', // Behind the content
    card: '#c9d4e5', // Background on the navbar
    text: '#fff',
    border: 'white',
    notification: 'blue',
  },
};

export {darkTheme,defaultTheme,lightTheme};