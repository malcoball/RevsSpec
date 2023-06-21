import {useState, useContext, useMemo, useEffect} from 'react';
import { AppContext } from '../Data/Context/AppContext';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import NavMenuContainer from "../Components/NavMenu/NavMenuContainer";
import { specItemCont } from '../Data/SpecDatabase/DatabaseCompile';
import { Button } from 'react-native';

const NavMenu = ()=>{
    const [width] = useState(0.8);
    const [height] = useState(64);
    const [databaseNames] = useState(specItemCont.getItem.all.name());
    const [searchText,setSearchText] = useState('Brunch burger');
    const context = useContext(AppContext);

    const styles = StyleSheet.create({
        container:{
            backgroundColor:context?.colorScheme.background2,
            justifyContent:'center',alignItems:'center'
        },
    })
    return (
        <View style={styles.container}>

            <SearchBar style={{width:Dimensions.get('window').width*width,height:height}} updateParent={setSearchText}/>
            <NavMenuContainer style={{width:Dimensions.get('window').width*width,height:height}}/>
        </View>
    )
}

export default NavMenu;