import {useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const SearchItem = (props:{title:string,color:{text:string,background:string[]},index:number,clickFunc:(target:string)=>void})=>{
    const {title,clickFunc} = props;
    const styles = StyleSheet.create({
        container:{
            backgroundColor:props.color.background[props.index%2],
            alignItems:'center', justifyContent:'center',
            height:64,
            borderRadius:16
        },
        text:{
            textAlign:'center',
            color:props.color.text

        }
    })
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{clickFunc(title)}}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default SearchItem;