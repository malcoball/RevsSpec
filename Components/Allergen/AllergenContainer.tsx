import {View} from 'react-native';
import AllergenIcon from '../AllergenIcon';
import { variantType,variant, allergenIcon } from '../../Data/@types/types';

const AllergenContainer = (props:{allergens:allergenIcon[],style:any})=>{
    // const {vegan,veget,gluten,skinny} = props.allergens;
    const Icons = props.allergens.map((item,index) =>{
        return item.active !== "hide" ?  
        <AllergenIcon key={item.type+ Math.random() } type={item.type} active={item.active} pressFunc={item.pressFunc}/> : <></>})
    return (
            <View key={"view"+Math.random()} style={props.style}>
                {Icons}
            </View>
    )
}
export default AllergenContainer;