import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {useContext} from 'react';
import { AppContext } from '../../Data/Context/AppContext';
import Images from '../../Data/Images';


const Header = ()=>{
    const context = useContext(AppContext);
    const colours = context?.colorScheme;
    const styles = StyleSheet.create({
        container:{
            paddingTop:16,
            backgroundColor:colours?.background1,
            height:96,
            flexDirection:'row',
            justifyContent:'space-around',
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
            height:32
        }
    
    })
    return (
        <View style={[styles.container,{width:Dimensions.get('screen').width}]}>
            <View style={styles.contentContainers}>
                <Image
                    style={styles.icons}
                    source={Images.other.hamburger.open}
                />
            </View>
            <View style={styles.contentContainers}>
                <Text style={[styles.textShared,styles.title]}>Kitchen Specs</Text>
                <Text style={[styles.textShared,styles.subTitle]}>April 2023</Text>
            </View>
            <View style={styles.contentContainers}>
                <Image
                    style={styles.icons}
                    source={Images.logos.revs}
                />
            </View>
        </View>
    )
}


export default Header;