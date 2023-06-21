import { useState } from "react"
import { Image, View, Text, StyleSheet } from "react-native"

const NavMenuItem = (props:{color:any,title:string,image:any,imageSize:number,height:number})=>{
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
    const [data] = useState([
        'item1','item2','item3'
    ])
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={props.image}
            />
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}
export default NavMenuItem