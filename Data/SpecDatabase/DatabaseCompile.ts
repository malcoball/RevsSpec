import { ingredient, specItem, variantType } from "../@types/types";
import Burgers  from "./Inputs/Burgers";
import Desserts from "./Inputs/Desserts";
import Grazers from "./Inputs/Grazers";
import Mains from "./Inputs/Mains";
import Other from './Inputs/Other';
import Pizzas  from "./Inputs/Pizzas";
import Sandwiches from "./Inputs/Sandwiches";
import Sharers from "./Inputs/Sharers";
import Sides from "./Inputs/Sides";
import Wraps from "./Inputs/Wraps";
import { StringMethods } from "../StringMethods";

let DataBase = [...Burgers,...Desserts,...Grazers,...Mains,...Other,...Pizzas,...Sandwiches,...Sharers,
...Sides,...Wraps];

export const specItemCont = {
    sort:{
        index: ()=>{
            console.log(DataBase);
            let dataNew = [...DataBase];
            dataNew.forEach((elm,ind)=>{
                elm.index = ind;
            })
            DataBase = dataNew;
            // console.log(DataBase);
        },
        byOrder:{
            alphabet : ()=>{
                const data = [...DataBase];
                for (let i = 0; i < data.length;i++){
                    for (let j = 0; j < data.length; j++){
                        if (data[i].title.charAt(0) > data[j].title.charAt(1)){
                            console.log("swap : ",data[i]," for : ",data[j])
                            let temp = data[i];
                            data[i] = data[j];
                            data[j] = temp;
                        }
                    }
                }
                DataBase = data;
                console.log(data);
            }
        }
    },
    getItem:{
        byName:(name:string):specItem=> {
            name = StringMethods.case.capitalizeFirstLetter(name);
            if (name.charAt(name.length) === " ") name.slice(0,name.length-1);
            for (let i = 0; i < DataBase.length; i++){
                if (name === DataBase[i].title){
                    return DataBase[i];
                } 
            }
            // console.log(DataBase);
            // console.error(name, " : not recognised");
            console.error(`'${name}' not recognised`);
            return DataBase[DataBase.length-1];
        },
        byNext:(currentItem:specItem):specItem=>{

            const num = currentItem.index;

            // There's an error component at the end, hence the length - 1
            let next = num === DataBase.length-1 ? 0 : num + 1 ;
            return DataBase[next];
        },
        byPrevious:(currentItem:specItem):specItem=>{

            const num = currentItem.index;

            // There's an error component at the end, hence the length - 1
            let next = num === 0 ? DataBase.length - 1 : num - 1 ;
            return DataBase[next];
        },
        byVariant:(currentItem:specItem,variant:variantType,add:boolean):specItem=>{
            const title = currentItem.title;
            let variantName = "";
            switch(variant){
                case "glutenFree" : variantName = "GF"; break;
                case "skinny" : variantName     = "Skinny"; break;
                case "vegan" : variantName      = "Vegan"; break;
                case "vegetarian": variantName  = "V"; break;
            }
            let out = "";
            if (add === true) {
                // Adding it
                out = title + " "+variantName;
                // // Swap Vegan and GF
                let strNew = title + " " + variantName;
                if ((variantName === "GF")&& (title.includes("Vegan"))){
                    out = StringMethods.swap.byStrings(strNew,'Vegan','GF');
                } else 
                if ((variantName === "Skinny") && (title.includes("Vegan"))){
                    out = StringMethods.swap.byStrings(strNew,'Vegan','Skinny');
                }
            } else {
                // Remove it
                const split = title.split(" ");
                split.forEach((name,ind) =>{
                    if (name !== variantName){
                        if (ind !== split.length-1){
                            out += `${name} `;
                        } else {
                            out += `${name}`;
                        }
                    }
                })
                if (out.slice(-1) === " "){
                    out = out.slice(0,out.length-1); // Not sure why this is needed but there was a right gay problem
                }
            }

            return specItemCont.getItem.byName(out);

        },
        all:():void=>{
            // console.log(DataBase);
        }
    },
}
specItemCont.sort.index();
// specItemCont.sort.byOrder.alphabet();