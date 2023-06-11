import {View} from 'react-native';
import AllergenIcon from '../AllergenIcon';
import { variantType,variant } from '../../Data/@types/types';
type allergenIcon = {
    active : variant,
    pressFunc : (vartiantType:variantType,add:boolean)=>void,
}
const AllergenContainer = (props:{vegan:allergenIcon,veget:allergenIcon,gluten:allergenIcon,skinny:allergenIcon,style:any})=>{
    const {vegan,veget,gluten,skinny} = props;
    return (
            <View style={props.style}>
                <AllergenIcon type="vegan" active={vegan.active}
                    pressFunc={vegan.pressFunc}
                />
                <AllergenIcon type="glutenFree" active={gluten.active}
                    pressFunc={gluten.pressFunc}
                />
                <AllergenIcon type="vegetarian" active={veget.active}
                    pressFunc={veget.pressFunc}
                />
                <AllergenIcon type="skinny" active={skinny.active}
                    pressFunc={skinny.pressFunc}
                />
                
            </View>
    )
}
export default AllergenContainer;