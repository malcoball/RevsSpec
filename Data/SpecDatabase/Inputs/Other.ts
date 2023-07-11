import { SpecItem } from "../DatabaseCore";
import Images from "../../Images";
import { specInput } from "../../@types/types";

const other1 : specInput = {
    title:'Whoops',
    builds:[],
    image:Images.specs.notRecog,
    crockery:[],
    ingredients:[
        {name:'nuke canon', amount:'1 each'}
    ],
    type:'other',
    variant : false,

}

const otherOut = new SpecItem(other1,1);


export default [otherOut];
