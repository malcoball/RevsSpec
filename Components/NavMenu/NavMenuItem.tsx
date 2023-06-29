import { useCallback, useContext, useEffect, useState } from "react"
import { Image, View, Text, StyleSheet,TouchableOpacity, FlatList } from "react-native";
import SearchItem from "../SearchItem";
import { specType } from "../../Data/@types/types";
import { AppContext } from "../../Data/Context/AppContext";

const NavMenuItem = (props:{items:string[],nav:any,index:number,color:any,title:specType,image:any,imageSize:number,width:number,height:number,showItems:boolean,showItemFunc:(index:number,close:boolean)=>void})=>{
    const styles = StyleSheet.create({
        outterContainer:{
            width:props.width,
            marginHorizontal:12,
        },
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
        },
        list:{
            paddingTop:16
        }
    })
    const [items] = useState(props.items);
    const color = useContext(AppContext);
    const colorScheme = {
        text : color.colorScheme.text1,
        background : [
            color.colorScheme.background5,
            color.colorScheme.background6,
        ]
    }

    const renderItem = useCallback(
        ({item,index }:any) => <SearchItem index={index} color={colorScheme} title={item} clickFunc={props.nav}/>,[]
    )

    return (
        <View style={styles.outterContainer}>
            <TouchableOpacity style={styles.container} onPress={()=>{props.showItemFunc(props.index,props.showItems)}}>
                <Image
                    style={styles.image}
                    source={props.image}
                />
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
            {props.showItems ? 
                <FlatList 
                style={styles.list}
                ItemSeparatorComponent={() => <View style={{height: 8}} />}
                horizontal={false}
                data={items} 
                renderItem={renderItem}/> 
            : <></>}
            
            
        </View>
    )
}
export default NavMenuItem