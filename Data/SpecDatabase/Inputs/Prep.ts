import { SpecItem } from "../DatabaseCore";
import SpecTitles from "../Titles";
import Images from "../../Images";
import { Ingredients } from "../Ingredients";
import { specInput } from "../../@types/types";
import { Crockery } from "../Crockery";
import Cooking from "../Cooking";

const Titles = SpecTitles.bulk;
const Finish = 'Cover, label, date, refrigerate';
const Mix = ' Mix all ingredients together well';

const beerBbq : specInput = {
    title:Titles.sauce.beerBBQ,
    ingredients:[
        Ingredients.sauce.bbq.bbq100,
        Ingredients.lager.amstel.amstel25
    ],
    builds:[
        {title:'Prep',items:[
            'Mix the ingredients together well',
            Finish
        ]}
    ],
    image:Images.specs.default,
    crockery:[],
    variant : false,
    type:'prep',
}
const beerBatter : specInput = {
    title:Titles.batter,
    ingredients:[
        Ingredients.other.batter.batter500,
        Ingredients.other.water.water800,
        Ingredients.seasoning.salt2,
        Ingredients.lager.amstel.amstel200
    ],
    builds:[
        {title:'Prep',items:[
            ' Combine ingredients well with a whisk.',
            Finish
        ]}
    ],
    image:Images.specs.default,
    crockery:[],
    type:'prep',
    variant : false,

};
const bbqMustardMayo : specInput = {
    title:Titles.sauce.bbqMustardMayo,
    ingredients:[
        Ingredients.sauce.mayo.mayo100,
        Ingredients.sauce.bbq.beerbbq50,
        Ingredients.sauce.mustard.french25  
    ],
    builds:[
        {title:'Prep',items:[
            ' Mix all the ingredients together well.',
            Finish
        ]}
    ],
    image:Images.specs.default,
    crockery:[],
    type:'prep',
    variant : false,

}
const bbqBeans : specInput = {
    title:Titles.bbqBeans,
    ingredients:[
        Ingredients.side.beans.beans100,
        Ingredients.sauce.bbq.bbq15
    ],
    builds:[
        {title:'Prep',items:[
            'Re-heat the beans in the microwave.',
            'Stir in the bbq'
        ]}
    ],
    image:Images.specs.default,
    crockery:[],
    type:'prep',
    variant : false,

};
const beerMacNCheeseBBQ : specInput = {
    title:Titles.beerMacCheese,
    ingredients:[
        Ingredients.other.macNCheese.mac450,
        Ingredients.lager.amstel.amstel50
    ],
    builds:[
        {title:'Prep',items:[
            'De-frost the mac n cheese, combine both ingredients cold, mix well',
            'Yield: 500g batch',
            Finish
        ]}
    ],
    image:Images.specs.default,
    crockery:[],
    type:'prep',
    variant : false,

};
const blueCheeseMayo : specInput = {
    title:Titles.sauce.blueCheeseMayo,
    ingredients:[
        Ingredients.cheese.blueCheese.slices150,
        Ingredients.sauce.mayo.mayo300
    ],
    builds:[
        {title:'Prep',items:[
            'Chop the cheese slices into small pieces and mix well with the mayonnaise',
            Finish
        ]}
    ],
    image:Images.specs.default,
    crockery:[],
    type:'prep',
    variant : false,

};
const croutons : specInput = {
    title:Titles.croutons,
    ingredients:[
        Ingredients.garnish.oil.olive20,
        Ingredients.seasoning.salt,
        Ingredients.other.sourdough.sourdough70
    ],
    builds:[
        {title:'Prep',items:[
            'Cut a thick slice into rough pieces about 2cm square',
            'Toss in olive oil and salt, bake in the oven until golden',
            'Keep on the pass for service. Keep airtight after service for 3 days',
            'For service, re-fresh in the oven to crisp up before serving.'
        ]}
    ],
    image:Images.specs.default,
    crockery:[],
    type:'prep',
    variant : false,

};
const cookedPulledChicken : specInput = {
    title:Titles.chicken.pulledChicken,
    ingredients:[
        Ingredients.chicken.meat.breast.breast200,
        Ingredients.garnish.oil.rapeseed5,
        Ingredients.burger.seasoning.rs2
    ],
    builds:[
        {title:'Prep',items:[
            'Oil the chicken breast & season',
            `In a hot pan, seal the chicken so its brown on each side, place in to the oven and cook through for 4-5
            minutes. Ensure a core temperature of 75°C (82°C in Scotland) is achieved`,
            'Allow to cook',
            'Pull each chicken into 10 pieces',
            Finish
        ]}
    ],
    image:Images.specs.default,
    crockery:[],
    type:'prep',
    variant : false,

};
const chilliVodkaSalsa : specInput = {
    title:Titles.sauce.salsa,
    ingredients:[
        Ingredients.other.salsa.salsa500,
        Ingredients.topping.pizza.veg.redOnion40,
        Ingredients.garnish.leaf.coriander5,
        Ingredients.vodka.chilli35
    ],
    builds:[
        {title:'Prep',items:[
            'Finely dice the red onion',
            'Wash & chop the coriander',
            'In a large bowl mix together the red onion, chilli vodka, salsa then add the chopped coriander',
            Finish
        ]}
    ],
    image:Images.specs.default,
    crockery:[],
    type:'prep',
    variant : false,

};
const cajunMarinatedChicken = {
    main : <specInput>{
        title:Titles.chicken.cajunChicken.main, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.chicken.meat.breast.breast600,
            Ingredients.seasoning.cajun.cajun10,
            Ingredients.garnish.oil.rapeseed15
        ],
        builds:[
            {title:'Prep',items:[
                'Butterfly the chicken breast in half length ways, do not cut all the way through',
                'Leave whole for 200g main course',
                'Mix the oil with the cajun spice',
                'Cover all sides of the chicken in the marinade',
                Finish
            ]},
            {title:'Cooking',items:[
                'In a hot pan with no oil, sear the chicken on both sides until blackened',
                'Transfer to a tray if not cooked through to finish in the oven.'
            ]}
        ],
        variant : false,
    },
    burgers : <specInput> {
        title:Titles.chicken.cajunChicken.burger, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.chicken.meat.breast.breast600,
            Ingredients.seasoning.cajun.cajun10,
            Ingredients.garnish.oil.rapeseed15
        ],
        builds:[
            {title:'Prep',items:[
                'Butterfly the chicken breast in half length ways, do not cut all the way through',
                'Cut into 50g (for strips) and 150g (for burgers)',
                'Mix the oil with the cajun spice',
                'Cover all sides of the chicken in the marinade',
                Finish
            ]},
            {title:'Cooking',items:[
                'In a hot pan with no oil, sear the chicken on both sides until blackened',
                'Transfer to a tray if not cooked through to finish in the oven.'
            ]}
        ],
        variant : false,

    },
    strip : <specInput> {
        title:Titles.chicken.cajunChicken.strip, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.chicken.meat.breast.breast600,
            Ingredients.seasoning.cajun.cajun10,
            Ingredients.garnish.oil.rapeseed15
        ],
        builds:[
            {title:'Prep',items:[
                ' Cut the breast all the way through in half length ways, then half again = 4 strips (50g each) per breast.',
                'Mix the oil with the cajun spice',
                'Cover all sides of the chicken in the marinade',
                Finish
            ]},
            {title:'Cooking',items:[
                'In a hot pan with no oil, sear the chicken on both sides until blackened',
                'Transfer to a tray if not cooked through to finish in the oven.'
            ]}
        ],
    variant : false,
    },
    veMain : <specInput>{
        title:Titles.chicken.cajunChickenVe.main, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.chicken.nonMeat.breast600,
            Ingredients.seasoning.cajun.cajun10,
            Ingredients.garnish.oil.rapeseed15
        ],
        builds:[
            {title:'Prep',items:[
                'Keep whole for mains',
                'Mix the oil with the cajun spice',
                'Cover all sides of the chicken in the marinade',
                Finish
            ]},
            {title:'Cooking',items:[
                'In a hot pan with no oil, sear the chicken on both sides until blackened',
                'Transfer to a tray if not cooked through to finish in the oven.'
            ]}
        ],
    variant : false,

    },
    veStrip : <specInput>{
        title:Titles.chicken.cajunChickenVe.strip, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.chicken.nonMeat.breast600,
            Ingredients.seasoning.cajun.cajun10,
            Ingredients.garnish.oil.rapeseed15
        ],
        builds:[
            {title:'Prep',items:[
                'Cut 1 piece into 3 strips',
                'Mix the oil with the cajun spice',
                'Cover all sides of the chicken in the marinade',
                Finish
            ]},
            {title:'Cooking',items:[
                'In a hot pan with no oil, sear the chicken on both sides until blackened',
                'Transfer to a tray if not cooked through to finish in the oven.'
            ]}
        ],
    variant : false,

    },
}

const coleslaw ={
    standard : <specInput> {
        title:Titles.coleslaw.standard, image:Images.specs.default, crockery:[],type:'prep',
        builds:
        [{title:'Prep',items:[
            'Mix all ingredients together'
        ]}],
        ingredients:[
            Ingredients.sauce.mayo.mayo30,
            Ingredients.veg.slaw.slaw.slaw50,
            Ingredients.seasoning.salt05,
            Ingredients.seasoning.crackedBlackPepper05
        ],
    variant : false,

    },
    ve : <specInput> {
        title:Titles.coleslaw.vegan, image:Images.specs.default, crockery:[],type:'prep',
        builds:
        [{title:'Prep',items:[
            'Mix all ingredients together'
        ]}],
        ingredients:[
            Ingredients.sauce.dressing.french10,
            Ingredients.veg.slaw.slaw.slaw50,
            Ingredients.seasoning.salt05,
            Ingredients.seasoning.crackedBlackPepper05
        ],
    variant : false,

    },
};
const cookedBacon : specInput = {
    title:Titles.bacon, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[Ingredients.other.bacon.bacon1k],
    builds:[{title:'Cooking',items:[
        'Lay out the bacon on the baking trays keeping the slices seperate.',
        'Cook until crispy on both sides in the oven at 200°C. Make sure it is crispy.'
    ]},{title:'Prep',items:[
        'Keep whole for burgers, brunch',
        'Chop into small bacon bits for bacon bits',
        Finish
    ]}],
    variant : false,

}
const flatBread : specInput = {
    title:Titles.flatBread, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.dough.half,
        Ingredients.garnish.oil.olive
    ],
    builds:[{title:'Prep',items:[
        'Using half a dough ball, stretch out to 6” round and dock to create holes to stop it rising',
        'Drizzle with olive oil',
        'After Cooking',
        'Cut the round in to 8 wedges',
        'Make to order, do not make in advance'
    ]},
        {title:'Cooking',items:[
        'Bake in the pizza oven for 2-3 minutes turning regularly'
        ]}],
    variant : false,

};
const friedChicken : {main:specInput,burger:specInput,strips:specInput} = {
    main: {
        title:Titles.chicken.friedChicken.main, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.chicken.meat.breast.breast600,
            Ingredients.other.yoghurt.yoghurt110,
            Ingredients.other.breading.breading90,
            Ingredients.garnish.oil.rapeseed60g
        ],
        builds:[{title:'Prep',items:[
            `Weigh the inner fillet, if it is less than 50g cook in the oven as seasoned pulled chicken for sandwiches and
            pizzas, Weigh the chicken breast, if it is more than 200g trim down and cook this for pulled chicken for the
            pizzas and sandwiches`,
            'Butterfly the chicken breast in half length ways, do not cut all the way through',
            'Leave whole for 200g main course',
            'For service : ',
            'Coat the chicken in the soy yoghurt.',
            ' Then coat the chicken in the gluten free breading.',
        ]},
        {title:'Cooking',items:[
            'Fry at 180°C for 3-4 mins until golden and crispy. Ensure a core temperature of 75°C (82°C in Scotland) is achieved. Do not season.'
        ]}],
    variant : false,

    },
    burger: {
        title:Titles.chicken.friedChicken.breast, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.chicken.meat.breast.breast600,
            Ingredients.other.yoghurt.yoghurt110,
            Ingredients.other.breading.breading90,
            Ingredients.garnish.oil.rapeseed60g
        ],
        builds:[{title:'Prep',items:[
            `Weigh the inner fillet, if it is less than 50g cook in the oven as seasoned pulled chicken for sandwiches and
            pizzas, Weigh the chicken breast, if it is more than 200g trim down and cook this for pulled chicken for the
            pizzas and sandwiches`,
            'Butterfly the chicken breast in half length ways, do not cut all the way through',
            ' Cut into 50g (for strips) and 150g (for burgers).',
            'For service : ',
            'Coat the chicken in the soy yoghurt.',
            ' Then coat the chicken in the gluten free breading.',
        ]},
        {title:'Cooking',items:[
            'Fry at 180°C for 3-4 mins until golden and crispy. Ensure a core temperature of 75°C (82°C in Scotland) is achieved. Do not season.'
        ]}],
    variant : false,

    },
    strips: {
        title:Titles.chicken.friedChicken.strip, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.chicken.meat.breast.breast600,
            Ingredients.other.yoghurt.yoghurt110,
            Ingredients.other.breading.breading90,
            Ingredients.garnish.oil.rapeseed60g
        ],
        builds:[{title:'Prep',items:[
            `Weigh the inner fillet, if it is less than 50g cook in the oven as seasoned pulled chicken for sandwiches and
            pizzas, Weigh the chicken breast, if it is more than 200g trim down and cook this for pulled chicken for the
            pizzas and sandwiches`,
            'Cut the breast all the way through in half length ways, then half again = 4 strips (50g each) per breast.',
            'For service : ',
            'Coat the chicken in the soy yoghurt.',
            ' Then coat the chicken in the gluten free breading.',
        ]},
        {title:'Cooking',items:[
            'Fry at 180°C for 3-4 mins until golden and crispy. Ensure a core temperature of 75°C (82°C in Scotland) is achieved. Do not season.'
        ]}],
    variant : false,

    },
}
const friedChickenVE : {main:specInput,strips:specInput}={
    main:{
        title:Titles.chicken.friedChickenVe.main, image:Images.specs.default, crockery:[],type:'prep',
        ingredients:[
            Ingredients.chicken.nonMeat.breast600,
            Ingredients.other.yoghurt.yoghurt110,
            Ingredients.other.breading.breading90,
            Ingredients.garnish.oil.rapeseed60g
        ],
        builds:[{title:'Prep',items:[
            'Leave the plant based chicken whole',
            'Coat the chicken in soy yoghurt',
            'Then coat the chicken in the gluten free breading',

        ]},
            {title:'Cooking',items:[
            ' Fry at 180°C for 3-4 mins until golden and crispy. Ensure a core temperature of 75°C (82°C in Scotland) is achieved. Do not season.'
            ]}],
    variant : false,

    },
    strips:{
        title:Titles.chicken.friedChickenVe.strip, image:Images.specs.default, crockery:[],type:'prep',
        ingredients:[
            Ingredients.chicken.nonMeat.breast600,
            Ingredients.other.yoghurt.yoghurt110,
            Ingredients.other.breading.breading90,
            Ingredients.garnish.oil.rapeseed60g
        ],
        builds:[{title:'Prep',items:[
            ' Cut the plant based chicken into 3 pieces',
            'Coat the chicken in soy yoghurt',
            'Then coat the chicken in the gluten free breading',

        ]},
            {title:'Cooking',items:[
            ' Fry at 180°C for 3-4 mins until golden and crispy. Ensure a core temperature of 75°C (82°C in Scotland) is achieved. Do not season.'
            ]}],
    variant : false,

    },
}
const gravy : specInput = {
    title:Titles.gravy.standard, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.other.gravy.granules80,
        Ingredients.other.water.water1000
    ],
    builds:[
        {title:'Prep',items:[
            "Heat the water in a pan and when it's warm whisk in the gravy granules",
            'Whisk regularly until it boils and thickens (this is for a thick gravy).',
            Finish
        ]}
    ],
    variant : false,

}
const harissaHummus : specInput = {
    title:Titles.harissaHummus, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.dip.hummus.hummus300,
        Ingredients.seasoning.cajun.cajun10,
        Ingredients.garnish.mint.mint2g
    ],
    builds:[
        {title:'Prep',items:[
            'Finely chop the mint',
            'Mix ingredients well',
            Finish
        ]}
    ],
    variant : false,

};
const limePickleMayo : specInput = {
    title:Titles.sauce.limePickleMayo, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.sauce.mayo.mayo200,
        Ingredients.sauce.limePickle.limePickle50,
        Ingredients.seasoning.cumin.cumin3,
        Ingredients.garnish.leaf.coriander5,
        Ingredients.garnish.leaf.corianderGround.coriander5,
        Ingredients.garnish.mint.mint3g,
        Ingredients.seasoning.curry.curry2
    ],
    builds:[
        {title:'Prep',items:[
            'Finely chop the lime pickle',
            'Finely chop the herbs',
            'Mix all the ingredients together',
            Finish
        ]}
    ],
    variant : false,

}
const macNCheeseCrumb : specInput = {
    title:Titles.macCheeseCrumb, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.other.breadCrumbs.breadCrumbs100,
        Ingredients.topping.pizza.mozzarella.mozzarella50
    ],
    builds:[{title:'Prep',items:[
        'Combine ingredients together well',
        Finish
    ]}],
    variant : false,

};
const roastedRedPepper : specInput = {
    title:Titles.pepper, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.veg.redPepper.pepper135,
        Ingredients.garnish.oil.rapeseed10
    ],
    builds:[{title:'Prep',items:[
        'Cut the pepper in to large slices and lay flat on a baking tray',
        'sprinkle over oil',
        'Roast in the oven until soft and slightly charred',
        'Allow to cool',
        'Slice into 2cm strips',
        Finish
    ]}],
    variant : false,

};
const saltPepperSeasoning : specInput = {
    title:Titles.saltPepperFrySeasoning, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.seasoning.cajun.cajun10,
        Ingredients.seasoning.crackedBlackPepper05,
        Ingredients.seasoning.salt5
    ],
    builds:[{title:'Prep',items:[
        'Mix all ingredients together well',
        Finish
    ]}],
    variant : false,

};
const srirachaMayo : specInput = {
    title:Titles.sauce.srirachaMayo, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.sauce.mayo.mayo100,
        Ingredients.sauce.sriracha.sriracha30
    ],
    builds:[{title:'Prep',items:[
        Mix,Finish
    ]}],
    variant : false,

};
const truffleGravy : specInput = {
    title:Titles.gravy.truffle, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.topping.gravy.gravy.gravy200,
        Ingredients.garnish.oil.truffle5
    ],
    builds:[{title:'Prep',items:[
        Mix,Finish
    ]}],
    variant : false,

};
const doughBalls : specInput = {
    title:Titles.doughballs.standard, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.dough.half,
        Ingredients.sauce.garlicButter.garlicButter30
    ],
    builds:[
        {title:'Prep',items:[
            'Cut the half pizza dough ball into 12 and roll into dough ball shape',
            'Bake in the pizza oven for 2-3 mins at 300°c in a round enamel dish',
            ' Toss in the garlic butter towards the end and finish the balls back in the oven for 30-60 secs.'
        ]}
    ],
    variant : false,

}
const doughBallsVe : specInput = {
    title:Titles.doughballs.vegan, image:Images.specs.default, crockery:[], type:'prep',
    ingredients:[
        Ingredients.dough.half,
        Ingredients.garnish.oil.olive30,
        Ingredients.seasoning.salt05,
        Ingredients.seasoning.crackedBlackPepper05
    ],
    builds:[
        {title:'Prep',items:[
            'Cut the half pizza dough ball into 12 and roll into dough ball shape',
            'Bake in the pizza oven for 2-3 mins at 300°c in a round enamel dish',
            'When the doughballs are nearly done, toss in olive oil and seasoning, then finish for final 30-60 secs.'
        ]}
    ],
    variant : false,

}
const sliders : {meat:specInput,veggie:specInput,vegan:specInput} = {
    meat : {
        title:Titles.sliders.beef, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.burger.bun.slider1,
            Ingredients.burger.sauce.relish10,
            Ingredients.burger.veg.iceberg5,
            Ingredients.burger.burger.beef.slider,
            Ingredients.burger.cheese.standardHalf,
            Ingredients.garnish.oil.rapeseed7
        ],
        builds:[
            {title:'Prep',items:[
                'Break a burger in to 75g (1/2) & Roll each burger piece into a ball then flatten to 7mm thick',
                'Place these on the griddle using the oil with a red spatula and cook for 3 minutes',
                'Melt the cheese over the top using the closh and water',
                'Slice the slider buns through the middle. Toast until golden brown',
                'Build : ',
                'Toasted bun',
                'Revs relish',
                'Lettuce',
                'Burger',
                'Cheese',
                'Lid & Skewer'
            ]}
        ],
    variant : false,

    },
    veggie : {
        title:Titles.sliders.veggie, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.burger.bun.slider1,
            Ingredients.burger.sauce.relish10,
            Ingredients.burger.veg.iceberg5,
            Ingredients.burger.burger.beef.sliderV1,
            Ingredients.burger.cheese.standardHalf,
            Ingredients.garnish.oil.rapeseed7
        ],
        builds:[
            {title:'Prep',items:[
                'Break 1 burger in half & roll each burger piece into a ball then flatten to approx mm thick.',
                'Place these on the griddle using the oil with a red spatula and cook for 3 minutes',
                'Melt the cheese over the top using the closh and water',
                'Slice the slider buns through the middle. Toast until golden brown',
                'Build : ',
                'Toasted bun',
                'Revs relish',
                'Lettuce',
                'Burger',
                'Cheese',
                'Lid & Skewer'
            ]}
        ],
    variant : false,

    },
    vegan : {
        title:Titles.sliders.vegan, image:Images.specs.default, crockery:[], type:'prep',
        ingredients:[
            Ingredients.burger.bun.slider1,
            Ingredients.burger.sauce.relish10,
            Ingredients.burger.veg.iceberg5,
            Ingredients.burger.burger.beef.sliderV1,
            Ingredients.burger.cheese.standardHalf,
            Ingredients.garnish.oil.rapeseed7
        ],
        builds:[
            {title:'Prep',items:[
                'Break 1 burger in half & roll each burger piece into a ball then flatten to approx mm thick.',
                'Place these on the griddle using the oil with a red spatula and cook for 3 minutes',
                'Melt the cheese over the top using the closh and water',
                'Slice the slider buns through the middle. Toast until golden brown',
                'Build : ',
                'Toasted bun',
                'Revs relish',
                'Lettuce',
                'Burger',
                'Cheese',
                'Lid & Skewer'
            ]}
        ],
    variant : false,

    },
}

const prep1 = new SpecItem(beerBbq,"125 g");
const prep2 = new SpecItem(beerBatter,"1502 g");
const prep3 = new SpecItem(bbqMustardMayo,"175 g");
const prep4 = new SpecItem(bbqBeans,"115 g");
const prep5 = new SpecItem(beerMacNCheeseBBQ,"500 g");
const prep6 = new SpecItem(blueCheeseMayo,"500 g");
const prep7 = new SpecItem(croutons,"80 g");
const prep8 = new SpecItem(cookedPulledChicken,"200 g");
const prep9 = new SpecItem(chilliVodkaSalsa,"2320 g");
const prep10 = new SpecItem(cajunMarinatedChicken.burgers,"4 burgers");
const prep11 = new SpecItem(cajunMarinatedChicken.main,"3 mains",['vegetarian','show']);
const prep12 = new SpecItem(cajunMarinatedChicken.strip,"12 strips",['vegetarian','show']);
const prep13 = new SpecItem(cajunMarinatedChicken.veMain,1,['vegetarian','active']);
const prep14 = new SpecItem(cajunMarinatedChicken.veStrip,1,['vegetarian','active']);
const prep15 = new SpecItem(coleslaw.standard,"80 g");
const prep16 = new SpecItem(coleslaw.ve,"61 g");
const prep17 = new SpecItem(cookedBacon,"300 g");
const prep18 = new SpecItem(flatBread,"1 piece");
const prep19 = new SpecItem(friedChicken.burger,"4 burgers")
const prep20 = new SpecItem(friedChicken.main,"3 mains",['vegan','show'])
const prep21 = new SpecItem(friedChicken.strips,"12 strips",['vegan','show'])
const prep22 = new SpecItem(friedChickenVE.main,"6 mains",['vegan','active']);
const prep23 = new SpecItem(friedChickenVE.strips,"16 strips",['vegan','active']);
const prep24 = new SpecItem(gravy,"1 lot");
const prep25 = new SpecItem(harissaHummus,"312 g");
const prep26 = new SpecItem(limePickleMayo,"265 g");
const prep27 = new SpecItem(macNCheeseCrumb,"150 g");
const prep28 = new SpecItem(roastedRedPepper,"145 g");
const prep29 = new SpecItem(saltPepperSeasoning,"20 g");
const prep30 = new SpecItem(srirachaMayo,"130 g");
const prep31 = new SpecItem(truffleGravy,"205 g");
const prep32 = new SpecItem(doughBalls,"12 g",['vegan','show']);
const prep33 = new SpecItem(doughBallsVe,"12 g",['vegan','active']);
const prep34 = new SpecItem(sliders.meat,"1 sliders",['vegan','show'],['vegetarian','show']);
const prep35 = new SpecItem(sliders.veggie,"1 sliders",['vegetarian','active']);
const prep36 = new SpecItem(sliders.vegan,"1 sliders",['vegan','active']);

export default [prep1,prep2,prep3,prep4,prep5,prep6,prep7,prep8,prep9,
prep10,prep11,prep12,prep13,prep14,prep15,prep16,prep17,prep18,prep19,
prep20,prep21,prep22,prep23,prep24,prep25,prep26,prep27,prep28,prep29,
prep30,prep31,prep32,prep33,prep34,prep35,prep36];