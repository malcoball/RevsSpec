import {useContext} from 'react';
import { AppContext } from '../Data/Context/AppContext';
import { Image, Pressable, Text, View } from "react-native";
import { variant, variantType } from '../Data/@types/types';
import Images from "../Data/Images"
const VariantIcon = (props:{type:variantType,active:variant,pressFunc:(vartiantType:variantType,add:boolean)=>void})=>{
    const context = useContext(AppContext);
    const info = {text : 'Null',image:Images.allergen.null};
    switch(props.type){
        case "vegan" : info.text = 'Vegan';info.image = Images.allergen.vegan; break;
        case "vegetarian" : info.text = 'Veg';info.image = Images.allergen.veget; break;
        case "glutenFree" : info.text = 'Gluten Free';info.image = Images.allergen.gluten; break;
        case "skinny" : info.text = 'Skinny';info.image = Images.allergen.null; break;
        case "chilli" : info.text = 'Chilli';info.image = Images.allergen.null; break;
        case "veggieChilli" : info.text = 'ChilliVeg';info.image = Images.allergen.null; break;
        case "egg" : info.text = 'Egg';info.image = Images.allergen.null; break;
        default : console.log(props.type, " not recognised");
    }
    
    const opacity = props.active !== "active" ? 0.2 : 1;
    const clickAdd = props.active === "active" ? false : true;
    return (
        <View >
            {props.active !== "hide" ? <Pressable style={{opacity:opacity,alignItems:'center'}} onPress={()=>{props.pressFunc(props.type,clickAdd)}}><Image
                style={{width:24,height:24}}
                source={info.image}
            />
            <Text style={{color:context?.colorScheme.text1,textAlign:'center'}}>{info.text}</Text>
            </Pressable> : <></>}
        </View>
        
    )
}
export default VariantIcon;