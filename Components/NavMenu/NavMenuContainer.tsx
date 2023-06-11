import { FlatList, Text, View } from 'react-native';
import { AppContext } from '../../Data/Context/AppContext';
import {specType} from '../../Data/@types/types';
import NavMenuItem from './NavMenuItem';
import { navTitles } from '../../Data/Nav/navTitles';

import Images from "../../Data/Images"
import { useContext } from 'react';

// }
const NavMenuContainer = (props:{style:{width:number,height:number}})=>{
    const context = useContext(AppContext)
     

    return (
        <FlatList
            style={{width:props.style.width}}
            data={navTitles}
            renderItem={({item}) =><NavMenuItem color={context?.colorScheme.text1} height={props.style.height} imageSize={24} title={item.title} image={item.image}/>}
            key={`FlatList${Math.random()}`}
        />
    )

}
export default NavMenuContainer