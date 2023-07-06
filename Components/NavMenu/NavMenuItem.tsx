import { useCallback, useContext, useEffect, useState } from "react"
import { Image, View, Text, StyleSheet,TouchableOpacity, FlatList,Dimensions } from "react-native";
import SearchItem from "../SearchItem";
import { specType } from "../../Data/@types/types";
import { AppContext } from "../../Data/Context/AppContext";

const NavMenuItem = (props:{items:string[],nav:any,index:number,color:any,title:specType,image:any,imageSize:number,width:number,height:number,showItems:boolean,showItemFunc:(index:number,close:boolean)=>void})=>{
    const color = useContext(AppContext);
    const colorScheme = {
        text : color.colorScheme.text1,
        background : [
            color.colorScheme.background5,
            color.colorScheme.background6,
        ]
    }
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
            paddingTop:16,
            marginBottom:16,
            height:Dimensions.get('screen').height*.45
        }
    })
    const activeStyles = props.showItems ? 
    StyleSheet.create({
        // Active
        container:{
            backgroundColor:color.colorScheme.background4,
        },
        text:{
            color:color.colorScheme.text4,
            // textTransform:'uppercase',
            // textAlign:'center',
            fontSize:18,
            width:'100%',
        }
    }) :
    StyleSheet.create({
        container:{
            backgroundColor:color.colorScheme.background2

        }, text:{}
    }) 
    const [items] = useState(props.items);


    const renderItem = useCallback(
        ({item,index }:any) => <SearchItem index={index} color={colorScheme} title={item} clickFunc={props.nav}/>,[]
    )

    return (
        <View style={styles.outterContainer}>
            <TouchableOpacity style={[styles.container,activeStyles.container]} onPress={()=>{props.showItemFunc(props.index,props.showItems)}}>
                {props.showItems ? <></> : <></>  }
                <Image
                    style={styles.image}
                    source={props.image}
                />
                <Text style={[styles.text,activeStyles.text]}>{props.title}</Text>
            </TouchableOpacity>
            {props.showItems ? 
                <FlatList 
                contentContainerStyle={{paddingBottom:32}}
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