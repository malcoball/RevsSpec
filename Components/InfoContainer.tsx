import {useContext} from 'react';
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { AppContext } from '../Data/Context/AppContext';
import { ingredient } from '../Data/@types/types';

const ItemDouble = (props:{item:ingredient,style:any},)=>{
    return (
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
            <Text style={[props.style,sharedStyles.text,{paddingLeft:6}]}>{props.item.name}</Text>
            <Text style={[props.style,sharedStyles.text,{paddingRight:6}]}>{props.item.amount}</Text>
        </View>
    )
}
const ItemSingle = (props:{text : string,style:any})=>{
    return (
        <View>
            <Text style={[sharedStyles.text,{textAlign:'center'},props.style]}>{props.text}</Text>
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
        return <ItemDouble style={styles.text} key={`infoKey${ind}`} item={item}/>
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
    const list = props.items.map((elm,ind)=>{return <ItemSingle style={styles.text} key={`infoKey${ind}`} text={elm}/>})
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
        lineHeight:16
    }
})