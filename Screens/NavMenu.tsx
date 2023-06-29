import {useState, useContext, useMemo, useEffect} from 'react';
import { AppContext } from '../Data/Context/AppContext';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import NavMenuContainer from "../Components/NavMenu/NavMenuContainer";
import { specItemCont } from '../Data/SpecDatabase/DatabaseCompile';
import { Button } from 'react-native';

const NavMenu = (props:{nav:any})=>{
    const [width] = useState(0.8);
    const [height] = useState(64);
    const context = useContext(AppContext);
    const titlesData = useMemo(()=>specItemCont.getItem.all.name.string(),[])
    const titleObjs = useMemo(()=>specItemCont.sort.intoCategories(),[]);


    const styles = StyleSheet.create({
        container:{
            backgroundColor:context?.colorScheme.background2,
            justifyContent:'center',alignItems:'center',
        },
    })
    return (
        <View style={styles.container}>

            <SearchBar items={titlesData} nav={props.nav} style={{width:Dimensions.get('window').width*width,height:height}}/>
            <NavMenuContainer itemsData={titleObjs} nav={props.nav} style={{width:Dimensions.get('window').width*width,height:height,}}/>
        </View>
    )
}

export default NavMenu;