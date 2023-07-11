import { specInput } from "../../@types/types";
import Images from "../../Images";
import { Crockery } from "../Crockery";
import { SpecItem } from "../DatabaseCore";
import { Ingredients } from "../Ingredients";
import SpecTitles from "../Titles";

const Titles = SpecTitles.sharer;

const nachos : specInput = {
    title:Titles.nachos.standard.standard,
    builds:[
        {title:'Cooking',items:[
            'Heat the cheese sauce in the microwave for 20 seconds'
        ]},
        {title:'Plating',items:[
            'Stack half the nachos flat on the plate',
            'Drizzle half the cheese sauce on the nachos.',
            "Repeat with the other half of the nachos and cheese sauce so they're layered well",
            'Spoon the guacamole and salsa neatly onto the nachos',
            'Zig zag the sour cream',
            'Top with 10 jalapeños and fresh coriander leaves'
        ]}
    ],
    image:Images.specs.sharer.standard,
    crockery:[
        Crockery.tray.enamel,
    ],
    ingredients:[
        Ingredients.nachos.nacho150,
        Ingredients.sauce.cheese.cheese120,
        Ingredients.sauce.nacho.sourCream.sourCream50,
        Ingredients.sauce.nacho.salsa.salsa50,
        Ingredients.sauce.nacho.avocado.avocado50,
        Ingredients.garnish.jalapenos.jalapenos10,
        Ingredients.garnish.leaf.coriander5
    ],
    type:'sharer',
    variant : false,

}
const nachosVe : specInput = {
    title:Titles.nachos.vegan.standard,
    builds:[
        {title:'Cooking',items:[
            'Stack half of the nachos onto a rectangular plate and cover with half of the grated cheese.',
            'Repeat with another layer',
            'Heat in the microwave for 30 seconds',
        ]},
        {title:'Plating',items:[
            'Once heated, transfer to an enamel tray',
            'Spoon the guacamole and salsa neatly onto the nachos',
            'Top with 10 jalapeños',
            'Top with fresh croiander leaves'
        ]}
    ],
    image:Images.specs.sharer.vegan,
    crockery:[
        Crockery.tray.enamel,
        Crockery.stick.vegan
    ],
    ingredients:[
        Ingredients.nachos.nacho150,
        Ingredients.topping.cheese.vegan.veganCheese100,
        Ingredients.sauce.nacho.salsa.salsa50,
        Ingredients.sauce.nacho.avocado.avocado50,
        Ingredients.garnish.jalapenos.jalapenos10,
        Ingredients.garnish.leaf.coriander5,
        Ingredients.topping.cheese.vegan.veganGrated100

    ],
    type:['sharer','vegan'],
    variant : true,

}
const nachosBeefChilli : specInput = {
    title:Titles.nachos.standard.chilli.beef,
    builds:[
        {title:'Cooking',items:[
            nachos.builds[0].items[0],
            'Heat the chilli in the microwave',
        ]},
        {title:'Plating',items:[
            'Stack half the nachos flat on the plate',
            'Drizzle half the cheese sauce on the nachos.',
            'Drizzle half the chilli on the nachos.',
            "Repeat with the other half of the nachos, chilli and cheese sauce so they're layered well",
            'Spoon the guacamole and salsa neatly onto the nachos',
            'Zig zag the sour cream',
            'Top with 10 jalapeños and fresh coriander leaves'
        ]}
    ],
    image:Images.specs.sharer.standard,
    crockery:[
        Crockery.tray.enamel,
    ],
    ingredients:[
        Ingredients.nachos.nacho150,
        Ingredients.topping.chilli.beef200,
        Ingredients.sauce.cheese.cheese120,
        Ingredients.sauce.nacho.sourCream.sourCream50,
        Ingredients.sauce.nacho.salsa.salsa50,
        Ingredients.sauce.nacho.avocado.avocado50,
        Ingredients.garnish.jalapenos.jalapenos10,
        Ingredients.garnish.leaf.coriander
    ],
    type:'sharer',
    variant : true,

}
const nachosBeefChilliV : specInput = {
    title:Titles.nachos.veggie.chilli.veggie,
    builds:[
        nachosBeefChilli.builds[0],
        {title:'Plating',items:[
            'Stack half the nachos flat on the plate',
            'Drizzle half the cheese sauce on the nachos.',
            'Drizzle half the chilli on the nachos.',
            "Repeat with the other half of the nachos, chilli and cheese sauce so they're layered well",
            'Spoon the guacamole and salsa neatly onto the nachos',
            'Zig zag the sour cream',
            'Top with 10 jalapeños and fresh coriander leaves'
        ]}
    ],
    image:Images.specs.sharer.vegan,
    crockery:[
        Crockery.tray.enamel,
    ],
    ingredients:[
        Ingredients.nachos.nacho150,
        Ingredients.topping.chilli.veggie200,
        Ingredients.sauce.cheese.cheese120,
        Ingredients.sauce.nacho.sourCream.sourCream50,
        Ingredients.sauce.nacho.salsa.salsa50,
        Ingredients.sauce.nacho.avocado.avocado50,
        Ingredients.garnish.jalapenos.jalapenos10,
        Ingredients.garnish.leaf.coriander
    ],
    type:['sharer','vegetarian'],
    variant : true,

}
const nachosBeefChilliVe : specInput = {
    title:Titles.nachos.vegan.chilli.veggie,
    builds:[
        {title:'Cooking',items:[
            'Heat the chilli in the microwave',
            'Stack half of the nachos onto a rectangular plate and cover with half of the grated cheese.',
            'Repeat with another layer',
            'Heat in the microwave for 30 seconds',
        ]},
        {title:'Plating',items:[
            'Once heated, transfer to an enamel tray',
            'Spoon the guacamole and salsa neatly onto the nachos',
            'Top with 10 jalapeños',
            'Top with fresh croiander leaves'
        ]}
    ],
    image:Images.specs.sharer.vegan,
    crockery:[
        Crockery.tray.enamel,
    ],
    ingredients:[
        Ingredients.nachos.nacho150,
        Ingredients.topping.chilli.veggie,
        Ingredients.sauce.cheese.cheese120,
        Ingredients.sauce.nacho.sourCream.sourCream50,
        Ingredients.sauce.nacho.salsa.salsa50,
        Ingredients.sauce.nacho.avocado.avocado50,
        Ingredients.garnish.jalapenos.jalapenos10,
        Ingredients.garnish.leaf.coriander,
        Ingredients.dip.saucePot.bbq,
        Ingredients.dip.saucePot.sourCream,
        Ingredients.dip.saucePot.relish,
    ],
    type:['sharer','vegan'],
    variant : true,

}
const houseSharer : specInput = {
    title:Titles.houseSharer.meat,
    builds:[
        {title:'Prep',items:[
            '1/2 portion of nachos in an enamel dish',
            '6 dough balls tossed in garlic butter and garnish with parsley',
            'Slider bun w/ relish, iceberg',
            'BBQ dip pot',
            'Sriracha mayo dip pot',
            'Relish dip pot',
        ]},
        {title:'Cooking',items:[
            'Cook and prepare the 2 sliders',
            'Fry the chicken 4 strips, no seasoning',
            'Deep fry the 6 onion rings',
            'Deep fry the 4 jalapeno poppers',
        ]},
        {title:'Plating',items:[
            'Everything served on a board, lined with branded grease proof paper',
            'Sauces in the center',
            'In a clock-wise rotation : ',
            'Nachos',
            'Dough balls',
            'Jalapeno poppers',
            'Sliders',
            'Onion rings',
            'Chicken strips'
        ]}
    ],
    image:Images.specs.sharer.house.meat,
    crockery: [
        Crockery.pizza.paddle,
        "3 " + Crockery.dipPot + 's',
        Crockery.bowl.enamelDish,
        Crockery.paper.brandedGreaseProof
    ],
    ingredients:[
        Ingredients.burger.burger.beef.slider2,
        Ingredients.burger.cheese.standardHalf,
        Ingredients.burger.bun.slider2,
        Ingredients.chicken.meat.goujon.strips4,
        Ingredients.nachos.nacho75,
        Ingredients.sauce.nacho.avocado.avocado25,
        Ingredients.sauce.nacho.sourCream.sourCream25,
        Ingredients.sauce.nacho.salsa.salsa25,
        Ingredients.garnish.jalapenos.jalapenos5,
        Ingredients.sauce.cheese.cheese60,
        Ingredients.garnish.leaf.parsleyHalf,
        Ingredients.dough.quarter,
        Ingredients.sauce.garlicButter.garlicButter30,
        Ingredients.side.onionRings.onion6,
        Ingredients.side.jalapenoPopper.jalapenoPopper4,
        Ingredients.dip.saucePot.bbq,
        Ingredients.dip.saucePot.sourCream,
        Ingredients.dip.saucePot.relish,
    ],
    type:'sharer',
    variant : false,

}
const houseSharerV : specInput = {
    title:Titles.houseSharer.veggie,
    builds:[
        {title:'Prep',items:[
            '1/2 portion of nachos in an enamel dish',
            '6 dough balls tossed in garlic butter and garnish with parsley',
            'Slider bun w/ relish, iceberg',
            'BBQ dip pot',
            'Sriracha mayo dip pot',
            'Relish dip pot',
        ]},
        {title:'Cooking',items:[
            'Cook and prepare the 2 sliders',
            'Fry the chicken 4 strips, no seasoning',
            'Deep fry the 6 onion rings',
            'Deep fry the 4 jalapeno poppers',
        ]},
        {title:'Plating',items:[
            'Everything served on a board, lined with branded grease proof paper',
            'Sauces in the center',
            'In a clock-wise rotation : ',
            'Nachos',
            'Dough balls',
            'Jalapeno poppers',
            'Sliders',
            'Onion rings',
            'Chicken strips'
        ]}
    ],
    image:Images.specs.sharer.house.veggie,
    crockery: [
        Crockery.pizza.paddle,
        "3 " + Crockery.dipPot + 's',
        Crockery.bowl.enamelDish,
        Crockery.paper.brandedGreaseProof
    ],
    ingredients:[
        Ingredients.burger.burger.beef.sliderV2,
        Ingredients.burger.cheese.standardHalf,
        Ingredients.burger.bun.slider2,
        Ingredients.chicken.meat.goujonVe.strips4,
        Ingredients.nachos.nacho75,
        Ingredients.sauce.nacho.avocado.avocado25,
        Ingredients.sauce.nacho.sourCream.sourCream25,
        Ingredients.sauce.nacho.salsa.salsa25,
        Ingredients.garnish.jalapenos.jalapenos5,
        Ingredients.sauce.cheese.cheese60,
        Ingredients.garnish.leaf.parsleyHalf,
        Ingredients.dough.quarter,
        Ingredients.sauce.garlicButter.garlicButter30,
        Ingredients.side.onionRings.onion6,
        Ingredients.side.jalapenoPopper.jalapenoPopper4,
        Ingredients.dip.saucePot.bbq,
        Ingredients.dip.saucePot.sourCream,
        Ingredients.dip.saucePot.relish,
    ],
    type:['sharer','vegetarian'],
    variant : true,

}
const houseSharerVe : specInput = {
    title:Titles.houseSharer.vegan,
    builds:[
        {title:'Prep',items:[
            '1/2 portion of nachos in an enamel dish',
            '6 dough balls tossed in garlic butter and garnish with parsley',
            'Slider bun w/ relish, iceberg',
            'BBQ dip pot',
            'Sriracha mayo dip pot',
            'Relish dip pot',
        ]},
        {title:'Cooking',items:[
            'Cook and prepare the 2 sliders',
            'Fry the chicken 4 strips, no seasoning',
            'Deep fry the 6 onion rings',
            'Deep fry the 4 jalapeno poppers',
        ]},
        {title:'Plating',items:[
            'Everything served on a board, lined with branded grease proof paper',
            'Sauces in the center',
            'In a clock-wise rotation : ',
            'Nachos',
            'Dough balls',
            'Jalapeno poppers',
            'Sliders',
            'Onion rings',
            'Chicken strips'
        ]}
    ],
    image:Images.specs.sharer.house.vegan,
    crockery: [
        Crockery.pizza.paddle,
        "3 " + Crockery.dipPot + 's',
        Crockery.bowl.enamelDish,
        Crockery.paper.brandedGreaseProof
    ],
    ingredients:[
        Ingredients.burger.burger.beef.sliderV2,
        Ingredients.burger.bun.slider2,
        Ingredients.side.falafel.falalfel4,
        Ingredients.nachos.nacho75,
        Ingredients.sauce.nacho.avocado.avocado25,
        Ingredients.sauce.nacho.salsa.salsa25,
        Ingredients.garnish.jalapenos.jalapenos5,
        Ingredients.topping.cheese.vegan.veganCheese50,
        Ingredients.garnish.leaf.parsleyHalf,
        Ingredients.dough.quarter,
        Ingredients.side.onionRings.onion6,
        Ingredients.side.jalapenoPopper.jalapenoPopper4,
        Ingredients.dip.saucePot.bbq,
        Ingredients.dip.saucePot.sriracha,
        Ingredients.dip.saucePot.salsa,
    ],
    type:['sharer','vegan'],
    variant : true,

}

const sharer1 = new SpecItem(nachos,1,['vegan','show']);
const sharer2 = new SpecItem(nachosVe,1,['vegan','active']);
const sharer3 = new SpecItem(nachosBeefChilli,1,['vegetarian','show'],['vegan','show']);
const sharer4 = new SpecItem(nachosBeefChilliV,1,['vegetarian','active']);
const sharer5 = new SpecItem(nachosBeefChilliVe,1,['vegan','active']);
const sharer6 = new SpecItem(houseSharer,1,['vegetarian','show'],['vegan','show']);
const sharer7 = new SpecItem(houseSharerV,1,['vegetarian','active']);
const sharer8 = new SpecItem(houseSharerVe,1,['vegan','active']);

export default [sharer1,sharer2,sharer3,sharer4,sharer5,sharer6,sharer7,sharer8];