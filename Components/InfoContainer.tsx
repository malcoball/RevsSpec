import {useContext} from 'react';
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { AppContext } from '../Data/Context/AppContext';
import { ingredient } from '../Data/@types/types';

const ItemDouble = (props:{item:ingredient,containerStyle:any,textStyle:any},)=>{
    return (
        <View style={props.containerStyle}>
            <Text style={[props.textStyle,sharedStyles.text,{paddingLeft:6,maxWidth:'60%'}]}>{props.item.name}</Text>
            <Text style={[props.textStyle,sharedStyles.text,{paddingRight:6,maxWidth:'40%',textAlign:'right'}]}>{props.item.amount}</Text>
        </View>
    )
}
const ItemSingle = (props:{text : string,containerStyle:any,textStyle:any})=>{
    return (
        <View style={[props.containerStyle,{flexDirection:'column'}]}>
            <Text style={[sharedStyles.text,{textAlign:'center'},props.textStyle]}>{props.text}</Text>
        </View>
    )
}

export const InfoContainerDouble = (props:{title:string,items:ingredient[]})=>{
    // On the left for now, maybe always
    const context = useContext(AppContext);
    const styles = StyleSheet.create({
        container:{
            borderTopLeftRadius:16,
            backgroundColor:context?.colorScheme.background3,
        },
        title:{
            paddingTop:4,
            color:context?.colorScheme.text1
        },
        text:{
            color:context?.colorScheme.text2
        }

    })
    const list = props.items.map((elm,ind)=>{
        const item : ingredient = elm;
        return <ItemDouble containerStyle={sharedStyles.textContainer} textStyle={styles.text} key={`infoKey${ind}`} item={item}/>
    })

    return (
        <View style={[sharedStyles.container,styles.container]}>
            <Text style={[styles.title,sharedStyles.title]}>{props.title}</Text>
            {list}
        </View>
    )
}
export const InfoContainerSingle = (props:{title:string,items:string[]})=>{
    // Right yuth
    const context = useContext(AppContext);
    const styles = StyleSheet.create({
        container:{
            backgroundColor:context?.colorScheme.background3,
            borderTopRightRadius:16,
        },
        title:{
            color:context?.colorScheme.text1
        },
        text:{
            color:context?.colorScheme.text2
        }
    })
    const list = props.items.map((elm,ind)=>{return <ItemSingle containerStyle={sharedStyles.textContainer} textStyle={styles.text} key={`infoKey${ind}`} text={elm}/>})
    return (
        <View style={[sharedStyles.container,styles.container]}>
            <Text style={[sharedStyles.title,styles.title]}>{props.title}</Text>
            {list}
        </View>
    )
}

const sharedStyles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.4,
        paddingBottom: 8,
    },
    title:{
        fontSize:18,
        textAlign:'center',
        marginBottom:8
    },
    text:{
        fontSize:10,
        lineHeight:16,
    },
    textContainer:{
        flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginVertical:2,
            borderBottomColor:'#0000001a', borderBottomWidth:1,
    }
})