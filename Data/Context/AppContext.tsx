import React, {createContext} from 'react';
import { appContextType } from '../@types/types';
export const AppContext = createContext<appContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

const AppContextProvider: React.FC<Props> =  ({children}) =>{
    const colorScheme = {
        background1 : '#657BC9',
        background2 : '#4B4E9D',
        background3 : '#363B73',
        background4 : '#7F82C1',
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