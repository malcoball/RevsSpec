import { useContext,useState} from "react"
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native"
import SpecTitle from "../Components/SpecTitle"
import { AppContext } from "../Data/Context/AppContext"
import AllergenContainer from "../Components/Allergen/AllergenContainer"
import {InfoContainerDouble, InfoContainerSingle} from "../Components/InfoContainer";
import { specItemCont } from "../Data/SpecDatabase/DatabaseCompile"
import { variant, variantType, variants } from "../Data/@types/types"

import SpecBuild from "../Components/SpecBuild"
const SpecScreen = (props:{title:string})=>{
    const [title,setTitle] = useState(props.title);
    const data = specItemCont.getItem.byName(title);
    const context = useContext(AppContext);

    const styles = StyleSheet.create({
        container:{
            backgroundColor:context?.colorScheme.background2,
            paddingHorizontal:28
        },
        allergenCont:{
            flexDirection:'row',
            justifyContent:'space-evenly',
            paddingTop:16,
            paddingHorizontal:64,
        },
        infoCont:{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingTop:24
        }

    })
    const changePage = (next:boolean)=>{

        // const newTitle = specItemCont.getItem.byNext(data);
        const newTitle = next ? specItemCont.getItem.byNext(data) : specItemCont.getItem.byPrevious(data)
        setTitle(newTitle.title);
    }
    const variantFunc = (vartiantType:variantType,add:boolean)=>{
        
        const newItem = specItemCont.getItem.byVariant(data,vartiantType,add);

        setTitle(newItem.title);
    }

    return (
        <ScrollView style={styles.container}>
            <SpecTitle title={data.title} leftArrowFunc={()=>{changePage(false)}} rightArrowFunc={()=>{changePage(true)}}/>
            <AllergenContainer style={styles.allergenCont} 
                vegan={{active:data.variants.vegan,         pressFunc:variantFunc}} 
                veget={{active:data.variants.vegetarian,    pressFunc:variantFunc}} 
                gluten={{active:data.variants.glutenFree,   pressFunc:variantFunc}}
                skinny={{active:data.variants.skinny,       pressFunc:variantFunc}} 
                />
            <View style={styles.infoCont}>
                <InfoContainerDouble title={"Ingredients"} items={data.ingredients}/>
                <InfoContainerSingle title={"Crockery"} items={data.crockery}/>
            </View>
            <SpecBuild builds={data.builds} image={data.image}/>
        </ScrollView>
    )
}
export default SpecScreen;