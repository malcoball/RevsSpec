import { SpecItem } from "../DatabaseCore";
import { build,  specInput } from "../../@types/types";
import { Ingredients } from "../Ingredients";
import SpecTitles from "../Titles";
import { Crockery } from "../Crockery";
import Images from "../../Images";
const Titles = SpecTitles.grazer;

const calamari : specInput = {
    title:Titles.calamari,
    builds :[{
        title:'Cooking',
        items:[
            `Deep fry the calamari from frozen in hot oil at 180°c for 3
            minutes, until just cooked and still very tender.
            Ensure a core temperature of 75°C (82°C in Scotland) is
            achieved. Drain well. Don't season.`,
        ]
    },{
        title:'Plating',
        items :[
            `Stack the calamari centrally onto the plate, garnish with
            parsley.`,
            `Serve with a lemon wedge and a metal dip pot of mayo.`
        ]
    }],
    image:Images.specs.grazers.calamari,
    crockery : [
        Crockery.plate.small,
        Crockery.dipPot
    ],
    ingredients :[
        Ingredients.grazer.calamari,
        Ingredients.garnish.oil.rapeseed10,
        Ingredients.garnish.lemon.wedge,
        Ingredients.dip.saucePot.mayo,
        Ingredients.garnish.leaf.parsley
    ],
    type:'grazer',
    variant : false,
}
const halloumi: specInput  = {
    title: Titles.halloumi,
    builds :[{
        title:'Cooking',
        items:[
            `. Deep fry the halloumi until golden, crispy & hot in the
           centre. Ensure a core temperature of 75°C (82°C in
           Scotland) is achieved.`,
        ]
    },{
        title:'Plating',
        items :[
           `Serve as per the photo with the dip pot of relish`
        ]
    }],
    image:Images.specs.grazers.halloumi,
    crockery : [
        Crockery.bowl.triangle,
        Crockery.dipPot
    ],
    ingredients :[
        Ingredients.grazer.halloumi,
        Ingredients.dip.saucePot.relish,
        
    ],
    type:'grazer',
    variant : false,

}
const bbqChick : {meat:specInput,vegan:specInput} = {
    meat : {
        title:Titles.skewers.bbq,
        builds :[{
            title:'Cooking',
            items:[
                `Cut each half breast in to 50g strips. Each chicken skewer
                should have 50g of chicken.`,
                `Cook the chicken skewers on the flattop/chargrill for 2-3
                mins each side. Season with salt then glaze with garlic butter,
                place in a tray and finish in the oven. Ensure a core tempera-
                ture of 75°C (82°C in Scotland).`,
                `Once up to temperature, add BBQ sauce and coat the
                chicken in the metal tray.`,
            ]
        },{
            title:'Plating',
            items :[
               `Serve on the small speckled plate with dip pot of BBQ
               sauce (35g) as per the photo.`
            ]
        }],
        image:Images.specs.grazers.skewers.bbq,
        crockery : [
            Crockery.plate.small,
            `3 x ${Crockery.stick.large}`,
            Crockery.dipPot
        ],
        ingredients :[
            Ingredients.grazer.skewers.bbq,
            Ingredients.sauce.garlicButter.garlicButter10,
            Ingredients.sauce.bbq.bbq50,
            Ingredients.seasoning.salt05,
            Ingredients.dip.saucePot.bbq,
        ],
        type:'grazer',
        variant : false,
    },
    vegan:{
        title:Titles.skewers.bbqVe,
        builds :[{
            title:'Cooking',
            items:[
               `From frozen, you can de-frost the vegan chicken in the
               microwave for 2 mins on auto de-frost. Cut the piece in to 3
               strips.`,
               `Cook the skewers in a pan for 2-3 mins each side & finish
               in the oven if needed. Ensure a core temperature of 75°C
               (82°C in Scotland).`,
               `Once up to temperature, add BBQ sauce to fully coat and
               add the wooden skewers.`,
            ]
        },{
            title:'Plating',
            items :[
               `Arrange the chicken skewers on the small round plate
               with 35g BBQ Sauce in a small metal ramekin.`
            ]
        }],
        image:Images.specs.grazers.skewers.bbq,
        crockery : [
            Crockery.plate.small,
            `3 x ${Crockery.stick.large}`,
            Crockery.dipPot,
            Crockery.stick.vegan
        ],
        ingredients :[
            Ingredients.chicken.nonMeat.breast,
            Ingredients.sauce.bbq.bbq50,
            Ingredients.seasoning.salt05,
            Ingredients.dip.saucePot.bbq,
        ],
        type:['grazer','vegan'],
        variant : true,
    }
}
const cajChick : {meat:specInput,veggie:specInput} = {
    meat:{
        title:Titles.skewers.cajun,
        builds :[{
            title:'Cooking',
            items:[
                `Cut each half breast in to 50g strips. Each chicken skewer
               should have 50g of chicken. Marinade the chicken skewers
               in Cajun seasoning.`,
               `Cook the chicken skewers on the flattop/chargrill for 2-3
               mins each side. Char slightly for flavour and colour.`,
               `Place the skewers on a tray and cover in garlic butter,
               finish in the oven for 2 mins. Ensure a core temperature of
               75°C (82°C in Scotland).`,
            ]
        },{
            title:'Plating',
            items :[
               `Serve on the small speckled plate with dip pot of sour
               cream (35g) as per the photo.`
            ]
        },],
        image:Images.specs.grazers.skewers.cajun,
        crockery : [
            Crockery.plate.small,
            `3 x ${Crockery.stick.large}`,
            Crockery.dipPot
        ],
        ingredients :[
            Ingredients.grazer.skewers.cajun,
            Ingredients.sauce.garlicButter.garlicButter10,
            Ingredients.dip.saucePot.sourCream,
        ],
        type:'grazer',
        variant : false,
    },
    veggie:{
        title:Titles.skewers.cajunV,
        builds :[{
            title:'Cooking',
            items:[
                `From frozen, you can de-frost the vegan chicken in the
                microwave for 2 mins on auto de-frost. Cut the piece in to 3
                strips.`,
                `Cook the chicken in a pan for 2-3 mins each side.`,
                `Place the chicken on a tray and cover in garlic butter, fin-
                ish in the oven for 2 mins. Ensure a core temperature of 75°C
                (82°C in Scotland).`,
                `Once up to temperature, add the wooden skewers.`,]
        },{
            title:'Plating',
            items :[
               `Arrange the chicken skewers on the plate.`,
               `Serve with a metal dip pot of sour cream.`
            ]
        }],
        image:Images.specs.grazers.skewers.cajunV,
        crockery : [
            Crockery.plate.small,
            `3 x ${Crockery.stick.large}`,
            Crockery.dipPot,
            Crockery.stick.veggie
        ],
        ingredients :[
            Ingredients.grazer.skewers.cajunV,
            Ingredients.sauce.garlicButter.garlicButter10,
            Ingredients.dip.saucePot.sourCream
        ],
        type:['grazer','vegetarian'],
        variant : true,
    }
}

const macBites: specInput  = {
    title:Titles.macBites,
    builds : [{
        title:'Cooking',
        items : [
            `Fry the mac'n'cheese bites until golden and crispy. Ensure
            a core temperature of 75°C (82°C in Scotland).`,
            ` Heat the pizza sauce in the microwave, and spoon into the
            bowl.`,
        ]
    },{
        title:'Plating',
        items : [
            `Serve the balls on top and garnish with a dot of sour
            cream and chopped parsley as per the photo.`
        ],
    }],
    image:Images.specs.grazers.macBites,
    crockery : [
        Crockery.bowl.triangle
    ],
    ingredients : [
        Ingredients.grazer.macBites,
        Ingredients.sauce.pizza.pizza50,
        Ingredients.garnish.sourCream,
        Ingredients.garnish.leaf.parsley
    ],
    type:'grazer' ,
    variant : false,
}
const breadedMushrooms : specInput = {
    title:Titles.breadedMushrooms,
    builds :[{
        title:'Cooking',
        items:[
            `Deep fry (approx) 8 mushrooms until golden and crispy.
            Ensure a core temperature of 75°C (82°C in Scotland).`,
        ]
    },{
        title:'Plating',
        items :[
            ` Serve as per the photo with blue cheese mayo, garnish
            with chopped parsley.`
        ]
    }],
    image:Images.specs.grazers.breadedMushrooms,
    crockery: [
        Crockery.plate.small,
        Crockery.dipPot
    ],
    ingredients :[
        Ingredients.grazer.breadedMushrooms,
        Ingredients.dip.saucePot.blueCheeseMayo,
        Ingredients.garnish.oil.rapeseed13g,
        Ingredients.garnish.leaf.parsleyHalf
    ],
    type:'grazer',
    variant : false,
}
const crispyFriedChicken : specInput = {
    title:Titles.friedChicken.meat,
    builds :[{
        title:'Cooking',
        items:[
            `Prepare chicken as per the spec.`,
            `Fry the chicken at 180°C in the fryer, it should be
            golden and crispy. Ensure a core temperature of 75°C (82°C
            in Scotland).`,
        ]
    },{
        title:'Plating',
        items:[
            `Serve with BBQ sauce and colelsaw as per the photo`
        ]
    }],
    image:Images.specs.grazers.friedChicken,
    crockery:[
        Crockery.pan.paella,
        Crockery.dipPot
    ],
    ingredients:[
        Ingredients.grazer.friedChicken.standard,
        Ingredients.dip.saucePot.bbq,
        Ingredients.side.coleslaw.md.mayo
    ],
    type:'grazer',
    variant : false,
}
const crispyFriedChickenVE : specInput = {
    title:Titles.friedChicken.vegan,
    builds :[{
        title:'Cooking',
        items:[
            `Prepare the chicken as per the spec.`,
            `Fry the chicken at 180°C in the fryer, it should be gold-
            en and crispy. Ensure a core temperature of 75°C (82°C in
            Scotland).`,
        ]
        },{
        title:'Plating',
        items:[
            `Serve with BBQ sauce and colelsaw as per the photo`
        ]
    }],
    image:Images.specs.grazers.friedChicken.vegan,
    crockery:[
        Crockery.pan.paella,
        Crockery.dipPot
    ],
    ingredients:[
        Ingredients.grazer.friedChicken.vegan,
        Ingredients.dip.saucePot.bbq,
        Ingredients.side.coleslaw.md.noMayo
    ],
    type:['grazer','vegan'],
    variant : true,
}

const doughballs : specInput = {
    title:Titles.doughballs,
    builds:[{
        title:'Cooking',
        items:[
            `Cut the 1/2 dough ball in to 12 and pinch each into a round
            shape.`,
            `Bake in the pizza oven for 2-3 mins at 300°c in a round
            enamel dish.`,
            `Toss in the garlic butter towards the end and finish the
            balls back in the oven for 30-60 secs.`,
        ]
        },{
        title:'Plating',
        items:[
            `Serve with chilli vodka salsa, as per the photo.`
        ]
    }],
    image:Images.specs.grazers.doughballs,
    crockery:[
        Crockery.pan.paella,
        Crockery.ramekin
    ],
    ingredients:[
        Ingredients.dough.half,
        Ingredients.sauce.garlicButter.garlicButter30,
        Ingredients.sauce.salsa.salsa50
    ],
    type:'grazer',
    variant : false,
}

const hummus : specInput = {
    title:Titles.hummus,
    builds:[{
        title:'Cooking',
        items:[
            `Prepare the flat bread (0.5 dough ball) as per the bulk spec
            and cut into 8 triangles. Cook in the oven for 2-3 mins until
            golden.`,
            `Remove from the oven and cut in to 8 triangle pieces.
            season and drizzle with E.V. Olive Oil.`,
        ]
    },{
        title:'Plating',
        items:[
            'Cut the pepper and cucumber in to large batons.',
            'Spoon both flavours of hummus in to a black paella dish side by side as per the photo.',
            `Garnish with E.V. Olive Oil, nigella seeds and coriander.`
        ]
    }],
    image:Images.specs.grazers.hummus,
    crockery:[
        Crockery.pan.paella,
    ],
    ingredients:[
        Ingredients.dip.hummus.hummus,
        Ingredients.dip.hummus.haissa,
        Ingredients.dough.half,
        Ingredients.veg.redPepper.pepper30,
        Ingredients.veg.cucumber.cucumber30,
        Ingredients.garnish.leaf.coriander,
        Ingredients.garnish.oil.olive,
        Ingredients.garnish.nigellaSeeds05
    ],
    type:'grazer',
    variant : false,
}

const falafel :specInput = {
    title:Titles.falafel.standard,
    builds :[{
        title:'Cooking',
        items:[
            `De-frost the falafel thoroughly.`,
            `Warm through in the pizza oven for 3 mins until hot in the
            centre. DO NOT OVER COOK.`,
        ]
    },{
        title:'Plating',
        items:[
            `Spread the lime pickle mayo on the base of plate`,
            'Rocket scattered over mayo',
            'Falafel',
            'Pomegranate Seeds'
        ]
    }],
    image:Images.specs.grazers.falafel,
    crockery:[
        Crockery.plate.small,
        Crockery.stick.veggie
    ],
    ingredients:[
        Ingredients.grazer.falafel,
        Ingredients.veg.rocket.rocket5,
        Ingredients.garnish.pomegranate.pomegranate5,
        Ingredients.sauce.limePickle.limePickle30
    ],
    type:'grazer',
    variant : false,
}
const falafelV :specInput = {
    title:Titles.falafel.vegan,
    builds :[{
        title:'Cooking',
        items:[
            `De-frost the falafel thoroughly.`,
            `Warm through in the pizza oven for 3 mins until hot in the
            centre. DO NOT OVER COOK.`,
        ]
    },{
        title:'Plating',
        items:[
            `Spread the lime pickle mayo on the base of plate`,
            'Rocket scattered over mayo',
            'Falafel',
            'Pomegranate Seeds'
        ]
    }],
    image:Images.specs.grazers.falafel,
    crockery:[
        Crockery.plate.small,
        Crockery.stick.vegan
    ],
    ingredients:[
        Ingredients.grazer.falafel,
        Ingredients.veg.rocket.rocket5,
        Ingredients.garnish.pomegranate.pomegranate5,
        Ingredients.dip.hummus.hummus30
    ],
    type:'grazer',
    variant : true,
}

const prawns : specInput = {
    title:Titles.prawns,
    builds :[{
        title:'Cooking',
        items:[
            `Deep fry the prawns until crispy. Ensure a core
            temperature of 75°C (82°C in Scotland).`,
        ]
    },{
        title:'Plating',
        items:[
            `Garnish with lemon wedge, chopped coriander and the
            sriracha mayo in a metal dip pot.`
        ]
    }],
    image:Images.specs.grazers.prawns,
    crockery:[
        Crockery.plate.small,
        Crockery.dipPot
    ],
    ingredients:[
        Ingredients.grazer.prawn,
        Ingredients.dip.saucePot.srirachaMayo,
        Ingredients.garnish.lemon.wedge,
        Ingredients.garnish.leaf.corianderHalf
    ],
    type:'grazer',
    variant : false,
}
const jalapenoPoppers : specInput = {
    title:Titles.jalapenoPoppers,
    builds :[{
        title:'Cooking',
        items:[
            `Deep fry 4 jalapeno poppers until crispy and golden.
            Ensure a core temperature of 75°C (82°C in Scotland).`,
        ]
    },{
        title:'Plating',
        items:[
            `Serve with hot sauce in a dip pot, as per the photo.`
        ]
    }],
    image:Images.specs.grazers.jalapenoPoppers,
    crockery:[
        Crockery.plate.small,
        Crockery.dipPot
    ],
    ingredients:[
        Ingredients.grazer.jalapoenoPoppers,
        Ingredients.dip.saucePot.buffalo
    ],
    type:'grazer',
    variant : false,

}
// const nachos : specInput = {
//     title:Titles.nachos.standard,
//     builds:[{
//         title:'Cooking',
//         items:[
//             'Heat the nacho sauce in the microwave for 20 seconds.'
//         ]
//     },{
//         title:'Plating',
//         items:[
//             'Stack half the nachos on the plate.',
//             'Drizzle half the cheese sauce on the nachos. Repeat with the other half of the nachos and cheese sauce so they are layered well.',
//             'Spoon the guacamole and salsa neatly onto the nachos',
//             'zig zag the sour cream.',
//             `Top with 5 jalapeños and fresh coriander leaves.`
//         ]
//     }],
//     image : Images.specs.grazers.nacho,
//     crockery:[
//         Crockery.pan.paella,
//         Crockery.stick.vegan
//     ],
//     ingredients:[
//         Ingredients.tortilla.grazer,
//         Ingredients.sauce.cheese.cheese60,
//         Ingredients.sauce.nacho.sourCream.sourCream25,
//         Ingredients.sauce.nacho.salsa.salsa25,
//         Ingredients.sauce.nacho.avocado.avocado25,
//         Ingredients.garnish.jalapenos.jalapenos5,
//         Ingredients.garnish.leaf.corianderGrazer
//     ],
//     type:'grazer'
// }
const nachos : {regular:specInput,beefChilli:specInput} = {
    regular:{
        title:Titles.nachos.standard,
        builds:[{
            title:'Cooking',
            items:[
                'Heat the nacho sauce in the microwave for 20 seconds.'
            ]
        },{
            title:'Plating',
            items:[
                'Stack half the nachos on the plate.',
                'Drizzle half the cheese sauce on the nachos. Repeat with the other half of the nachos and cheese sauce so they are layered well.',
                'Spoon the guacamole and salsa neatly onto the nachos',
                'zig zag the sour cream.',
                `Top with 5 jalapeños and fresh coriander leaves.`
            ]
        }],
        image : Images.specs.grazers.nacho,
        crockery:[
            Crockery.pan.paella,
        ],
        ingredients:[
            Ingredients.tortilla.grazer,
            Ingredients.sauce.cheese.cheese60,
            Ingredients.sauce.nacho.sourCream.sourCream25,
            Ingredients.sauce.nacho.salsa.salsa25,
            Ingredients.sauce.nacho.avocado.avocado25,
            Ingredients.garnish.jalapenos.jalapenos5,
            Ingredients.garnish.leaf.corianderGrazer
        ],
        type:'grazer',
        variant : false,
    },
    beefChilli:{
        title:Titles.nachos.beefChilli,
        builds:[{
            title:'Cooking',
            items:[
                'Heat the nacho sauce in the microwave for 20 seconds.'
            ]
        },{
            title:'Plating',
            items:[
                'Stack half the nachos on the plate.',
                'Drizzle half the cheese sauce on the nachos. Repeat with the other half of the nachos and cheese sauce so they are layered well.',
                'Spoon the guacamole and salsa neatly onto the nachos',
                'zig zag the sour cream.',
                `Top with 5 jalapeños and fresh coriander leaves.`
            ]
        }],
        image : Images.specs.grazers.nacho,
        crockery:[
            Crockery.pan.paella,
        ],
        ingredients:[
            Ingredients.tortilla.grazer,
            Ingredients.topping.chilli.beef,
            Ingredients.sauce.cheese.cheese60,
            Ingredients.sauce.nacho.sourCream.sourCream25,
            Ingredients.sauce.nacho.salsa.salsa25,
            Ingredients.sauce.nacho.avocado.avocado25,
            Ingredients.garnish.jalapenos.jalapenos5,
            Ingredients.garnish.leaf.corianderGrazer
        ],
        type:'grazer',
        variant : true,
    }
}
const nachosVegan : {regular:specInput,chilli:specInput} = {
    regular:{
        title:Titles.nachos.vegan,
        builds:[{
            title:'Cooking',
            items:[
                `Stack half of the nachos onto a rectangular plate and cover
                with half of the grated vegan cheese, then layer the rest of
                the nachos and grated vegan cheese on top.`,
                `Heat in the microwave for 30 seconds. Be aware that the
                vegan mozzarella does not melt properly, ensure you do not
                overcook the nachos trying to melt the cheese.`,
            ]
        },{
            title:'Plating',
            items:[
                `Transfer to a black paella pan once out of the microwave.`,
                ` Spoon the guacamole and salsa neatly onto the nachos,
                zig zag the sour cream (no sour cream if vegan).`,
                `Top with 5 jalapeños and fresh coriander leaves.`
            ]
        }],
        image : Images.specs.grazers.nacho,
        crockery:[
            Crockery.pan.paella,
            Crockery.stick.vegan
        ],
        ingredients:[
            Ingredients.tortilla.grazer,
            Ingredients.cheese.vegan.grated40,
            Ingredients.sauce.nacho.sourCream.sourCream25,
            Ingredients.sauce.nacho.salsa.salsa25,
            Ingredients.sauce.nacho.avocado.avocado25,
            Ingredients.garnish.jalapenos.jalapenos5,
            Ingredients.garnish.leaf.corianderGrazer
        ],
        type:['grazer','vegan'],
        variant : true,
    },
    chilli:{
        title:Titles.nachos.veggiChilli,
        builds:[{
            title:'Cooking',
            items:[
                `Stack half of the nachos onto a rectangular plate and cover
                with half of the grated vegan cheese, then layer the rest of
                the nachos and grated vegan cheese on top.`,
                `Heat in the microwave for 30 seconds. Be aware that the
                vegan mozzarella does not melt properly, ensure you do not
                overcook the nachos trying to melt the cheese.`,
            ]
        },{
            title:'Plating',
            items:[
                `Transfer to a black paella pan once out of the microwave.`,
                ` Spoon the guacamole and salsa neatly onto the nachos,
                zig zag the sour cream (no sour cream if vegan).`,
                `Top with 5 jalapeños and fresh coriander leaves.`
            ]
        }],
        image : Images.specs.grazers.nacho,
        crockery:[
            Crockery.pan.paella,
            Crockery.stick.vegan
        ],
        ingredients:[
            Ingredients.tortilla.grazer,
            Ingredients.cheese.vegan.grated40,
            Ingredients.topping.chilli.veggie,
            Ingredients.sauce.nacho.sourCream.sourCream25,
            Ingredients.sauce.nacho.salsa.salsa25,
            Ingredients.sauce.nacho.avocado.avocado25,
            Ingredients.garnish.jalapenos.jalapenos5,
            Ingredients.garnish.leaf.corianderGrazer
        ],
        type:['grazer','vegan'],
        variant : true,
    },
    
}
const grazer1 = new SpecItem(calamari,1);
const grazer2 = new SpecItem(halloumi,1);
const grazer3 = new SpecItem(bbqChick.meat,1,['vegan','show']);
const grazer5 = new SpecItem(bbqChick.vegan,1,['vegan','active']);
const grazer4 = new SpecItem(cajChick.meat,1,['vegetarian','show']);
const grazer6 = new SpecItem(cajChick.veggie,1,['vegetarian','active']);
const grazer7 = new SpecItem(macBites,1);
const grazer8 = new SpecItem(breadedMushrooms,1);
const grazer9 = new SpecItem(crispyFriedChicken,1,['vegan','show']);
const grazer10 = new SpecItem(crispyFriedChickenVE,1,['vegan','active']);
const grazer11 = new SpecItem(doughballs,1);
const grazer12 = new SpecItem(hummus,1);
const grazer13 = new SpecItem(falafel,1,['vegan','show'],['vegetarian','active']);
const grazer14 = new SpecItem(falafelV,1,['vegan','active'],['vegetarian','show']);
const grazer15 = new SpecItem(prawns,1);
const grazer16 = new SpecItem(jalapenoPoppers,1);
const grazer17 = new SpecItem(nachos.regular,1,['vegan','show'],['chilli','show']);
const grazer18 = new SpecItem(nachos.beefChilli,1,['vegan','show'],['chilli','active']);
const grazer19 = new SpecItem(nachosVegan.regular,1,['vegan','active'],['veggieChilli','show'])
const grazer20 = new SpecItem(nachosVegan.chilli,1,['vegan','active'],['veggieChilli','active'])



export default [grazer1,grazer2,grazer3,grazer4,grazer5,grazer6,grazer7,grazer8,grazer9,grazer10,grazer11,grazer12,
    grazer13,grazer14,grazer15,grazer16,grazer17,grazer18,grazer19,grazer20];