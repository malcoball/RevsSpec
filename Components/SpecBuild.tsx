import {useContext} from 'react';
import {View,Image, StyleSheet, Text} from 'react-native';
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
    const Builds = props.builds.map((elm,ind)=>{
        const style = ind === 0 ? styles.leftSide : styles.rightSide;
        return <BuildList key={`buildList${Math.random()}`} title={elm.title} context={context} items={elm.items} style={style}/>})
    return (
        <View style={styles.container}>
            <Image 
            source={props.image}
            style={styles.image}
            />
            <View style={styles.listContainer}>
                {Builds}
            </View>
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
    }
})
export default SpecBuild;