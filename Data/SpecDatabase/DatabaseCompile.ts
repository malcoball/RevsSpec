import { ingredient, specItem,specType, variantType } from "../@types/types";
import Brunch from './Inputs/Brunch';
import Burgers  from "./Inputs/Burgers";
import Desserts from "./Inputs/Desserts";
import Grazers from "./Inputs/Grazers";
import Kids from "./Inputs/Kids";
import Mains from "./Inputs/Mains";
import Other from './Inputs/Other';
import Pizzas  from "./Inputs/Pizzas";
import Sandwiches from "./Inputs/Sandwiches";
import Sharers from "./Inputs/Sharers";
import Sides from "./Inputs/Sides";
import Wraps from "./Inputs/Wraps";
import Prep from "./Inputs/Prep";
import { StringMethods } from "../StringMethods";


let DataBase = [...Brunch,...Burgers,...Desserts,...Grazers,...Kids,...Mains,...Other,...Sandwiches,
...Sides,...Pizzas,...Wraps,...Sharers,...Prep];

const typeObj = { // Mostly used to group titles into categories.
    burger : <string[]>[],
    grazer : <string[]>[],
    kids :<string[]>[],
    dessert :<string[]>[],
    brunch :<string[]>[],
    main:<string[]>[],
    pizza : <string[]>[],
    sandwich:<string[]>[],
    prep:<string[]>[],
    party:<string[]>[],
    sharer:<string[]>[],
    vegetarian:<string[]>[],
    glutenFree:<string[]>[],
    side:<string[]>[],
    wrap:<string[]>[],
    vegan:<string[]>[],
    skinny:<string[]>[],
    other:<string[]>[]
}

export const specItemCont = {
    sort:{
        index: ()=>{
            // console.log(DataBase);
            let dataNew = [...DataBase];
            dataNew.forEach((elm,ind)=>{
                elm.index = ind;
            })
            return dataNew;
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
                return data;
            }
        },
        intoCategories:(...excludes:variantType[])=>{
            const out = { // Mostly used to group titles into categories.
                burger : <string[]>[],
                grazer : <string[]>[],
                kids :<string[]>[],
                dessert :<string[]>[],
                brunch :<string[]>[],
                main:<string[]>[],
                pizza : <string[]>[],
                sandwich:<string[]>[],
                prep:<string[]>[],
                party:<string[]>[],
                sharer:<string[]>[],
                vegan:<string[]>[],
                vegetarian:<string[]>[],
                glutenFree:<string[]>[],
                side:<string[]>[],
                wrap:<string[]>[],
                skinny:<string[]>[],
                other:<string[]>[]
            }


            DataBase.forEach((item) =>{
                let propTargets  = typeof(item.type) === 'string' ? [item.type] : item.type; // Converts them into arrays
                let skip = false;
                propTargets.forEach((propTarget)=>{
                    excludes.forEach(exclude=>{
                        if (propTarget === exclude) skip = true;
                    })
                })
                if (skip === false){
                    console.log("prop targets : ",propTargets);
                    console.log("Title : ",item.title);
                    propTargets.forEach((item2)=>{
                        let propTarget = item2 as keyof typeof out;
                        out[propTarget].push(item.title);
                    })
                }
            })
            return out;
        }
    },
    getItem:{
        byName:(name:string):specItem=> {
            // name = StringMethods.case.capitalizeFirstLetter(name);
            if (name.charAt(name.length) === " ") name.slice(0,name.length-1); // Trim down extra white space, not sure why this is needed
            const inp = name.toLowerCase();
            for (let i = 0; i < DataBase.length; i++){
                 const match = DataBase[i].title.toLowerCase();
                if (inp === match){
                    return DataBase[i];
                } 
            }
            // console.log(DataBase);
            // console.error(name, " : not recognised");
            console.error(`'${name}' not recognised`);
            return DataBase[DataBase.length-1];
        },
        byNext:(currentItem:specItem,ignoreVariants:boolean):specItem=>{

            const num = currentItem.index;
            const title = currentItem.title;

            // There's an error component at the end, hence the length - 1
            let next = num === DataBase.length-1 ? 0 : num + 1 ;
            if (ignoreVariants === true){
                while (DataBase[next].title.includes(title)){
                    next ++;
                }
            }
            return DataBase[next];
        },
        byPrevious:(currentItem:specItem,ignoreVariants:boolean):specItem=>{

            const num = currentItem.index;
            const title = currentItem.title;

            // There's an error component at the end, hence the length - 1
            let next = num === 0 ? DataBase.length - 1 : num - 1 ;
            if (ignoreVariants === true){
                while (DataBase[next-1].title.includes(DataBase[next-2].title)){
                    next --;
                }
            }
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
        all:{
            name:{
                string : (...exclude:string[]) : string[] =>{
                    const out : string[] = [];
                    DataBase.forEach((elm)=>{
                        const titleIn = elm.title.toLowerCase();
                        let match = false;
                        // let compare = exclude[0].toLowerCase();
                        // if (titleIn.includes(compare) === true) match = true;
                        // compare = exclude[1].toLowerCase();
                        // if (titleIn.includes(compare) === true) match = true;
                        for (let i = 0; i<exclude.length; i++){
                            const compare = exclude[i].toLowerCase();
                            if (titleIn.includes(compare) === true) match = true;
                        }
                        if (match === false) out.push(elm.title);

                    });
                    return out;
                },
                objTypes : (exclude:string[] = [])=>{
                    const out = {...typeObj};
                    DataBase.forEach(item=>{
                        const type  = typeof(item.type) === 'string' ? item.type : item.type[0];
                        const objInd = type as keyof typeof typeObj;
                        if (typeof(out[objInd]) === "undefined") console.log("objInd : ",objInd);
                        out[objInd].push(item.title);
                    })
                    return out;
                }
            }
        },
        category:{
            title: (typeObjProp:specType)=>{
                const out :string[] = []
                
                return ['1','2','3']
            }
        }
    },
    multiply:{
        ingredients :{
            multiplyIngredients(ingredients:ingredient[],amount:number|string):ingredient[]{
                // Turn ingredient amounts:string in numbers

                let amounts = [...ingredients];
                let mutlipleAmount = typeof(amount) === "string" ? parseInt(amount) : amount;
                let out :ingredient[] = [];
                amounts.forEach(elm=>{
                    out.push(this.multiplyIngredient(elm,mutlipleAmount));
                })
                return out;
            },
            multiplyIngredient(ingredient:ingredient|string,multiplyAmount:number):ingredient{
                // Extract the numbers, multiply them
                // let str = ingredient.amount;
                let name = typeof(ingredient) === "string" ? "" : ingredient.name;
                let str = typeof(ingredient) === "string" ? ingredient : ingredient.amount;
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
                return {amount : out,name : name};
            }
        }
    }
}
specItemCont.sort.index();
// specItemCont.sort.intoCategories();

// specItemCont.sort.byOrder.alphabet();