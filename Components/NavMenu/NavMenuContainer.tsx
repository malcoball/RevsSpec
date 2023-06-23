import {useState, useContext, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { AppContext } from '../../Data/Context/AppContext';
import {specType} from '../../Data/@types/types';
import NavMenuItem from './NavMenuItem';
import { navTitles } from '../../Data/Nav/navTitles';

import Images from "../../Data/Images"
import { specItemCont } from '../../Data/SpecDatabase/DatabaseCompile';

// }
const NavMenuContainer = (props:{style:{width:number,height:number},nav:any})=>{
    const [menuItemShow,setMenuItemShow] = useState <boolean[]>([])
    const context = useContext(AppContext);
    const [foodTypes] = useState(specItemCont.getItem.all.name.objTypes());
    const menuItemToggle = (index:number,close:boolean)=>{
        let listNew = [...menuItemShow];
        listNew = listNew.map(item=>{return false});
        listNew[index] = true;
        setMenuItemShow(listNew);
    }

     

    return (
        <FlatList
            style={{width:props.style.width}}
            data={navTitles}
            renderItem={({item,index}) =><NavMenuItem key={'navMenu'+Math.random()} nav={props.nav} index={index} showItems={menuItemShow[index]} showItemFunc={menuItemToggle} color={context?.colorScheme.text1} height={props.style.height} imageSize={24} title={item.title} image={item.image}/>}
            
            key={`FlatList${Math.random()}`}
        />
    )

}
export default NavMenuContainer