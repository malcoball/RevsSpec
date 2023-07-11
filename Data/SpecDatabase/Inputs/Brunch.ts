import { specInput } from "../../@types/types";
import Images from "../../Images";
import { Crockery } from "../Crockery";
import { SpecItem } from "../DatabaseCore";
import { Ingredients } from "../Ingredients";
import Cooking from "../Cooking";
import SpecTitles from "../Titles";

const Titles = SpecTitles.brunch;
const Imgs = Images.specs.brunch;



const AvoToast : {noEgg:specInput,egg:specInput} = {
    noEgg : {
        title:Titles.avoToast.standard,image:Imgs.avoToast,
        type:'brunch',
        ingredients:[
            Ingredients.other.sourdough.sourdough60,
            Ingredients.veg.avo.avocado100,
            Ingredients.veg.avo.smashed.smashed100,
            Ingredients.garnish.crushedChilli1,
            Ingredients.veg.tomato.plum.plum40,
            Ingredients.sauce.sriracha.sriracha10,
            Ingredients.garnish.leaf.coriander,
        ],
        builds:[
            {title:'Cooking',items:[
                'Toast the bread under a hot grill'
            ]},
            {title:'Prep',items:[
                'Place the toast onto plate',
                'Spoon 100g of avo smash on the toast',
                'Top with 100g of diced avo',
                'Garish with sriracha',
                'Diced tomato',
                'Chilli flakes',
                'Chopped coriander'
            ]}
        ],
        crockery:[
            Crockery.plate.speckledRectangle
        ],
        variant : false
    },
    egg : {
        title:Titles.avoToast.egg,image:Imgs.avoToast,
        type:'brunch',
        ingredients:[
            Ingredients.other.sourdough.sourdough60,
            Ingredients.veg.avo.avocado100,
            Ingredients.veg.avo.smashed.smashed100,
            Ingredients.garnish.crushedChilli2,
            Ingredients.veg.tomato.plum.plum40,
            Ingredients.sauce.sriracha.sriracha10,
            Ingredients.garnish.leaf.coriander,
            Ingredients.other.egg.egg2  
        ],
        builds:[
            {title:'Cooking',items:[
                ...Cooking.egg.poached,
                'Toast the bread under a hot grill'
            ]},
            {title:'Prep',items:[
                'Place the toast onto plate',
                'Spoon 100g of avo smash on the toast',
                'Top with 100g of diced avo',
                'Garish with sriracha',
                'Diced tomato',
                'Chilli flakes',
                'Chopped coriander'
            ]}
        ],
        crockery:[
            Crockery.plate.speckledRectangle
        ],
        variant : true

    },
}
const eggsBenedict : {standard : specInput,GF : specInput} = {
    standard:{
        title:Titles.eggsBenedict.standard, image:Images.specs.brunch.eggsBenedict.eggsBenedict,
        crockery:[Crockery.plate.blueRim],type:'brunch',
        ingredients:[
            Ingredients.other.egg.egg2,
            Ingredients.burger.bun.standard,
            Ingredients.veg.rocket.rocket10,
            Ingredients.other.bacon.bacon4Slice,
            Ingredients.sauce.hollandaise.hollandaise60,
            Ingredients.seasoning.crackedBlackPepper
        ],
        builds:[
            {title:'Cooking',items:[
                ...Cooking.egg.poached,
                Cooking.bun.regular,
                Cooking.sauce.hollandaise,
                Cooking.bacon,
            ]},
            {title:'Plating',items:[
                '2 Bases',
                'Rocket',
                'Bacon (2 slices each bun)',
                'Eggs',
                'Hollandaise',
                'Black pepper'
            ]}
        ],
        variant : false

    },
    GF:{
        title:Titles.eggsBenedict.GF, image:Images.specs.brunch.eggsBenedict.eggsBenedictGF,
        crockery:[Crockery.plate.blueRim,Crockery.stick.GF],type:['brunch','glutenFree'],
        ingredients:[
            Ingredients.other.egg.egg2,
            Ingredients.burger.bun.GF,
            Ingredients.veg.rocket.rocket10,
            Ingredients.other.bacon.bacon4Slice,
            Ingredients.sauce.hollandaise.hollandaise60,
            Ingredients.seasoning.crackedBlackPepper
        ],
        builds:[
            {title:'Cooking',items:[
                ...Cooking.egg.poached,
                Cooking.bun.regular,
                Cooking.sauce.hollandaise,
                Cooking.bacon,
            ]},
            {title:'Plating',items:[
                '2 Bases',
                'Rocket',
                'Bacon (2 slices each bun)',
                'Eggs',
                'Hollandaise',
                'Black pepper'
            ]}
        ],
        variant : true
    },
}

const chickenWaffle : specInput = {
    title:Titles.waffles, image:Imgs.chickenWaffle, 
    crockery:[Crockery.bowl.speckledSaladBowl,Crockery.dipPot],
    type:'brunch',
    ingredients:[
        Ingredients.dip.saucePot.mapleSyrup,
        Ingredients.other.egg.egg1,
        Ingredients.garnish.leaf.parsleyHalf,
        Ingredients.chicken.meat.goujon.strips3,
        Ingredients.dessert.waffle.waffle1,
        Ingredients.other.bacon.bacon2Slice
    ],
    builds:[
        {title:'Cooking',items:[
            Cooking.bacon,
            Cooking.chicken.strips.fried,
            Cooking.waffle,
        ]},
        {title:'Plating',items:[
            'Place waffles onto bowl',
            'Lay the bacon rashers onto the warm waffle',
            'Top with fried chicken strips and season with parsley',
            'Serve with a dip pot of maple syrup.'
        ]}
    ],
    variant : false,
}
const pancakes : specInput = {
    title:Titles.pancakes, type:'brunch',
    crockery:[Crockery.bowl.speckledSaladBowl],
    image:Imgs.pancake,
    ingredients:[
        Ingredients.dessert.pancake.pancake3,
        Ingredients.fruit.banana.banana1,
        Ingredients.fruit.strawberry.strawberry30,
        Ingredients.sauce.chocolate.nutella.nutella40,
        Ingredients.garnish.icingSugar,
        Ingredients.dessert.cream.aerosolCream30
    ],
    builds:[
        {title:'Cooking',items:[
            Cooking.pancake
        ]},
        {title:'Plating',items:[
            'Spread each pancake with nutella (melt slightly for ease)',
            'Stack them with sliced banana and strawberries',
            'Garnish with whipped cream and dust with icing sugar'
        ]}
    ],
    variant : false,
}
const grill : {standard:specInput,GF:specInput} = {
    standard :{
        title:Titles.grill.standard, type:'brunch',
        crockery:[
            Crockery.plate.speckledRectangle,
            Crockery.ramekin
        ],
        ingredients:[
            Ingredients.other.bacon.bacon2Slice,
            Ingredients.veg.tomato.plum.plum80,
            Ingredients.veg.mushroom.mushrooms60,
            Ingredients.other.egg.egg2,
            Ingredients.burger.seasoning.rs2,
            Ingredients.other.hashbrown.hashbrown1,
            Ingredients.other.sausage.sausage,
            Ingredients.other.sourdough.sourdough60,
            Ingredients.other.butter.butter15,
            Ingredients.garnish.leaf.parsleyHalf,
            Ingredients.side.beans.beans100
        ],
        builds:[
            {title:'Prep',items:[
                'Cut the tomato in half',
                'Thick slice the mushrooms',
            ]},
            {title:'Cooking',items:[
                Cooking.veg.tomato,
                Cooking.veg.mushroom,
                Cooking.sausage.meat,
                Cooking.bacon+". Do not use pre-cooked bacon",
                Cooking.hashbrown.single,
                Cooking.egg.fried,
                Cooking.beans,
                Cooking.toast,
            ]},
            {title:'Plating',items:[
                'Place all of the items onto the plate as shown',
                'Season the eggs with salt and pepper and garnish with parsley'
            ]}
        ],
        image:Images.specs.brunch.grill.standard,
        variant : false,

    },
    GF :{
        title:Titles.grill.GF, type:['brunch','glutenFree'],
        crockery:[
            Crockery.plate.speckledRectangle,
            Crockery.ramekin
        ],
        ingredients:[
            Ingredients.other.bacon.bacon2Slice,
            Ingredients.veg.tomato.plum.plum80,
            Ingredients.veg.mushroom.mushrooms60,
            Ingredients.other.egg.egg2,
            Ingredients.burger.seasoning.rs2,
            Ingredients.other.hashbrown.hashbrown2,
            Ingredients.other.sausage.sausage,
            Ingredients.garnish.leaf.parsleyHalf,
            Ingredients.side.beans.beans100
        ],
        builds:[
            {title:'Prep',items:[
                'Cut the tomato in half',
                'Thick slice the mushrooms',
            ]},
            {title:'Cooking',items:[
                Cooking.veg.tomato,
                Cooking.veg.mushroom,
                Cooking.sausage.meat,
                Cooking.bacon+". Do not use pre-cooked bacon",
                Cooking.hashbrown.single,
                Cooking.egg.fried,
                Cooking.beans,
            ]},
            {title:'Plating',items:[
                'Place all of the items onto the plate as shown',
                'Season the eggs with salt and pepper and garnish with parsley'
            ]}
        ],
        image:Images.specs.brunch.grill.GF,
        variant : true,
    },
}
const grillV : {standard:specInput,GF:specInput} = {
    standard :{
        title:Titles.grill.veggie, type:['brunch','vegetarian'],
        crockery:[
            Crockery.plate.speckledRectangle,
            Crockery.ramekin
        ],
        ingredients:[
            Ingredients.veg.tomato.plum.plum80,
            Ingredients.veg.mushroom.mushrooms60,
            Ingredients.other.egg.egg2,
            Ingredients.burger.seasoning.rs2,
            Ingredients.other.hashbrown.hashbrown1,
            Ingredients.other.sausage.vegan.vegan2,
            Ingredients.other.sourdough.sourdough60,
            Ingredients.other.butter.butter15,
            Ingredients.garnish.leaf.parsleyHalf,
            Ingredients.side.beans.beans100
        ],
        builds:[
            {title:'Prep',items:[
                'Cut the tomato in half',
                'Thick slice the mushrooms',
            ]},
            {title:'Cooking',items:[
                Cooking.veg.tomato,
                Cooking.veg.mushroom,
                Cooking.sausage.vegan,
                Cooking.hashbrown.single,
                Cooking.egg.fried,
                Cooking.beans,
                Cooking.toast,
            ]},
            {title:'Plating',items:[
                'Place all of the items onto the plate as shown',
                'Season the eggs with salt and pepper and garnish with parsley'
            ]}
        ],
        image:Images.specs.brunch.grill.veggie,
        variant : true,
    },
    GF :{
        title:Titles.grill.veggieGF, type:['brunch','vegetarian','glutenFree'],
        crockery:[
            Crockery.plate.speckledRectangle,
            Crockery.ramekin
        ],
        ingredients:[
            Ingredients.veg.tomato.plum.plum80,
            Ingredients.veg.mushroom.mushrooms60,
            Ingredients.other.egg.egg2,
            Ingredients.burger.seasoning.rs2,
            Ingredients.other.hashbrown.hashbrown2,
            Ingredients.other.sausage.vegan.vegan2,
            Ingredients.garnish.leaf.parsleyHalf,
            Ingredients.side.beans.beans100
        ],
        builds:[
            {title:'Prep',items:[
                'Cut the tomato in half',
                'Thick slice the mushrooms',
            ]},
            {title:'Cooking',items:[
                Cooking.veg.tomato,
                Cooking.veg.mushroom,
                Cooking.sausage.vegan,
                Cooking.hashbrown.multiple,
                Cooking.egg.fried,
                Cooking.beans,
            ]},
            {title:'Plating',items:[
                'Place all of the items onto the plate as shown',
                'Season the eggs with salt and pepper and garnish with parsley'
            ]}
        ],
        image:Images.specs.default,
        variant : true,
    },
    
}
const grillVe : {standard:specInput,GF:specInput} = {
    standard :{
        title:Titles.grill.vegan, type:['brunch','vegan'],
        crockery:[
            Crockery.plate.speckledRectangle,
            Crockery.ramekin
        ],
        ingredients:[
            Ingredients.veg.tomato.plum.plum80,
            Ingredients.veg.mushroom.mushrooms60,
            Ingredients.veg.avo.avocado115,
            Ingredients.other.hashbrown.hashbrown1,
            Ingredients.other.sausage.vegan.vegan2,
            Ingredients.other.sourdough.sourdough60,
            Ingredients.other.butter.butter15,
            Ingredients.garnish.leaf.parsleyHalf,
            Ingredients.side.beans.beans100
        ],
        builds:[
            {title:'Prep',items:[
                'Cut the tomato in half',
                'Thick slice the mushrooms',
            ]},
            {title:'Cooking',items:[
                Cooking.veg.tomato,
                Cooking.veg.mushroom,
                Cooking.sausage.vegan,
                Cooking.hashbrown.single,
                Cooking.egg.fried,
                Cooking.beans,
                Cooking.toast,
            ]},
            {title:'Plating',items:[
                'Place all of the items onto the plate as shown',
                'Season the eggs with salt and pepper and garnish with parsley'
            ]}
        ],
        image:Images.specs.brunch.grill.vegan,
        variant : true,
    },
    GF :{
        title:Titles.grill.veganGF, type:['brunch','vegan','glutenFree'],
        crockery:[
            Crockery.plate.speckledRectangle,
            Crockery.ramekin
        ],
        ingredients:[
            Ingredients.veg.tomato.plum.plum80,
            Ingredients.veg.mushroom.mushrooms60,
            Ingredients.veg.avo.avocado115,
            Ingredients.other.hashbrown.hashbrown2,
            Ingredients.other.sausage.vegan.vegan2,
            Ingredients.garnish.leaf.parsleyHalf,
            Ingredients.side.beans.beans100
        ],
        builds:[
            {title:'Prep',items:[
                'Cut the tomato in half',
                'Thick slice the mushrooms',
            ]},
            {title:'Cooking',items:[
                Cooking.veg.tomato,
                Cooking.veg.mushroom,
                Cooking.sausage.vegan,
                Cooking.hashbrown.multiple,
                Cooking.egg.fried,
                Cooking.beans,
            ]},
            {title:'Plating',items:[
                'Place all of the items onto the plate as shown',
                'Season the eggs with salt and pepper and garnish with parsley'
            ]}
        ],
        image:Images.specs.default,
        variant : true,
    },
    
}

const brunchPizza : {standard:specInput,GF:specInput}={
    standard:{
        title:Titles.pizza.standard, crockery:[Crockery.pizza.paddle,Crockery.cutlery.pizza],
        type:['brunch'],image:Imgs.pizza.standard,
        ingredients:[
            Ingredients.dough.full,
            Ingredients.other.flour.flour10,
            Ingredients.sauce.pizza.pizza70,
            Ingredients.veg.mushroom.mushrooms50,
            Ingredients.other.sausage.sausage,
            Ingredients.veg.tomato.plum.plum35,
            Ingredients.other.bacon.bacon2Slice,
            Ingredients.topping.pizza.mozzarella.mozzarella70,
            Ingredients.other.egg.egg1
        ],
        builds:[
            {title:'Prep',items:[
                'De-frost the dough & prove in the fridge for 12 hours or over night. Bring to room temp before use',
                'hand stretch to 12"',
                'Cut sausage down'
            ]},
            {title:'Cooking',items:[
                Cooking.egg.fried,
                Cooking.pizza
            ]},
            {title:'Pizza Build',items:[
                'Pizza sauce',
                'Mushrooms',
                'Sausage to rings',
                'Mozzarella',
                'Diced tomato',
                'Cook',
                'Add large peices of broken bacon strips',
                'Add fried egg'
            ]},
            {title:'Plating',items:[
                'Serve on a pizza paddle with a pizza wheel'
            ]}
        ],
        variant : true,
    },
    GF:{
        title:Titles.pizza.GF, crockery:[Crockery.pizza.paddle,Crockery.cutlery.pizza,Crockery.stick.GF],
        type:['brunch','glutenFree'],image:Imgs.pizza.standard,
        ingredients:[
            Ingredients.dough.gf,
            Ingredients.other.flour.flour10,
            Ingredients.sauce.pizza.pizza70,
            Ingredients.veg.mushroom.mushrooms50,
            Ingredients.other.sausage.sausage,
            Ingredients.veg.tomato.plum.plum35,
            Ingredients.other.bacon.bacon2Slice,
            Ingredients.topping.pizza.mozzarella.mozzarella70,
            Ingredients.other.egg.egg1
        ],
        builds:[
            {title:'Prep',items:[
                'Place the GF pizza base on a clean tray',
                'Cut sausage down'
            ]},
            {title:'Cooking',items:[
                Cooking.egg.fried,
                Cooking.pizza
            ]},
            {title:'Pizza Build',items:[
                'Pizza sauce',
                'Mushrooms',
                'Sausage to rings',
                'Mozzarella',
                'Diced tomato',
                'Cook',
                'Add large peices of broken bacon strips',
                'Add fried egg'
            ]},
            {title:'Plating',items:[
                'Serve on a pizza paddle with a pizza wheel'
            ]}
        ],
        variant : true,
    },
}

const brunchBurger : {standard:specInput,GF:specInput}={
    standard:{
        title:Titles.burger.standard, type:['brunch'],
        image:Imgs.burger, 
        crockery:[Crockery.plate.blueRim,Crockery.bowl.enamelDish,Crockery.stick.small],
        ingredients:[
            Ingredients.burger.bun.standard,
            Ingredients.burger.sauce.relish,
            Ingredients.burger.burger.beef.meat,
            Ingredients.burger.seasoning.rs,
            Ingredients.other.bacon.bacon2Slice,
            Ingredients.burger.cheese.standard,
            Ingredients.other.egg.egg1,
            Ingredients.other.hashbrown.hashbrown1,
            Ingredients.side.fries.standard
        ],
        builds:[
            {title:'Cooking',items:[
                Cooking.burger.beef.meat.regular,
                Cooking.bun.regular,
                Cooking.burger.cheese.regular,
                Cooking.fries.regular,
                Cooking.hashbrown.single,
                Cooking.egg.fried,
            ]},
            {title:'Burger Build',items:[
                'Toasted base',
                'Burger sauce',
                'Burger with melted cheese',
                'Bacon (2 slices)',
                'Fried egg',
                'Lid',
                'Hash brown on top',
                'Skewer'
            ]},
            {title:'Plating',items:[
                'Serve burger on plate',
                'Serve fries on plate'
            ]}
        ],
        variant : false,
    },
    GF:{
        title:Titles.burger.GF, type:['brunch','glutenFree'],
        image:Imgs.burger, 
        crockery:[Crockery.plate.blueRim,Crockery.bowl.enamelDish,Crockery.stick.small],
        ingredients:[
            Ingredients.burger.bun.GF,
            Ingredients.burger.sauce.relish,
            Ingredients.burger.burger.beef.meat,
            Ingredients.burger.seasoning.rs,
            Ingredients.other.bacon.bacon2Slice,
            Ingredients.burger.cheese.standard,
            Ingredients.other.egg.egg1,
            Ingredients.other.hashbrown.hashbrown1,
            Ingredients.side.fries.standard
        ],
        builds:[
            {title:'Cooking',items:[
                Cooking.burger.beef.meat.regular,
                Cooking.bun.regular,
                Cooking.burger.cheese.regular,
                Cooking.fries.regular,
                Cooking.hashbrown.single,
                Cooking.egg.fried,
            ]},
            {title:'Burger Build',items:[
                'Toasted base',
                'Burger sauce',
                'Burger with melted cheese',
                'Bacon (2 slices)',
                'Fried egg',
                'Lid',
                'Hash brown on top',
                'Skewer'
            ]},
            {title:'Plating',items:[
                'Serve burger on plate',
                'Serve fries on plate'
            ]}
        ],
        variant : true,
    }
}

const brunch1 = new SpecItem(AvoToast.noEgg,1,['egg','show']);
const brunch2 = new SpecItem(AvoToast.egg,1,['egg','active']);
const brunch3 = new SpecItem(eggsBenedict.standard,1,['glutenFree','show']);
const brunch4 = new SpecItem(eggsBenedict.GF,1,['glutenFree','active']);
const brunch5 = new SpecItem(chickenWaffle,1);
const brunch6 = new SpecItem(pancakes,1);
const brunch7 = new SpecItem(grill.standard,1,['glutenFree','show'],['vegetarian','show'],['vegan','show'])
const brunch8 = new SpecItem(grill.GF,1,['glutenFree','active'],['vegetarian','show'],['vegan','show']);
const brunch9 = new SpecItem(grillV.standard,1,['glutenFree','show'],['vegetarian','active'],['vegan','show']);
const brunch10 = new SpecItem(grillV.GF,1,['glutenFree','active'],['vegetarian','active'],['vegan','show']);
const brunch11 = new SpecItem(grillVe.standard,1,['glutenFree','show'],['vegetarian','show'],['vegan','active']);
const brunch12 = new SpecItem(grillVe.GF,1,['glutenFree','active'],['vegetarian','show'],['vegan','active']);
const brunch13 = new SpecItem(brunchPizza.standard,1,['glutenFree','show']);
const brunch14 = new SpecItem(brunchPizza.GF,1,['glutenFree','active']);
const brunch15 = new SpecItem(brunchBurger.standard,1,['glutenFree','show']);
const brunch16 = new SpecItem(brunchBurger.GF,1,['glutenFree','active']);

export default [brunch1,brunch2,brunch3,brunch4,brunch5,brunch6,brunch7,
brunch8,brunch9,brunch10,brunch11,brunch12,brunch13,brunch14,brunch15,brunch16];