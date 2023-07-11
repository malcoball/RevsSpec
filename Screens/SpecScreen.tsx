import { useContext,useEffect,useState} from "react"
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native"
import SpecTitle from "../Components/SpecTitle"
import { AppContext } from "../Data/Context/AppContext"
import AllergenContainer from "../Components/Allergen/AllergenContainer"
import {InfoContainerDouble, InfoContainerSingle} from "../Components/InfoContainer";
import { specItemCont } from "../Data/SpecDatabase/DatabaseCompile"
import { variant, variantType, variants, allergenIcon } from "../Data/@types/types"
import { useSwipe } from "../Components/Hooks/useSwipe"

import SpecBuild from "../Components/SpecBuild"
import PrepYield from "../Components/PrepYield"
const SpecScreen = (props:{title:string})=>{
    const [title,setTitle] = useState(props.title);
    const data = specItemCont.getItem.byName(title);
    const [yieldData,setYield] = useState("1")
    const [yieldAmount,setYieldAmount] = useState(data.yieldAmount);
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
        const newTitle = next ? specItemCont.getItem.byNext(data,true) : specItemCont.getItem.byPrevious(data,true)
        setTitle(newTitle.title);
    }
    const variantFunc = (vartiantType:variantType,add:boolean)=>{
        
        const newItem = specItemCont.getItem.byVariant(data,vartiantType,add);

        setTitle(newItem.title);
    }
    const onSwipeLeft = ()=>{
        changePage(true);
    }
    const onSwipeRight = ()=>{
        changePage(false);
    }
    const {onTouchStart,onTouchEnd} = useSwipe(onSwipeLeft,onSwipeRight,6);


    const ingredients = specItemCont.multiply.ingredients.multiplyIngredients(data.ingredients,yieldData);
    // let yieldAmount = specItemCont.multiply.ingredients.multiplyIngredient(data.yieldAmount+"",parseInt(yieldData));
    const variants :allergenIcon[] = [
        {type:'vegan',pressFunc:variantFunc,active:data.variants.vegan},
        {type:'vegetarian',pressFunc:variantFunc,active:data.variants.vegetarian},
        {type:'glutenFree',pressFunc:variantFunc,active:data.variants.glutenFree},
        {type:'skinny',pressFunc:variantFunc,active:data.variants.skinny},
        {type:'chilli',pressFunc:variantFunc,active:data.variants.chilli},
        {type:'veggieChilli',pressFunc:variantFunc,active:data.variants.veggieChilli},
        {type:'egg',pressFunc:variantFunc,active:data.variants.egg},
    ]
    useEffect(()=>{
        setYield("1");
    },[title])
    useEffect(()=>{
        let yieldNew = yieldData === "1" ? data.yieldAmount : specItemCont.multiply.ingredients.multiplyIngredient(data.yieldAmount+"",parseInt(yieldData)).amount;
        setYieldAmount(yieldNew);
    },[title,yieldData])


    return (
        <ScrollView style={styles.container} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <SpecTitle title={data.title} leftArrowFunc={()=>{changePage(false)}} rightArrowFunc={()=>{changePage(true)}}/>
            {/* <AllergenContainer style={styles.allergenCont} allergens={variants}/> */}
            <View style={styles.infoCont}>
                <InfoContainerDouble title={"Ingredients"} items={ingredients}/>

                {data.type=== "prep" ? <PrepYield yieldTotal={yieldAmount} multiply={{data:yieldData,setData:setYield}}/> : 
                <InfoContainerSingle title={"Crockery"} items={data.crockery}/>}
                
            </View>
            <SpecBuild builds={data.builds} image={data.image}/>
        </ScrollView>
    )
}
export default SpecScreen;