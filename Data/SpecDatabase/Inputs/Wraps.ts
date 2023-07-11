import { specInput } from "../../@types/types";
import Images from "../../Images";
import { Crockery } from "../Crockery";
import { SpecItem } from "../DatabaseCore";
import { Ingredients } from "../Ingredients";
import SpecTitles from "../Titles";

const avoHalloumi : specInput = {
    title:SpecTitles.wrap.avo,
    builds:[
        {title:'Prep',items:[
            'Cut the pepper in to strips',
            'Cut the cucumber in to chunks',
            'Dice the plum tomatoes',
        ]},
        {title:'Cooking',items:[
            'Warm the wrap in the microwave for 10 seconds',
            'Roast the red pepper',
            'Deep fry the halloumi until golden, crispy and hot in the middle'
        ]},
        {title:'Plating',items:[
            'Build the wrap : ',
            'Sriracha mayo',
            'Cos lettuce',
            'Roasted red pepper',
            'Cucumber',
            'Tomato Salsa',
            'Avocado',
            'Diced Tomatoes',
            'Halloumi fries',
            'Coriander',
            'Roll the wrap',
            'Cut in half on an angle',
            'Use knotted skewer to position in place as per the photo',
            'Serve on a blue rimmed plate',
            'Place coleslaw on plate'
        ]}
    ],
    image:Images.specs.wrap.avo,
    crockery:[
        Crockery.plate.blueRim,
        "2 x " + Crockery.stick.small
    ],
    ingredients:[
        Ingredients.other.tortilla,
        Ingredients.other.halloumi,
        Ingredients.veg.lettuce.cos.cos20,
        Ingredients.veg.tomato.plum.plum20,
        Ingredients.veg.avo.avocado20,
        Ingredients.garnish.leaf.coriander,
        Ingredients.sauce.salsa.salsa20,
        Ingredients.sauce.mayo.mayo20,
        Ingredients.veg.redPepper.pepper20,
        Ingredients.veg.cucumber.cucumber10,
        Ingredients.side.coleslaw.md.mayo
    ],
    type:'wrap',
    variant : false,

}
const friedChicken : specInput = {
    title:SpecTitles.wrap.chicken,
    builds:[
        {title:'Cooking',items:[
            'Cook the fried chicken as per the spec, UPDATE THIS PLS',
            'Warm the wrap for 10 seconds in the microwave'
        ]},
        {title:'Plating',items:[
            'Zig zag BBQ sauce across the wrap',
            'Zig zag sour cream sauce across the wrap',
            'Cos lettuce',
            'Sliced tomato',
            '3 chicken strips',
            'roll the wrap, cut in half on angle and use knotted skewers to position in place as per the photo',
            'Serve on a blue rimmed plate',
            'Place on coleslaw on plate'
        ]}
    ],
    image:Images.specs.wrap.chicken,
    crockery:[
        Crockery.plate.blueRim,
        Crockery.stick.small
    ],
    ingredients:[
        Ingredients.other.tortilla,
        Ingredients.chicken.meat.goujon.strips3,
        Ingredients.sauce.bbq.bbq20,
        Ingredients.sauce.mayo.mayo20,
        Ingredients.veg.lettuce.cos.cos20,
        Ingredients.veg.tomato.plum.plum30,
        Ingredients.side.coleslaw.md.mayo
    ],
    type:'wrap',
    variant : false,

}
const friedChickenVe : specInput = {
    title:SpecTitles.wrap.chickenVe,
    builds:[
        {title:'Cooking',items:[
            'Cook the fried chicken as per the spec, UPDATE THIS PLS',
            'Warm the wrap for 10 seconds in the microwave'
        ]},
        {title:'Plating',items:[
            'Zig zag BBQ sauce across the wrap',
            'Zig zag sour cream sauce across the wrap',
            'Cos lettuce',
            'Sliced tomato',
            '3 chicken strips',
            'roll the wrap, cut in half on angle and use knotted skewers to position in place as per the photo',
            'Serve on a blue rimmed plate',
            'Place on coleslaw on plate'
        ]}
    ],
    image:Images.specs.wrap.chicken,
    crockery:[
        Crockery.plate.blueRim,
        Crockery.stick.small
    ],
    ingredients:[
        Ingredients.other.tortilla,
        Ingredients.chicken.nonMeat.goujon.strips3,
        Ingredients.sauce.bbq.bbq20,
        Ingredients.sauce.mayo.mayo20,
        Ingredients.veg.lettuce.cos.cos20,
        Ingredients.veg.tomato.plum.plum30,
        Ingredients.side.coleslaw.md.mayo
    ],
    type:['wrap','vegan'],
    variant : true,

}

const wrap1 = new SpecItem(avoHalloumi,1);
const wrap2 = new SpecItem(friedChicken,1,['vegan','show']);
const wrap3 = new SpecItem(friedChickenVe,1,['vegan','active']);

export default [wrap1,wrap2,wrap3];