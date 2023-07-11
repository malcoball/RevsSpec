import { ingredient, specType, specItem, build, variant,variants,specInput } from "../@types/types";
import { StringMethods } from "../StringMethods";

let index = 0;
const specItems :any[]  = [];
const variantDefault : variants = {vegan:'hide',vegetarian:'hide',glutenFree:'hide',skinny:'hide',chilli:'hide',veggieChilli:'hide',egg:'hide',truffle:'hide',chicken:'hide'}
type variantKey = keyof variants;
export class SpecItem {
    title : string;
    type : specType[] | specType;
    ingredients : ingredient[];
    yieldAmount : string | number;
    crockery : string[];
    image : string;
    variants : variants;
    builds : build[];
    index : number;
    variant:boolean;
    constructor(specInfo:specInput,yieldAmount:string | number,...variantsInp:[variantKey,variant][]){
    // constructor(title:string,ingredients:ingredient[],amount:number,type:specType[] | specType,crockery : string[],image : string,builds: build[],...variantsInp:[variantKey,variant][]){
        const {title,ingredients,crockery,image,builds,type,variant} = specInfo;
        this.title = StringMethods.case.capitalizeFirstLetter(title),
        this.yieldAmount = yieldAmount;
        this.ingredients = ingredients,
        this.crockery = crockery,
        this.image = image,
        this.builds = builds,
        this.variants = {...variantDefault},
        this.type = type;
        this.index = ++index; // Keep track easier, this is a very basic start though. Might even do this manually
        variantsInp.forEach(elm=>{
            this.variants[elm[0]] = elm[1];
        })
        this.variant = variant;
        specItems.push(this); // Is this needed?
    };
    multiplyIngredients(ingredients:ingredient[],amount:number):ingredient[]{
        // Turn ingredient amounts:string in numbers
        let amounts = [...ingredients];
        let out :ingredient[] = [];
        amounts.forEach(elm=>{
            out.push(this.multiplyIngredient(elm,amount));
        })
        return out;
    }
    multiplyIngredient(ingredient:ingredient,multiplyAmount:number):ingredient{
        // Extract the numbers, multiply them
        let str = ingredient.amount;
        let multiplies :string[] = []; // Holds all the numbers
        const length = str.length;
        let num = "";
        let strOut = "";
        for (let i = 0; i < length; i++){
            const target = str.charAt(i);
            const next = str.charAt(i+1);
            if (isNaN(parseInt(target)) === false){
                num += target;
                if (isNaN(parseInt(next)) === true){ // Finished
                    let numMulti = Math.floor((parseInt(num) * multiplyAmount));
                    multiplies.push(numMulti + "");
                    num = "";
                }
            } else {
                strOut += target;
                if ((next === "") || (typeof(parseInt(next)) === "number")){
                    multiplies.push(strOut);
                    strOut = "";
                }
            }
        }
        let out = "";
        multiplies.forEach(element => {
            out+= element
        });
        return {amount : out,name : ingredient.name};
    }
}