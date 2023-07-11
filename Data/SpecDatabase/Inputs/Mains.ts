import { specInput } from "../../@types/types";
import Images from "../../Images";
import { Crockery } from "../Crockery";
import { SpecItem } from "../DatabaseCore";
import { Ingredients } from "../Ingredients";
import SpecTitles from "../Titles";

const Titles = SpecTitles.main;

const grainBowl : specInput = {
    title:Titles.grainBowl,
    builds:[
        {title:'Prep',items:[
            'De-frost the grains thoroughly',
            'Quarter the cucumber and dice',
            'Slice the strips of roasted red pepper',
            'Fan the avocado, season with salt and squeeze 1 lime wedge over it',
            'Shred the lettuce and mix with the grains',
            'Prepare and cook the flat bread',
            'Cut the flat bread into 4 triangles',
        ]},
        {title:'Plating',items:[
            'Build the bowl as : ',
            'Lettuce',
            'Grains mix',
            'On top of grains (clockwise) : ',
            'Avocado fan to the left',
            'Cucumber',
            'Harrisa Hummus',
            'Roasted Red Pepper',
            'Top with pomegranate seeds, spring onion, coriander and the second lime wedge',
            'Serve with flat bread'
        ]}
    ],
    image:Images.specs.main.grainBowl,
    crockery:[
        Crockery.bowl.speckledSaladBowl
    ],
    ingredients:[
        Ingredients.veg.grains.grains200,
        Ingredients.veg.lettuce.cos.cos30,
        Ingredients.veg.avo.avocado60,
        Ingredients.garnish.lime.wedge,
        Ingredients.seasoning.salt,
        Ingredients.veg.cucumber.cucumber30,
        Ingredients.dip.hummus.haissa,
        Ingredients.veg.redPepper.pepper25,
        Ingredients.garnish.nigellaSeeds05,
        Ingredients.garnish.pomegranate.pomegranate10,
        Ingredients.veg.onion.springOnion.spring5,
        Ingredients.garnish.leaf.coriander2,
        Ingredients.garnish.lime.wedge,
        Ingredients.dough.half
    ],
    type:'main',
    variant : false,

}
const asainSalad : specInput = {
    title:Titles.salad.asian,
    builds:[
        {title:'Prep',items:[
            'Chop the washed cos lettuce in to large chunks',
            'Slice the pineapple finely (julienne strips)',
            'Dice the cucumber',
            'Slice the red peppers',
            'Slice the spring onions'
        ]},
        {title:'Plating',items:[
            'Mix the slaw, lettuce, pepper, rocket and cucumber',
            'Garnish with the rest of the ingredients'
        ]}
    ],
    image:Images.specs.main.asianSalad,
    crockery:[
        Crockery.bowl.speckledSaladBowl
    ],
    ingredients:[
        Ingredients.veg.slaw.slaw.slaw100,
        Ingredients.veg.lettuce.cos.cos40,
        Ingredients.veg.redPepper.pepper25,
        Ingredients.veg.rocket.rocket5,
        Ingredients.veg.cucumber.cucumber30,
        Ingredients.sauce.dressing.soyChilli.soy40,
        Ingredients.veg.pineapple.pineapple60,
        Ingredients.topping.chilli.flakes1,
        Ingredients.veg.onion.springOnion.spring10,
        Ingredients.garnish.leaf.coriander2,
        Ingredients.garnish.nigellaSeeds1
    ],
    type:'main',
    variant : false,

}
const flatBreadVe : specInput = {
    title: Titles.flatBread.vegan,
    builds : [
        {title:'Prep',items:[
            'Prepare the garlic bread as per the spec UPDATE PLS',
            'Mix the cos, iceberg, and coleslaw in lime pickle mayo'
        ]},
        {title:'Cooking',items:[
            'Grill the chicken as per spec UPDATE PLS',
            'Cook the garlic bread',
            'Fries UPDATE PLS',
        ]},
        {title:'Plating',items:[
            'Flatbread',
            'Dressed salad',
            'Chicken',
            'Zig zag of Caesar dressing',
            'Zig zag of Hot sauce',
            'Coriander leaf',
            'Serve on plate with side of fries'
        ]}
    ],
    image:Images.specs.main.flatBread,
    crockery:[
        Crockery.plate.speckledRectangle,
        Crockery.bowl.enamelMug,
        Crockery.paper.brandedGreaseProof
    ],
    ingredients:[
        Ingredients.chicken.meat.stripCajun,
        Ingredients.dough.half,
        Ingredients.sauce.garlicButter.garlicButter30,
        Ingredients.veg.lettuce.cos.cos30,
        Ingredients.side.coleslaw.md.mayo,
        Ingredients.sauce.mayo.limePickle.lime15,
        Ingredients.sauce.franks,
        Ingredients.sauce.dressing.caesar,
        Ingredients.garnish.leaf.coriander2,
        Ingredients.side.fries.standard
    ],
    type:'main',
    variant : false,

}
const flatBreadFalafel : specInput = {
    title: Titles.flatBread.falafel,
    builds : [
        {title:'Prep',items:[
            'Prepare the garlic bread as per the spec UPDATE PLS',
            'Mix the cos, iceberg, and coleslaw in lime pickle mayo'
        ]},
        {title:'Cooking',items:[
            'Grill the chicken as per spec UPDATE PLS',
            'Cook the garlic bread',
            'Fries UPDATE PLS',
        ]},
        {title:'Plating',items:[
            'Flatbread',
            'Dressed salad',
            'Chicken',
            'Zig zag of Caesar dressing',
            'Zig zag of Hot sauce',
            'Coriander leaf',
            'Serve on plate with side of fries'
        ]}
    ],
    image:Images.specs.main.flatBread,
    crockery:[
        Crockery.plate.speckledRectangle,
        Crockery.bowl.enamelMug,
        Crockery.paper.brandedGreaseProof
    ],
    ingredients:[
        Ingredients.chicken.meat.stripCajun,
        Ingredients.dough.half,
        Ingredients.sauce.garlicButter.garlicButter30,
        Ingredients.veg.lettuce.cos.cos30,
        Ingredients.side.coleslaw.md.mayo,
        Ingredients.sauce.mayo.limePickle.lime15,
        Ingredients.sauce.franks,
        Ingredients.sauce.dressing.caesar,
        Ingredients.garnish.leaf.coriander2,
        Ingredients.side.fries.standard
    ],
    type:'main',
    variant : false,

}
const chickenCaesar : specInput = {
    title:Titles.salad.chickenCaesar,
    builds:[
        {title:'Prep',items:[
            'In a steel mixing bowl mix together : ',
            '150g chopped Cos',
            '35ml Caesar',
            'Stack high into speckled salad bowl',
            'Thickly sliced freshly cooked chicken lengthways (keep its shape), and serve onto of the salad',
            'Top with croutons, bacon bits, and finely grated Italian cheese',
            'Zig zag remaining Caesar dressing across salad'
        ]},
        {title:'Cooking',items:[
            'Cook the chicken UPDATE PLS'
        ]},
    ],
    image:Images.specs.main.caesarSalad,
    crockery:[Crockery.bowl.speckledSaladBowl],
    ingredients:[
        Ingredients.chicken.meat.cajun.cajun200,
        Ingredients.veg.lettuce.cos.cos150,
        Ingredients.sauce.dressing.caesar,
        Ingredients.garnish.hardCheese15,
        Ingredients.topping.bacon.baconBits.bits15,
        Ingredients.topping.croutons.croutons20
    ],
    type:'main',
    variant : false,

};
const fishChips : specInput = {
    title:Titles.fish,
    builds:[
        {title:'Cooking',items:[
            'Once defrosted, coat in the beer batter mix',
            'Place the fish in the fish fryer for 4-5 minutes, untill the batter is crisp and golden. Drain well',
            'Deep fry the fries until golden, season with salt',
            'Re-heat the gravy, mushy peas & kaysu sauce',
        ]},
        {title:'Plating',items:[
            'Serve the katsu, mushy peas & gravy in small square ramekins',
            'Serve as per the photo : ',
            'Fish on top of the fries',
            'Ramekins lined up on one side',
            'Lemon in corner'
        ]}
    ],
    image:Images.specs.main.fishChips,
    crockery:[
        Crockery.tray.enamel,
        Crockery.paper.brandedGreaseProof,
        "3 x "+Crockery.ramekin
    ],
    ingredients:[
        Ingredients.fish.fillet,
        Ingredients.other.batter.batter100,
        Ingredients.side.mushyPeas,
        Ingredients.topping.gravy.truffle.truffle50,
        Ingredients.dip.ramekin.katsu50,
        Ingredients.garnish.lemon.half
    ],
    type:'main',
    variant : false,

}
const katsuChicken : specInput = {
    title:Titles.katsuCurry.chicken,
    builds:[
        {title:'Cooking',items:[
            'Fry the chicken as per the spec UPDATE YE',
            'Re-heat the rice',
            'Re-heat the katsu sauce',
        ]},
        {title:'Plating',items:[
            'Serve the rice in the base of the bowl',
            'Thickly slice the chicken',
            'Serve the chicken ontop of the rice',
            'Serve the katsu sauce in the jug',
            'Serve the coleslaw next to it',
            'Top with coriander and lime wedge'
        ]}
    ],
    image:Images.specs.main.katsuCurry,
    crockery:[
        Crockery.bowl.speckledSaladBowl,
        Crockery.jug.small
    ],
    ingredients:[
        Ingredients.chicken.meat.breast.breast200,
        Ingredients.veg.slaw.coleslaw.coleslaw55,
        Ingredients.sauce.curry.katsuCurry150,
        Ingredients.side.rice,
        Ingredients.garnish.lime.wedge,
        Ingredients.garnish.leaf.coriander
    ],
    type:'main',
    variant : false,

};
const katsuChickenVe : specInput = {
    title:Titles.katsuCurry.vegan,
    builds:[
        {title:'Cooking',items:[
            'Fry the chicken as per the spec UPDATE YE',
            'Re-heat the rice',
            'Re-heat the katsu sauce',
        ]},
        {title:'Plating',items:[
            'Serve the rice in the base of the bowl',
            'Thickly slice the chicken',
            'Serve the chicken ontop of the rice',
            'Serve the katsu sauce in the jug',
            'Serve the coleslaw next to it',
            'Top with coriander and lime wedge'
        ]}
    ],
    image:Images.specs.main.katsuCurry,
    crockery:[
        Crockery.bowl.speckledSaladBowl,
        Crockery.jug.small
    ],
    ingredients:[
        Ingredients.chicken.meat.breast.breast200,
        Ingredients.veg.slaw.coleslaw.coleslaw55,
        Ingredients.sauce.curry.katsuCurry150,
        Ingredients.side.rice,
        Ingredients.garnish.lime.wedge,
        Ingredients.garnish.leaf.coriander
    ],
    type:'main',
    variant : true,

};
const macNCheese : specInput = {
    title:Titles.macCheese.standard,
    builds:[
        {title:'Prep',items:[
            "Defrost the mac'n'cheese in the fridge overnight",
            'Portion out into portion pots'
        ]},
        {title:'Cooking',items:[
            "Microwave the mac'n'cheese into a round enamel dish. Top with the prep mac crumb",
            'Place into the pizza oven on a steel tray to gratinate',
        ]},
        {title:'Plating',items:[
            'Once fully cooked, place enamel round plate',
            'Serve with a hot flag'
        ]}
    ],
    image:Images.specs.main.macCheese,
    crockery:[
        Crockery.plate.enamelRound,
        Crockery.bowl.enamelDish,
        Crockery.stick.hot
    ],
    ingredients:[
        Ingredients.other.macNCheese.mac450,
        Ingredients.topping.cheese.macCrumb
    ],
    type:'main',
    variant : false,

}
const macNCheeseTruffle : specInput = {
    title:Titles.macCheese.mushroom,
    builds:[
        {title:'Prep',items:[
            ...macNCheese.builds[0].items,
            'Slice the mushrooms into strips'
        ]},
        {title:'Cooking',items:[
            ...macNCheese.builds[1].items,
            'Pan fry the mushrooms for 1 minute'
        ]},
        {title:'Plating',items:[
            'Garnish with mushrooms (fanned out a per photo)',
            'Truffle oil',
            'Chopped parsley',
            'Crispy onions',
            ...macNCheese.builds[2].items,

        ]}
    ],
    image:Images.specs.main.macCheeseMainTruffle,
    crockery:macNCheese.crockery,
    ingredients:[
        ...macNCheese.ingredients,
        Ingredients.topping.pizza.veg.mushrooms90,
        Ingredients.garnish.oil.rapeseed10,
        Ingredients.garnish.oil.truffle3,
        Ingredients.garnish.friedOnion.friedOnion10,
        Ingredients.garnish.leaf.parsley
    ],
    type:'main',
    variant : true,

}
const macNCheeseChicken : specInput = {
    title:Titles.macCheese.chicken,
    builds:[
        {title:'Prep',items:[
            "Defrost the mac'n'cheese in the fridge overnight",
            'Portion out into portion pots',
            'Cut chicken strips into thumb nail sized pieces once cooked'
        ]},
        {title:'Cooking',items:[
            'Deep fry chicken strips',
            "Microwave the mac'n'cheese into a round enamel dish. Top with the prep mac crumb",
            'Place into the pizza oven on a steel tray to gratinate',
        ]},
        {title:'Plating',items:[
            'Once fully cooked, place enamel round plate',
            'Garnish with fried chicken pieces, bacon bits and Revs relish',
            'Serve with a hot flag'
        ]}
    ],
    image:Images.specs.main.macCheeseMainChicken,
    crockery:[
        Crockery.plate.enamelRound,
        Crockery.bowl.enamelDish,
        Crockery.stick.hot
    ],
    ingredients:[
        ...macNCheese.ingredients,
        Ingredients.chicken.meat.stripPlain,
        Ingredients.burger.sauce.relish,
        Ingredients.topping.bacon.bacon10
    ],
    type:'main',
    variant : true,
}
const friedChickenChips : specInput = {
    title:Titles.chickenChips.fried.meat,
    builds:[
        {title:'Cooking',items:[
            'Fry the chicken until golden and crispy',
            'Deep fry fries until golden, season with the salt',
            'Re-heat the BBQ beans, top with crispy bacon bits and serve in large white square ramekin',
            'Re-heat the truffle gravy and serve in a large white square remekin',
        ]},
        {title:'Plating',items:[
            'Serve with slaw as per the photo'
        ]}
    ],
    image:Images.specs.main.friedChicken,
    crockery:[
        Crockery.tray.enamel,
        Crockery.paper.brandedGreaseProof,
        "3 x "+Crockery.ramekin
    ],
    ingredients:[
        Ingredients.chicken.meat.breast.breast200,
        Ingredients.side.fries.fries200,
        Ingredients.side.beans.bbq.bbq115,
        Ingredients.topping.bacon.bacon5,
        Ingredients.veg.slaw.coleslaw.coleslaw80,
        Ingredients.burger.gravy75
    ],
    type:'main',
    variant : false,
}
const friedChickenChipsVe : specInput = {
    title:Titles.chickenChips.fried.vegan,
    builds:[
        {title:'Cooking',items:[
            'Fry the chicken until golden and crispy',
            'Deep fry fries until golden, season with the salt',
            'Re-heat the BBQ beans, top with crispy bacon bits and serve in large white square ramekin',
            'Re-heat the truffle gravy and serve in a large white square remekin',
        ]},
        {title:'Plating',items:[
            'Serve with slaw as per the photo'
        ]}
    ],
    image:Images.specs.main.friedChickenVe,
    crockery:[
        Crockery.tray.enamel,
        Crockery.paper.brandedGreaseProof,
        "3 x "+Crockery.ramekin
    ],
    ingredients:[
        Ingredients.chicken.nonMeat.breast, // Make this good pls
        Ingredients.chicken.nonMeat.breast,
        Ingredients.side.fries.fries200,
        Ingredients.side.beans.bbq.bbq115,
        Ingredients.topping.bacon.bacon5,
        Ingredients.veg.slaw.slaw.slaw80,
        Ingredients.burger.gravy75
    ],
    type:'main',
    variant : true,

}
const cajunChickenChips : specInput = {
    title:Titles.chickenChips.cajun.meat,
    builds:[
        {title:'Cooking',items:[
            'Grill the chicken until golden and crispy',
            'Deep fry fries until golden, season with the salt',
            'Re-heat the BBQ beans, top with crispy bacon bits and serve in large white square ramekin',
            'Re-heat the truffle gravy and serve in a large white square remekin',
        ]},
        {title:'Plating',items:[
            'Serve with slaw as per the photo'
        ]}
    ],
    image:Images.specs.main.cajunChicken,
    crockery:[
        Crockery.tray.enamel,
        Crockery.paper.brandedGreaseProof,
        "3 x "+Crockery.ramekin
    ],
    ingredients:[
        Ingredients.chicken.meat.breast.breast200,
        Ingredients.side.fries.fries200,
        Ingredients.side.beans.bbq.bbq115,
        Ingredients.topping.bacon.bacon5,
        Ingredients.veg.slaw.coleslaw.coleslaw80,
        Ingredients.burger.gravy75
    ],
    type:'main',
    variant : false,

}
const cajunChickenChipsVe : specInput = {
    title:Titles.chickenChips.cajun.vegan,
    builds:[
        {title:'Cooking',items:[
            'Grill the chicken until golden and crispy',
            'Deep fry fries until golden, season with the salt',
            'Re-heat the BBQ beans, top with crispy bacon bits and serve in large white square ramekin',
            'Re-heat the truffle gravy and serve in a large white square remekin',
        ]},
        {title:'Plating',items:[
            'Serve with slaw as per the photo'
        ]}
    ],
    image:Images.specs.main.cajunChicken,
    crockery:[
        Crockery.tray.enamel,
        Crockery.paper.brandedGreaseProof,
        "3 x "+Crockery.ramekin
    ],
    ingredients:[
        Ingredients.chicken.meat.breast.breast200,
        Ingredients.side.fries.fries200,
        Ingredients.side.beans.bbq.bbq115,
        Ingredients.topping.bacon.bacon5,
        Ingredients.veg.slaw.coleslaw.coleslaw80,
        Ingredients.burger.gravy75
    ],
    type:'main',
    variant : true,

}

const main1 = new SpecItem(grainBowl,1);
const main2 = new SpecItem(asainSalad,1);
const main4 = new SpecItem(flatBreadVe,1);
const main5 = new SpecItem(flatBreadFalafel,1);
const main6 = new SpecItem(chickenCaesar,1);
const main7 = new SpecItem(fishChips,1);
const main8 = new SpecItem(katsuChicken,1,['vegan','show']);
const main9 = new SpecItem(katsuChickenVe,1,['vegan','active']);
const main10 = new SpecItem(macNCheese,1,['truffle','show'],['chicken','show']);
const main11 = new SpecItem(macNCheeseTruffle,1,['truffle','active']);
const main12 = new SpecItem(macNCheeseChicken,1,['chicken','active']);
const main13 = new SpecItem(friedChickenChips,1,['vegan','show']);
const main14 = new SpecItem(friedChickenChipsVe,1,['vegan','active']);
const main15 = new SpecItem(cajunChickenChips,1,['vegan','show']);
const main16 = new SpecItem(cajunChickenChipsVe,1,['vegan','active']);

export default [main1,main2,main4,main5,main6,main7,main8,main9,main10,main11,main12,
main13,main14,main15,main16];