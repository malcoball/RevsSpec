import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import { AppContext } from '../../Data/Context/AppContext';
import Images from '../../Data/Images';
import { useNavigation } from '@react-navigation/native';
import {useFonts} from 'expo-font';


const Header = (props:{showBack:boolean})=>{
    const nav = useNavigation();
    const context = useContext(AppContext);
    const colours = context?.colorScheme;
    const styles = StyleSheet.create({
        container:{
            width:Dimensions.get('screen').width,
            height:92,
            backgroundColor:colours?.background1,
            flexDirection:'row',
            justifyContent:'space-around',
            paddingTop:12,
            borderColor:'#0000005a',
            borderBottomWidth:2,
            borderStyle:'solid',
            
        },
        textShared:{
            color:colours?.text1,
            textAlign:'center',
        },
        title:{
            fontSize: 20,
        },
        subTitle:{
            fontSize: 12
        },
        contentContainers:{
            height:'100%',
            justifyContent:'center'
        },
        icons :{
            width: 32, 
            height:32,
            paddingTop:12
        },
        backBtn:{
            transform:[{rotate:'180deg'}],
            height:24,
        }
    
    })
    const goBack = ()=>{
        nav.goBack();
    }
    return (
        <View style={styles.container}>
            {props.showBack?
            <TouchableOpacity style={styles.contentContainers} onPress={goBack}>
                <Image
                    style={[styles.icons,styles.backBtn]}
                    source={Images.other.arrow}
                />
            </TouchableOpacity> : <View></View>}
            
            <View style={styles.contentContainers}>
                <Text style={[styles.textShared,styles.title]}>Kitchen Specs</Text>
                <Text style={[styles.textShared,styles.subTitle]}>April 2023</Text>
            </View>
            <View style={[styles.contentContainers]}>
                <Image
                    style={styles.icons}
                    source={Images.logos.revs}
                />
            </View>
        </View>
    )
}


export default Header;