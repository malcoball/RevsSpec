import {useContext} from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, } from "react-native"
import Images from "../Data/Images"
import { useState } from "react"
import { AppContext } from "../Data/Context/AppContext"
import { specItemCont } from "../Data/SpecDatabase/DatabaseCompile"

const SearchBar = (props:{style:{width:number,height:number},updateParent:any})=>{
    const context = useContext(AppContext)
    const styles = StyleSheet.create({
        container:{
            backgroundColor:context?.colorScheme.background4,
            width: props.style.width,
            height: props.style.height,
            flexDirection:'row',
            alignItems:'center',
            borderRadius:20,
            marginTop:24,
            marginBottom:16
        },
        searchImg :{
            width: 24,
            height:24,
            marginLeft:12,
            marginRight:12
        },
        text:{
            color:context?.colorScheme.text1,
            fontSize:16,
            // textTransform:'capitalize',
            height:'60%',
            borderLeftWidth:1,
            borderColor:'white',
            borderWidth:0,
            paddingLeft:12,
        }
    })
    const [text,setText] = useState('');
    const submit = ()=>{
        // const test = specItemCont.getItem.byName(text);
        // console.log("test : ",test)
        props.updateParent(text)
    }
    return (
        <View style={styles.container}>
            <Image
            style={styles.searchImg}
                source={Images.other.search}
            />
            <TextInput
                style={styles.text}
                onChangeText={setText}
                placeholder="search"
                value={text}
                onSubmitEditing={submit}
            />
        </View>
    )
}
export default SearchBar;