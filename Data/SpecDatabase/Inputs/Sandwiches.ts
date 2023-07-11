import { specInput } from "../../@types/types";
import Images from "../../Images";
import { Crockery } from "../Crockery";
import { SpecItem } from "../DatabaseCore";
import { Ingredients } from "../Ingredients";
import SpecTitles from "../Titles";

const chickenBacon : specInput = {
    title:SpecTitles.sandwhich.chickenBacon,
    builds:[
        {title:'Prep',items:[
            'Cut the sourdough slices (not too thick)',
            '4 thin slices of plum tomato'
        ]},
        {title:'Cooking',items:[
            'Heat the chicken',
            'Mix the chicken with 10g of mayo and pinch of black pepper',
            'Re-heat the bacon in the oven'
        ]},
        {title:'Plating',items:[
            'Spread the mayo on each piece of bread',
            'Cos Lettuce',
            '4 thin slices of plum tomato',
            'Mayo chicken',
            '3 pieces of crispy bacon (must be hot)',
            'Lid',
            'Cut in to half on the angle',
            'Fix in place with knotted skewers',
            'Serve on a blue rimmed plate with coleslaw'
        ]}
    ],
    image:Images.specs.sandwich.chickenBacon,
    crockery:[
        Crockery.plate.blueRim,
        '2 x '+Crockery.stick.small
    ],
    ingredients:[
        Ingredients.other.sourdough.sourdough120,
        Ingredients.sauce.mayo.mayo35,
        Ingredients.chicken.meat.pulledDouble,
        Ingredients.seasoning.crackedBlackPepper,
        Ingredients.other.bacon.bacon3Slice,
        Ingredients.veg.tomato.plum.plum40,
        Ingredients.veg.lettuce.cos.cos40,
        Ingredients.side.coleslaw.md.mayo
    ],
    type:'sandwich',
    variant : false,

}
const fishFinger : specInput = {
    title:SpecTitles.sandwhich.fishFinger,
    builds:[
        {title:'Cooking',items:[
            'Deep fry the fish fingers for 4 minutes. Drain well.',
            'Toast the bun'
        ]},
        {title:'Plating',items:[
            'Build : ',
            'Tartare',
            'Cos Lettuce',
            '5 fish fingers',
            'Place the lid on top at and angle',
            'Fix with a knotted skewer',
            'Serve on a blue rimmed plate with coleslaw'
        ]}
    ],
    image:Images.specs.sandwich.fishFinger,
    crockery:[
        Crockery.plate.blueRim,
        Crockery.stick.small
    ],
    ingredients:[
        Ingredients.burger.bun.standard,
        Ingredients.fish.fingers.fingers5,
        Ingredients.veg.lettuce.cos.cos20,
        Ingredients.sauce.tartare.tartare20,
        Ingredients.side.coleslaw.md.mayo
    ],
    type:'sandwich',
    variant : false,

}
const sandwich1 = new SpecItem(chickenBacon,1);
const sandwich2 = new SpecItem(fishFinger,1);

export default [sandwich1,sandwich2];