import {useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const SearchItem = (props:{title:string,clickFunc:(target:string)=>void})=>{
    const {title,clickFunc} = props;
    const styles = StyleSheet.create({
        container:{
        }
    })
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{clickFunc(title)}}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default SearchItem;