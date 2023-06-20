import { specInput } from "../../@types/types";
import Images from "../../Images";
import { Crockery } from "../Crockery";
import { SpecItem } from "../DatabaseCore";
import { Ingredients } from "../Ingredients";
import SpecTitles from "../Titles";

const Titles = SpecTitles.side;
const crockery = {
    gBread : [
        Crockery.plate.speckledRectangle,
        Crockery.cutlery.pizza
    ]
}
const garlicBread : specInput = {
    title:Titles.garlicBread.standard,
    builds:[
        {title:'Cooking',items:[
            ` Hand stretch the half dough 6” elongated rectangle (same
            size as the plate). Dock with a docker. Dust off.`,
            `Top with 15g of garlic spread, place in to
            the oven to cook for 4 minutes until golden.`
        ]},
        {title:'Plating',items:[
            'Remove and serve on a rectangular plate with a pizza wheel'
        ]}
    ],
    image:Images.specs.sides.gBread,
    crockery: crockery.gBread,
    ingredients:[
        Ingredients.dough.half,
        Ingredients.other.flour.flour10,
        Ingredients.sauce.garlicButter.garlicButter30,
        Ingredients.topping.pizza.mozzarella.mozzarella40
    ],
    type:'side'

}
const cheeseGarlicBread : specInput = {
    title:Titles.garlicBread.cheesy,
    builds:[
        {title:'Cooking',items:[
            ` Hand stretch the half dough 6” elongated rectangle (same
            size as the plate). Dock with a docker. Dust off.`,
            `Top with 15g of garlic spread and mozzarella, place in to
            the oven to cook for 4 minutes until golden.`
        ]},
        garlicBread.builds[1]
    ],
    image:Images.specs.sides.cheeseGBread,
    crockery:crockery.gBread,
    ingredients:[
        Ingredients.dough.half,
        Ingredients.other.flour.flour10,
        Ingredients.sauce.garlicButter.garlicButter30,
        Ingredients.topping.pizza.mozzarella.mozzarella40
    ],
    type:'side'
}
const sideSalad : specInput = {
    title:Titles.sideSalad,
    builds : [
        {title:'Plating',items:[
            'Wash the cos lettuce & chop in to big chunks.',
            'Dice the cucumber.',
            'Slice the red peppers.',
            'Dice the plum tomato.',
            'Slice the spring onions.',
            'Mix all ingredients except spring onion and toss in french dressing.',
            'Place in the bowl and garnish with the spring onion.'
        ]}
    ],
    image:Images.specs.sides.salad,
    crockery:[Crockery.bowl.triangle],
    ingredients:[
        Ingredients.veg.redPepper.pepper15,
        Ingredients.veg.lettuce.cos.cos15,
        Ingredients.veg.rocket.rocket5,
        Ingredients.veg.tomato.plum.plum20,
        Ingredients.veg.cucumber.cucumber20,
        Ingredients.veg.onion.springOnion.spring10,
        Ingredients.side.coleslaw.md.noMayo,
        Ingredients.sauce.dressing.french15
    ],
    type:'side'
};
const onionRings : specInput = {
    title:Titles.onionRings,
    builds:[
        {title:'Cooking',items:[
            'Cook the onion rings (8) from frozen for 2-3 mins until crisp and golden',
            'Drain and lightly season with salt'
        ]},
        {title:'Plating',items:[
            'Serve in enamel dish'
        ]}
    ],
    image:Images.specs.sides.onionRings,
    crockery:[Crockery.bowl.enamelDish],
    ingredients:[
        Ingredients.side.onionRings.onion8,
        Ingredients.garnish.oil.rapeseed10,
        Ingredients.seasoning.salt
    ],
    type:'side'
}
const rice : specInput = {
    title:Titles.rice,
    builds:[
        {title:'Cooking',items:[
            'Heat the rice in the microwave for 1 minute',
        ]},
        {title:'Plating',items:[
            'Serve in an enamel tin'
        ]}
    ],
    image:Images.specs.sides.rice,
    crockery:[Crockery.bowl.enamelDish],
    ingredients:[
        Ingredients.side.rice
    ],
    type:'side'    
}
const macNCheese : specInput = {
    title:Titles.macNCheese,
    builds:[
        {title:'Prep',items:[
            "Defrost mac'n'cheese in the fridge overnight",
            'Portion out into protion pots'
        ]},
        {title:'Cooking',items:[
            "Microwave the mac'n'cheese for 2 minutes",
            'Pour the mac cheese into a round enamel dish',
            'Top with prep mac crumb',
            'Place into the pizza over on a steel tray to gratinate'
        ]}
    ],
    image:Images.specs.sides.macCheese,
    crockery:[
        Crockery.bowl.enamelMug,
        Crockery.plate.small
    ],
    ingredients:[
        Ingredients.other.macCheese.half
    ],
    type:'side'
};
const fries : specInput = {
    title:Titles.fries.standard,
    builds : [
        {title:'Cooking',items:[
            'Deep fry the fries at 180°C for 4 mins until crisp and golden.',
            'Drain and season lightly with salt'
        ]},
        {title:'Plating',items:[
            'Serve in an enamel dish'
        ]}
    ],
    image:Images.specs.sides.fries,
    crockery:[
        Crockery.bowl.enamelDish
    ],
    ingredients:[
        Ingredients.side.fries.fries200,
        Ingredients.garnish.oil.rapeseed20g,
        Ingredients.seasoning.salt
    ],
    type:'side'
}
const saltPepperFries : specInput = {
    title:Titles.fries.saltPepper,
    builds:[
        {title:'Cooking',items:[
            ...fries.builds[0].items[0],
            ' In a metal bowl, add the fries and garlic butter and toss until the butter melts and the fries are fully coated',
            'Season the fries with remaining ingredients and squeeze the lime juice.'  
        ]},
        fries.builds[1]
    ],
    image:Images.specs.sides.saltPepperFries,
    crockery:[
        Crockery.bowl.enamelDish
    ],
    ingredients:[
        Ingredients.side.fries.fries200,
        Ingredients.seasoning.saltPepperFry,
        Ingredients.topping.chilli.flakes05,
        Ingredients.sauce.garlicButter.garlicButter10,
        Ingredients.garnish.wedge.lime
    ],
    type:'side'
}
const blueCheeseFries : specInput = {
    title:Titles.fries.blueCheese,
    builds:[
        {title:'Cooking',items:[
            ...fries.builds[0].items,
            'Heat through the truffle gravy',
            'Serve the fries in an enamel dish and build',
            'Fries',
            'Hot truffle gravy',
            '2 Broken blue cheese slices',
            'Mozzarella',
            'Put under the salamander to melt the cheese',
            'Garnish with crispy onions and parsley'
        ]}        
    ],
    image:Images.specs.sides.blueCheeseFries,
    crockery:[
        Crockery.bowl.enamelDish,
        Crockery.plate.small
    ],
    ingredients:[
        Ingredients.side.fries.fries200,
        Ingredients.topping.gravy.truffle.truffle100,
        Ingredients.topping.pizza.mozzarella.mozzarella25,
        Ingredients.garnish.leaf.parsleyHalf,
        Ingredients.garnish.friedOnion.friedOnion025
    ],
    type:'side'
}
const chilliCheeseFriesBeef : specInput = {
    title:Titles.fries.chilliCheese.beef,
    builds:[
        {title:'Cooking',items:[
            'Deep fry the fries and seasonin in cajun seasoning',
            'Heat through the chilli in the microwave',
            'Put the fries in an enamel dish and build : ',
            'Fries',
            'Beef Chilli',
            'Sliced up cheese slices',
            'Mozzarella',
            'Put under the salamander to melt the cheese',
            'Chilli flakes',
            'Jalapenos',
            'Crispy onions',
            'Parsley'
        ]}
    ],
    image:Images.specs.sides.chilliCheeseFries,
    crockery:[
        Crockery.bowl.enamelDish,
        Crockery.plate.small,
        Crockery.stick.hot
    ],
    ingredients:[
        Ingredients.side.fries.fries150,
        Ingredients.topping.chilli.beef,
        Ingredients.topping.pizza.mozzarella.mozzarella40,
        Ingredients.burger.cheese.standard,
        Ingredients.garnish.leaf.parsley,
        Ingredients.garnish.friedOnion.friedOnion3,
        Ingredients.seasoning.cajun.cajun1,
        Ingredients.garnish.jalapenos.jalapenos5
    ],
    type:'side'
}
const chilliCheeseFriesV : specInput = {
    title:Titles.fries.chilliCheese.veggie,
    builds:[
        {title:'Cooking',items:[
            'Deep fry the fries and seasonin in cajun seasoning',
            'Heat through the chilli in the microwave',
            'Put the fries in an enamel dish and build : ',
            'Fries',
            'Veggie Chilli',
            'Sliced up cheese slices',
            'Mozzarella',
            'Put under the salamander to melt the cheese',
            'Chilli flakes',
            'Jalapenos',
            'Crispy onions',
            'Parsley'
        ]}
    ],
    image:Images.specs.sides.chilliCheeseFries,
    crockery:[
        Crockery.bowl.enamelDish,
        Crockery.plate.small,
        Crockery.stick.hot,
        Crockery.stick.veggie
    ],
    ingredients:[
        Ingredients.side.fries.fries150,
        Ingredients.topping.chilli.veggie,
        Ingredients.burger.cheese.standard,
        Ingredients.topping.pizza.veganCheddar.vegan40,
        Ingredients.garnish.leaf.parsley,
        Ingredients.garnish.friedOnion.friedOnion3,
        Ingredients.seasoning.cajun.cajun1,
        Ingredients.garnish.jalapenos.jalapenos5
    ],
    type:'side'
}
const chilliCheeseFriesVe : specInput = {
    title:Titles.fries.chilliCheese.vegan,
    builds:[
        {title:'Cooking',items:[
            'Deep fry the fries and seasonin in cajun seasoning',
            'Heat through the chilli in the microwave',
            'Put the fries in an enamel dish and build : ',
            'Fries',
            'Veggie Chilli',
            'Sliced up Vegan cheese slices',
            'Vegan Grated Cheddar',
            'Put under the salamander to melt the cheese',
            'Chilli flakes',
            'Jalapenos',
            'Crispy onions',
            'Parsley'
        ]}
    ],
    image:Images.specs.sides.chilliCheeseFries,
    crockery:[
        Crockery.bowl.enamelDish,
        Crockery.plate.small,
        Crockery.stick.hot,
        Crockery.stick.veggie
    ],
    ingredients:[
        Ingredients.side.fries.fries150,
        Ingredients.topping.chilli.veggie,
        Ingredients.topping.pizza.mozzarella.mozzarella40,
        Ingredients.burger.cheese.vegan,
        Ingredients.garnish.leaf.parsley,
        Ingredients.garnish.friedOnion.friedOnion3,
        Ingredients.seasoning.cajun.cajun1,
        Ingredients.garnish.jalapenos.jalapenos5
    ],
    type:'side'
}
const friesCheeseBacon : specInput = {
    title:Titles.fries.bacon,
    builds : [
        {title:'Cooking',items:[
            'Deep fry the fries at 180°C for 4 mins until crisp and golden.',
            'Drain and season lightly with salt',
            'Re-heat the cheese sauce in the microwave',
        ]},
        {title:'Plating',items:[
            'In an enamel dish, cover the fries with cheese sauce and crispy bacon bits'
        ]}
    ],
    image:Images.specs.sides.fries,
    crockery:[
        Crockery.bowl.enamelDish
    ],
    ingredients:[
        Ingredients.side.fries.fries200,
        Ingredients.garnish.oil.rapeseed20g,
        Ingredients.seasoning.salt,
        Ingredients.sauce.cheese.cheese60,
        Ingredients.topping.bacon.bacon10
    ],
    type:'side'
}
const chilliCheeseFriesBeefCheeseBacon : specInput = {
    title:Titles.fries.chilliCheese.cheeseBacon.beef,
    builds:[
        {title:'Cooking',items:[
            'Deep fry the fries and seasonin in cajun seasoning',
            'Heat through the chilli in the microwave',
            'Put the fries in an enamel dish and build : ',
            'Fries',
            'Beef Chilli',
            'Sliced up cheese slices',
            'Mozzarella',
            'Put under the salamander to melt the cheese',
            'Chilli flakes',
            'Jalapenos',
            'Crispy onions',
            'Parsley'
        ]}
    ],
    image:Images.specs.sides.chilliCheeseFries,
    crockery:[
        Crockery.bowl.enamelDish,
        Crockery.plate.small,
        Crockery.stick.hot
    ],
    ingredients:[
        Ingredients.side.fries.fries150,
        Ingredients.topping.chilli.beef,
        Ingredients.topping.pizza.mozzarella.mozzarella40,
        Ingredients.burger.cheese.standard,
        Ingredients.garnish.leaf.parsley,
        Ingredients.garnish.friedOnion.friedOnion3,
        Ingredients.seasoning.cajun.cajun1,
        Ingredients.garnish.jalapenos.jalapenos5,
        Ingredients.sauce.cheese.cheese60,
        Ingredients.topping.bacon.bacon10
    ],
    type:'side'
}

const side1 = new SpecItem(garlicBread,1);
const side2 = new SpecItem(cheeseGarlicBread,1);
const side3 = new SpecItem(sideSalad,1);
const side4 = new SpecItem(onionRings,1);
const side5 = new SpecItem(rice,1);
const side6 = new SpecItem(macNCheese,1);
const side7 = new SpecItem(fries,1);
const side8 = new SpecItem(saltPepperFries,1);
const side9 = new SpecItem(blueCheeseFries,1);
const side10 = new SpecItem(chilliCheeseFriesBeef,1);
const side11 = new SpecItem(chilliCheeseFriesV,1);
const side12 = new SpecItem(chilliCheeseFriesVe,1);
const side13 = new SpecItem(friesCheeseBacon,1);
const side14 = new SpecItem(chilliCheeseFriesBeefCheeseBacon,1)

export default[side1,side2,side3,side4,side5,side6,side7,side8,side9,side10,side11,side12,side13,side14];
