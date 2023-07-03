import {useContext, useCallback} from 'react';
import {View,Image, StyleSheet, Text, FlatList} from 'react-native';
import { AppContext } from '../Data/Context/AppContext';
import Images from '../Data/Images';
import { appContextType,build } from '../Data/@types/types';
const BuildList = (props:{title:string,items:string[],context:appContextType | null,style:any})=>{
    const titleColor = props.context?.colorScheme.text3;
    const textColor = props.context?.colorScheme.text4;
    const backColor = props.context?.colorScheme.background4;
    const list = props.items.map((elm,ind)=>{return<Text 
        style={{textAlign:'center',color:textColor,paddingBottom:4}} 
        key={`listItem1.;l${ind}`}>{elm}</Text>})
    return (
        <View style={[{backgroundColor:backColor,width:'50%',paddingBottom:12},props.style]}>
            <Text style={{color:titleColor,textAlign:'center',fontSize:16,paddingVertical:16}}>{props.title}</Text>
            {list}
        </View>
    )
}
const SpecBuild = (props:{builds:build[],image:any})=>{
    const context = useContext(AppContext);
    const renderItem = useCallback(
        ({item}:any)=><BuildList key={Math.random()} title={item.title}
        context={context} items={item.items} style={styles.leftSide}/>,[]
    )
    return (
        <View style={styles.container}>
            <Image 
            source={props.image}
            style={styles.image}
            />
            {/* <View style={styles.listContainer}>
                {Builds}
            </View> */}
            <FlatList
                renderItem={renderItem}
                data={props.builds}
                numColumns={2}
                style={styles.listStyle}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:30,
    },
    image:{
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width:'100%',
        height:404
    },
    listContainer:{
        top:-12,
        flexDirection:'row',
        justifyContent:'center',
    },
    leftSide : {
        borderTopLeftRadius: 16,
    },
    rightSide : {
        borderTopRightRadius: 16,
    },
    listStyle : {
        justifyContent:'center'
    }
})
export default SpecBuild;