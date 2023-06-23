import { useEffect, useState } from "react"
import { Image, View, Text, StyleSheet,TouchableOpacity, FlatList } from "react-native";
import SearchItem from "../SearchItem";
import { specItemCont } from "../../Data/SpecDatabase/DatabaseCompile";
import { specType } from "../../Data/@types/types";

const NavMenuItem = (props:{nav:any,index:number,color:any,title:specType,image:any,imageSize:number,height:number,showItems:boolean,showItemFunc:(index:number,close:boolean)=>void})=>{
    const styles = StyleSheet.create({
        container:{
            height:props.height,
            flexDirection:'row',
            alignItems:'center',
            borderBottomWidth: 1,
            borderColor: props.color,
            borderRadius:8,
            marginBottom:8
        },
        image:{
            marginLeft:12,marginRight:12,
            width:props.imageSize,
            height:props.imageSize
        },
        text:{
            color:props.color,
            paddingLeft:12,
            fontSize: 16,
            textTransform:'capitalize'
        }
    })
    const [items] = useState(specItemCont.getItem.category.title(props.title))
    // const itemList = <FlatList
    //     data={items}
    //     renderItem={({item}) => <SearchItem title={item} clickFunc={props.nav}/>}
    // />
    useEffect(()=>{
        console.log("listen")
    },[])

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={()=>{props.showItemFunc(props.index,props.showItems)}}>
                <Image
                    style={styles.image}
                    source={props.image}
                />
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
            <FlatList
        data={['1','2','3','4','5']}
        renderItem={({item}) => <SearchItem title={item} clickFunc={props.nav}/>}
    />
        </>
    )
}
export default NavMenuItem