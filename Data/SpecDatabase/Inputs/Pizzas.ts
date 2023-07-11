import SpecTitles from "../Titles";
import { Ingredients } from "../Ingredients";
import { specInput } from "../../@types/types";
import Images from "../../Images";
import { Crockery } from "../Crockery";
import { SpecItem } from "../DatabaseCore";
import { specItemCont } from "../DatabaseCompile";

const Titles = SpecTitles.pizza;

const pizzaPlate = ['Serve on a pizza paddle','Place pizza wheel under'];
const pizzaPlateGF = ['Serve on a pizza paddle','Place pizza wheel under','GF flag'];
const pizzaPlateSkinny = ['Serve on a pizza paddle','Place pizza wheel under','Side salad in corner of plate'];

const crockery = {
    whole : {
        normal : [Crockery.pizza.paddle,Crockery.cutlery.pizza],
        GF : [Crockery.pizza.plate,Crockery.cutlery.pizza,Crockery.cutlery.pizza],
        vegan : [Crockery.pizza.paddle,Crockery.cutlery.pizza,Crockery.stick.vegan],
        veganGF : [Crockery.pizza.plate,Crockery.cutlery.pizza,Crockery.stick.vegan],
    },
    skinny : ['Speckled Rectangular Plate','Triangle Bowl','Small Pizza Wheel'],
}

const marg : specInput = {
    title: Titles.marg.standard.full,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the dough to 12 inches',
            'Pizza sauce',
            'Basil (torn)',
            'Mozzarella',
            'Bake for 2-3 minutes, turning 1/2 way through',
        ]},
        {title:'Plating',items:pizzaPlate}
    ],
    image:Images.specs.pizzas.margherita,
    crockery:crockery.whole.normal,
    ingredients:[
        Ingredients.dough.full,
        Ingredients.other.flour.flour10,
        Ingredients.sauce.pizza.pizza70,
        Ingredients.garnish.leaf.basil,
        Ingredients.topping.pizza.mozzarella.mozzarella70
    ],
    type:'pizza',
    variant : false,

}
const margSkinny : specInput = {
    title: Titles.marg.standard.skinny,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the half dough 6” elongated rectangle (same size as the plate).',
            'Pizza sauce',
            'Basil (torn)',
            'Mozzarella',
            'Bake for 2-3 minutes, turning 1/2 way through',
        ]},
        {title:'Plating',items:[
            ...pizzaPlateSkinny
        ]}
    ],
    image:Images.specs.pizzas.margSkinny,
    crockery:crockery.skinny,
    ingredients:[
        Ingredients.dough.half,
        Ingredients.other.flour.flour5,
        Ingredients.sauce.pizza.pizza35,
        Ingredients.garnish.leaf.basilHalf,
        Ingredients.topping.pizza.mozzarella.mozzarella35,
        Ingredients.side.houseSalad
    ],
    type:['skinny','pizza'],
    variant : true,

}
const margVe : specInput = {
    title: Titles.marg.standard.full,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the dough to 12 inches',
            'Pizza sauce',
            'Basil (torn)',
            'Mozzarella',
            'Bake for 2-3 minutes, turning 1/2 way through',
        ]},
        {title:'Plating',items:pizzaPlate}
    ],
    image:Images.specs.pizzas.margherita,
    crockery:crockery.whole.vegan,
    ingredients:[
        Ingredients.dough.full,
        Ingredients.other.flour.flour10,
        Ingredients.sauce.pizza.pizza70,
        Ingredients.garnish.leaf.basil,
        Ingredients.topping.pizza.veganCheddar.vegan70
    ],
    type:'pizza',
    variant : true,

}
const margGF : specInput = {
    title: Titles.marg.GF.standard,
    builds:[
        {title:'Pizza Build',items:[
            'Place the GF pizza base on a clean tray',
            'Pizza sauce',
            'Basil (torn)',
            'Grated Mozzarella',
            'Bake in the oven for 2-3 mins turning 1/2 way through.',
            'Serve on a pizza plate with a pizza wheel and a GF flag.'
        ]}
    ],
    image:Images.specs.pizzas.margGF,
    crockery:crockery.whole.GF,
    ingredients:[
        Ingredients.dough.gf,
        Ingredients.sauce.pizza.pizza60,
        Ingredients.garnish.leaf.basil,
        Ingredients.topping.pizza.mozzarella.mozzarella60
    ],
    type:['glutenFree','pizza'],
    variant : true,

}
const margGFVe : specInput = {
    title: Titles.marg.GF.vegan,
    builds:[
        {title:'Pizza Build',items:[
            'Place the GF pizza base on a clean tray',
            'Pizza sauce',
            'Basil (torn)',
            'Grated Vegan Cheese',
            'Bake in the oven for 2-3 mins turning 1/2 way through.',
            'Serve on a pizza plate with a pizza wheel and a GF flag.'
        ]}
    ],
    image:Images.specs.pizzas.margGF,
    crockery:crockery.whole.veganGF,
    ingredients:[
        Ingredients.dough.gf,
        Ingredients.sauce.pizza.pizza60,
        Ingredients.garnish.leaf.basil,
        Ingredients.topping.pizza.veganCheddar.vegan60
    ],
    type:['glutenFree','pizza','vegan'],
    variant : true,

}

const buffaloChicken : specInput = {
    title: Titles.buffaloChicken.standard.full,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the dough to 12 inches',
            'Pizza sauce',
            'Sweetcorn',
            'Red onion',
            'Roasted red pepper',
            'Mozzarella',
            'Bake for 2-3 minutes, turning 1/2 way through',
            'Toss the cooked chicken in the hot sauce and cut in to small pieces',
            'Chicken pieces',
            'Crispy onions',
            'Jalapeños',
            'Caesar dressing zig zag'
        ]},
        {title:'Plating',items:pizzaPlate}
    ],
    image:Images.specs.pizzas.buffaloChicken,
    crockery:crockery.whole.normal,
    ingredients:[
        Ingredients.dough.full,
        Ingredients.other.flour.flour10,
        Ingredients.sauce.pizza.pizza70,
        Ingredients.topping.pizza.mozzarella.mozzarella70,
        Ingredients.topping.pizza.veg.redOnion,
        Ingredients.topping.pizza.veg.redPepper,
        Ingredients.topping.pizza.veg.sweetcorn,
        Ingredients.chicken.meat.goujon.strips2,
        Ingredients.sauce.franks,
        Ingredients.sauce.dressing.caesar,
        Ingredients.topping.pizza.veg.friedOnion,
        Ingredients.topping.pizza.veg.jalapenos
    ],
    type:'pizza',
    variant : false,

}
const buffaloChickenVeggie : specInput = {
    title: Titles.buffaloChicken.veggie.full,
    builds:buffaloChicken.builds,
    image:Images.specs.pizzas.buffaloChicken,
    crockery:crockery.whole.vegan,
    ingredients:[
        Ingredients.dough.full,
        Ingredients.other.flour.flour10,
        Ingredients.sauce.pizza.pizza70,
        Ingredients.topping.pizza.mozzarella.mozzarella70,
        Ingredients.topping.pizza.veg.redOnion,
        Ingredients.topping.pizza.veg.redPepper,
        Ingredients.topping.pizza.veg.sweetcorn,
        Ingredients.chicken.nonMeat.goujon.strips2,
        Ingredients.sauce.franks,
        Ingredients.sauce.dressing.caesar,
        Ingredients.topping.pizza.veg.friedOnion,
        Ingredients.topping.pizza.veg.jalapenos
    ],
    type:['pizza','vegetarian'],
    variant : true,

}
const buffaloChickenSkinny : specInput = {
    title: Titles.buffaloChicken.standard.skinny,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the half dough 6” elongated rectangle.',
            'Pizza sauce',
            'Sweetcorn',
            'Red onion',
            'Roasted red pepper',
            'Mozzarella',
            'Bake for 2-3 minutes, turning 1/2 way through',
            'Toss the cooked chicken in the hot sauce and cut in to small pieces',
            'Chicken pieces',
            'Crispy onions',
            'Jalapeños',
            'Caesar dressing zig zag'
        ]},
        {title:'Plating',items:pizzaPlateSkinny}
    ],
    image:Images.specs.pizzas.buffaloChicken,
    crockery:crockery.whole.normal,
    ingredients:[
        Ingredients.dough.half,
        Ingredients.other.flour.flour5,
        Ingredients.sauce.pizza.pizza35,
        Ingredients.topping.pizza.mozzarella.mozzarella35,
        Ingredients.topping.pizza.veg.redOnionHalf,
        Ingredients.topping.pizza.veg.redPepperHalf,
        Ingredients.topping.pizza.veg.sweetcornHalf,
        Ingredients.chicken.meat.goujon.strip,
        Ingredients.sauce.franksHalf,
        Ingredients.sauce.dressing.caesarHalf,
        Ingredients.topping.pizza.veg.friedOnionHalf,
        Ingredients.topping.pizza.veg.jalapenosHalf,
        Ingredients.side.houseSalad

    ],
    type:'pizza',
    variant : true,

}
const buffaloChickenVeggieSkinny : specInput = {
    title: Titles.buffaloChicken.veggie.skinny,
    // builds:[buffaloChicken.builds],
    builds : [
        buffaloChickenSkinny.builds[0],
        {title:'Plating',items:pizzaPlateSkinny}
    ],
    image:Images.specs.pizzas.buffaloChicken,
    crockery:crockery.whole.vegan,
    ingredients:[
        Ingredients.dough.full,
        Ingredients.other.flour.flour5,
        Ingredients.sauce.pizza.pizza35,
        Ingredients.topping.pizza.mozzarella.mozzarella35,
        Ingredients.topping.pizza.veg.redOnionHalf,
        Ingredients.topping.pizza.veg.redPepperHalf,
        Ingredients.topping.pizza.veg.sweetcornHalf,
        Ingredients.chicken.nonMeat.goujon.strip,
        Ingredients.sauce.franksHalf,
        Ingredients.sauce.dressing.caesarHalf,
        Ingredients.topping.pizza.veg.friedOnionHalf,
        Ingredients.topping.pizza.veg.jalapenosHalf
    ],
    type:['pizza','vegetarian'],
    variant : true,

}
const bbqMeaty : specInput = {
    title: Titles.bbqMeaty.full,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the dough to 12 inches',
            'BBQ Sauce (save 10g for garnish)',
            'Mozzarella',
            'Pepperoni',
            'Chicken',
            'Sliced sausage',
            'Red onion',
            'Bake for 2-3 minutes, turning 1/2 way through',
            'Bacon bits',
            'Zig-zag of BBQ (10 g)'
        ]},
        {title:'Plating',items:pizzaPlate}
    ],
    image:Images.specs.pizzas.bbqMeaty,
    crockery:crockery.whole.normal,
    ingredients:[
        Ingredients.dough.full,
        Ingredients.other.flour.flour10,
        Ingredients.sauce.pizza.bbq80,
        Ingredients.topping.pizza.mozzarella.mozzarella70,
        Ingredients.chicken.meat.pulled,
        Ingredients.topping.pizza.pepperoni.pepperoni6,
        Ingredients.other.sausage.sausage,
        Ingredients.topping.pizza.veg.redOnion,
        Ingredients.other.bacon.bacon5
    ],
    type:'pizza',
    variant : false,

}
const bbqMeatySkinny : specInput = {
    title: Titles.bbqMeaty.skinny,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the half dough 6” elongated rectangle',
            'BBQ Sauce (save 5 g for garnish)',
            'Mozzarella',
            'Pepperoni',
            'Chicken',
            'Sliced sausage',
            'Red onion',
            'Bake for 2-3 minutes, turning 1/2 way through',
            'Bacon bits',
            'Zig-zag of BBQ (5 g)'
        ]},
        {title:'Plating',items:pizzaPlate}
    ],
    image:Images.specs.pizzas.bbqMeatySkinny,
    crockery:crockery.whole.normal,
    ingredients:[
        Ingredients.dough.half,
        Ingredients.other.flour.flour5,
        Ingredients.sauce.pizza.bbq40,
        Ingredients.topping.pizza.mozzarella.mozzarella35,
        Ingredients.chicken.meat.pulledHalf,
        Ingredients.topping.pizza.pepperoni.pepperoni3,
        Ingredients.other.sausage.sausageHalf,
        Ingredients.topping.pizza.veg.redOnionHalf,
        Ingredients.other.bacon.bacon2,
        Ingredients.side.houseSalad

    ],
    type:['pizza','skinny'],
    variant : true,

}
const bbqMeatyGF : specInput = {
    title: Titles.bbqMeaty.GF,
    builds:[
        {title:'Pizza Build',items:[
            'Place the GF pizza base on a clean tray',
            'BBQ Sauce (save 10g for garnish)',
            'Mozzarella',
            'Pepperoni',
            'Chicken',
            'Sliced sausage',
            'Red onion',
            'Bake for 2-3 minutes, turning 1/2 way through',
            'Bacon bits',
            'Zig-zag of BBQ (10 g)'
        ]},
        {title:'Plating',items:pizzaPlateGF}
    ],
    image:Images.specs.pizzas.bbqMeaty,
    crockery:crockery.whole.GF,
    ingredients:[
        Ingredients.dough.gf,
        Ingredients.sauce.pizza.bbq60,
        Ingredients.topping.pizza.mozzarella.mozzarella60,
        Ingredients.chicken.meat.pulled,
        Ingredients.topping.pizza.pepperoni.pepperoni5,
        Ingredients.other.sausage.sausageHalf,
        Ingredients.topping.pizza.veg.redOnion,
        Ingredients.other.bacon.bacon5
    ],
    type:['pizza','glutenFree'],
    variant : true,

}
const pepperoni : specInput = {
    title: Titles.pepperoni.full,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the dough to 12 inches',
            'Pizza sauce',
            'Mozzarella',
            'Pepperoni',
            'Bake for 2-3 minutes, turning 1/2 way through',
        ]},
        {title:'Plating',items:pizzaPlate}
    ],
    image:Images.specs.pizzas.pepperoni,
    crockery:crockery.whole.normal,
    ingredients:[
        Ingredients.dough.full,
        Ingredients.other.flour.flour10,
        Ingredients.sauce.pizza.pizza70,
        Ingredients.topping.pizza.mozzarella.mozzarella70,
        Ingredients.topping.pizza.pepperoni.pepperoni20
    ],
    type:'pizza',
    variant : false,
}
const pepperoniSkinny : specInput = {
    title: Titles.pepperoni.skinny,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            `Hand stretch the half dough 6" elongated rectangle (same size as plate)`,
            'Pizza sauce',
            'Mozzarella',
            'Pepperoni',
            'Bake for 2-3 minutes, turning 1/2 way through',
        ]},
        {title:'Plating',items:pizzaPlateSkinny}
    ],
    image:Images.specs.pizzas.pepperoniSkinny,
    crockery:crockery.skinny,
    ingredients:[
        Ingredients.dough.half,
        Ingredients.other.flour.flour5,
        Ingredients.sauce.pizza.pizza35,
        Ingredients.topping.pizza.mozzarella.mozzarella35,
        Ingredients.topping.pizza.pepperoni.pepperoni10,
        Ingredients.side.houseSalad
    ],
    type:['pizza','skinny'],
    variant : true,

}
const pepperoniGF : specInput = {
    title: Titles.pepperoni.GF,
    builds:[
        {title:'Pizza Build',items:[
            'Place the GF pizza base on a clean tray',
            'Pizza sauce',
            'Mozzarella',
            'Pepperoni',
            'Bake for 2-3 minutes, turning 1/2 way through',
        ]},
        {title:'Plating',items:pizzaPlateGF}
    ],
    image:Images.specs.pizzas.pepperoni,
    crockery:crockery.whole.GF,
    ingredients:[
        Ingredients.dough.gf,
        Ingredients.sauce.pizza.pizza60,
        Ingredients.topping.pizza.mozzarella.mozzarella60,
        Ingredients.topping.pizza.pepperoni.pepperoni15
    ],
    type:['pizza','glutenFree'],
    variant : true,

}
const mushroom : specInput = {
    title:Titles.mushroom.full,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the dough to 12 inches',
            'Garlic butter',
            'Mozzarella',
            'Sliced mushrooms',
            'Bake for 2-3 minutes, turning 1/2 way through',
            'Italian cheese',
            'Black pepper',
            'Black truffle oil'
        ]},
        {title:'Plating',items:pizzaPlate}
    ],
    image:Images.specs.pizzas.mushroomTruffle,
    crockery:crockery.whole.normal,
    ingredients:[
        Ingredients.dough.full,
        Ingredients.other.flour.flour10,
        Ingredients.topping.pizza.mozzarella.mozzarella70,
        Ingredients.topping.pizza.veg.mushrooms70,
        Ingredients.garnish.oil.truffle,
        Ingredients.sauce.pizza.garlicButter20,
        Ingredients.garnish.blackPepper,
        Ingredients.garnish.hardCheese
    ],
    type:'pizza',
    variant : false,

}
const mushroomSkinny : specInput = {
    title:Titles.mushroom.skinny,
    builds:[
        {title:'Pizza Build',items:[
            `De-frost the dough and prove in fridge for 12 hours
            or over night, bring to room temp before use`,
            'Hand stretch the half dough 6” elongated rectangle',
            'Garlic butter',
            'Mozzarella',
            'Sliced mushrooms',
            'Bake for 2-3 minutes, turning 1/2 way through',
            'Italian cheese',
            'Black pepper',
            'Black truffle oil'
        ]},
        {title:'Plating',items:pizzaPlateSkinny}
    ],
    image:Images.specs.pizzas.mushroomTruffleSkinny,
    crockery:crockery.skinny,
    ingredients:[
        Ingredients.dough.half,
        Ingredients.other.flour.flour5,
        Ingredients.topping.pizza.mozzarella.mozzarella35,
        Ingredients.topping.pizza.veg.mushroomsHalf,
        Ingredients.garnish.oil.truffleHalf,
        Ingredients.sauce.pizza.garlicButter10,
        Ingredients.garnish.blackPepper,
        Ingredients.garnish.hardCheeseHalf,
        Ingredients.side.houseSalad
    ],
    type:['pizza','skinny'],
    variant : true,

}
const mushroomGF : specInput = {
    title:Titles.mushroom.GF,
    builds:[
        {title:'Pizza Build',items:[
            'Place the GF pizza base on a clean tray',
            'Garlic butter',
            'Mozzarella',
            'Sliced mushrooms',
            'Bake for 2-3 minutes, turning 1/2 way through',
            'Italian cheese',
            'Black pepper',
            'Black truffle oil'
        ]},
        {title:'Plating',items:pizzaPlateGF}
    ],
    image:Images.specs.pizzas.mushroomTruffle,
    crockery:crockery.whole.GF,
    ingredients:[
        Ingredients.dough.gf,
        Ingredients.topping.pizza.mozzarella.mozzarella60,
        Ingredients.topping.pizza.veg.mushrooms70,
        Ingredients.garnish.oil.truffle,
        Ingredients.sauce.pizza.garlicButter20,
        Ingredients.garnish.blackPepper,
        Ingredients.garnish.hardCheeseHalf
    ],
    type:['pizza','glutenFree'],
    variant : true,

}

const pizza1 = new SpecItem(marg,1,['skinny','show'],['vegan','show'],['glutenFree','show']);
const pizza2 = new SpecItem(margSkinny,1,['skinny','active']);
const pizza3 = new SpecItem(margVe,1,['vegan','show'],['glutenFree','show']);
const pizza4 = new SpecItem(margGF,1,['glutenFree','active'],['vegan','show']);
const pizza5 = new SpecItem(margGFVe,1,['glutenFree','active'],['vegan','active']);
const pizza6 = new SpecItem(buffaloChicken,1,['vegetarian','show'],['skinny','show']);
const pizza7 = new SpecItem(buffaloChickenVeggie,1,['vegetarian','active'],['skinny','show']);
const pizza8 = new SpecItem(buffaloChickenSkinny,1,['skinny','active'],['vegetarian','show']);
const pizza9 = new SpecItem(buffaloChickenVeggieSkinny,1,['skinny','active'],['vegetarian','active']);
const pizza10 = new SpecItem(bbqMeaty,1,['skinny','show'],['glutenFree','show']);
const pizza11 = new SpecItem(bbqMeatySkinny,1,['skinny','active']);
const pizza12 = new SpecItem(bbqMeatyGF,1,['glutenFree','active']);
const pizza13 = new SpecItem(pepperoni,1,['skinny','show'],['glutenFree','show']);
const pizza14 = new SpecItem(pepperoniSkinny,1,['skinny','active']);
const pizza15 = new SpecItem(pepperoniGF,1,['glutenFree','active']);
const pizza16 = new SpecItem(mushroom,1,['skinny','show'],['glutenFree','show']);
const pizza17 = new SpecItem(mushroomSkinny,1,['skinny','active']);
const pizza18 = new SpecItem(mushroomGF,1,['glutenFree','active']);

export default [pizza1,pizza2,pizza3,pizza4,pizza5,pizza6,pizza7,pizza8,pizza9,
pizza10,pizza11,pizza12,pizza13,pizza14,pizza15,pizza16,pizza17,pizza18];