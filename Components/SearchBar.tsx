import {useContext, useMemo, useRef} from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, } from "react-native"
import Images from "../Data/Images"
import { useState } from "react"
import { AppContext } from "../Data/Context/AppContext"
import { specItemCont } from "../Data/SpecDatabase/DatabaseCompile";
import SearchItem from './SearchItem';

const SearchBar = (props:{style:{width:number,height:number},items:string[],nav:any})=>{
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
    // const [items,setItems] = useState(specItemCont.getItem.all.name()); // Can be optimised
    const [items] = useState(props.items);
    const [query,setQuery] = useState('')

    const filteredItems = useMemo(()=>{
        const output = query === '' ? '' : // Doesn't show the output if there's nothing typed in, could limit this to length for performance
        items.filter(item =>{
            return item.toLowerCase().includes(query.toLowerCase())
        })
        return output;
    },[items,query]);
    const itemList = <FlatList
        data={filteredItems}
        renderItem={({item}) => <SearchItem title={item} clickFunc={props.nav}/>}
    />
    const clearSearch = ()=>{
        setQuery('');
    }

    return (
        <>
            <View style={styles.container}>
                <Image
                style={styles.searchImg}
                    source={Images.other.search}
                />
                <TextInput
                    style={styles.text}
                    onChangeText={e => setQuery(e)}
                    placeholder="search"
                    value={query}
                />
            </View>
            {filteredItems.length > 0 ? <TouchableOpacity onPress={clearSearch}>
                <Text>X</Text>
            </TouchableOpacity> : <></>}
            
            {itemList}
        </>
    )
}
export default SearchBar;