import {View} from 'react-native';
import AllergenIcon from '../AllergenIcon';
import { variantType,variant, allergenIcon } from '../../Data/@types/types';

const AllergenContainer = (props:{allergens:allergenIcon[],style:any})=>{
    // const {vegan,veget,gluten,skinny} = props.allergens;
    const Icons = props.allergens.map(item =>{
        return item.active !== "hide" ?  
        <AllergenIcon key={Math.random()} type={item.type} active={item.active} pressFunc={item.pressFunc}/> : <></>})
    return (
            <View style={props.style}>
                {Icons}
            </View>
    )
}
export default AllergenContainer;