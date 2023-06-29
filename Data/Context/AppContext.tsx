import React, {createContext} from 'react';
import { appContextType } from '../@types/types';

const defaultScheme : appContextType = {
    colorScheme : {
        background1 : '#657BC9',
        background2 : '#4B4E9D',
        background3 : '#363B73',
        background4 : '#7F82C1',
        background5 : '#424487',
        background6 : '#303373',
        text1       : '#FFF',
        text2       : '#A4A4A4',
        text3       : '#000000',
        text4       : '#2F2F2F',
    }
}

interface Props {
    children: React.ReactNode;
}
export const AppContext = createContext<appContextType >(defaultScheme);
const AppContextProvider: React.FC<Props> =  ({children}) =>{
    const colorScheme = {
        background1 : '#657BC9',
        background2 : '#4B4E9D',
        background3 : '#363B73',
        background4 : '#7F82C1',
        background5 : '#424487',
        background6 : '#303373',
        text1       : '#FFF',
        text2       : '#A4A4A4',
        text3       : '#000000',
        text4       : '#2F2F2F',
    };
    return (
        <AppContext.Provider value={{colorScheme}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;