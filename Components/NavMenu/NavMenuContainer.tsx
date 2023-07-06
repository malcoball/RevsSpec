import {useState, useContext, useEffect, useCallback } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { AppContext } from '../../Data/Context/AppContext';
import {specType} from '../../Data/@types/types';
import NavMenuItem from './NavMenuItem';
import { navTitles } from '../../Data/Nav/navTitles';

import { specItemCont } from '../../Data/SpecDatabase/DatabaseCompile';

// }
const NavMenuContainer = (props:{style:{width:number,height:number},nav:any,itemsData:any})=>{
    const [menuItemShow,setMenuItemShow] = useState <boolean[]>([])
    const context = useContext(AppContext);
    // const [foodTypes] = useState(specItemCont.getItem.all.name.objTypes());
    
    const menuItemToggle = (index:number,close:boolean)=>{
        let listNew = [...menuItemShow];
        listNew = listNew.map(item=>{return false});
        const closeMenu = close !== true ? true : false;
        listNew[index] = closeMenu;

        setMenuItemShow(listNew);
    }


    const getMenuData = (foodType:keyof typeof props.itemsData)=>{
        return props.itemsData[foodType];
    }
    const Menu = navTitles.map((item,index)=>
        {return <NavMenuItem items={getMenuData(item.title)} key={Math.random()} nav={props.nav} 
                index={index} showItems={menuItemShow[index]} showItemFunc={menuItemToggle} 
                color={context?.colorScheme.text1} height={props.style.height} width={props.style.width} imageSize={24} 
                title={item.title} image={item.image}/>})
    return (
        <ScrollView horizontal={true} >
            {Menu}
        </ScrollView>
        
    )

}
export default NavMenuContainer