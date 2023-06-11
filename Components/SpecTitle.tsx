import {useContext} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../Data/Images";
import GlobalStyles from '../GlobalStyles';
import { AppContext } from "../Data/Context/AppContext";

const SpecTitle = (props:{title:string,leftArrowFunc:()=>void,rightArrowFunc:()=>void})=>{
    const context = useContext(AppContext)
    const styles = StyleSheet.create({
        container:{
            flexDirection:'row',
            alignItems:'center',justifyContent:'space-between',
            // paddingHorizontal:56,
            paddingTop:34
        },
        arrow:{
            width:16,height:16
        },
        arrowLeft:{
            transform:[{rotate:'180deg'}]
        },
        text:{
            fontSize:20,
            color:context?.colorScheme.text1
        },
        borderBottom:{
            borderBottomColor:context?.colorScheme.text1,
            borderBottomWidth:2,
            paddingTop:16,
            // marginHorizontal:48
        }
    })
    return (
        <View>
            <View style={styles.container}>  
                <TouchableOpacity onPress={props.leftArrowFunc}>
                    <Image
                        style={[styles.arrow,styles.arrowLeft]}
                        source={Images.other.arrow}
                    />
                </TouchableOpacity>
                <Text style={[styles.text,GlobalStyles.titleFont]}>{props.title}</Text>
                <TouchableOpacity onPress={props.rightArrowFunc}>
                <Image
                    style={[styles.arrow]}
                    source={Images.other.arrow}
                />
                </TouchableOpacity>
            </View>
            <View style={styles.borderBottom}></View>
        </View>
    )
}
export default SpecTitle;