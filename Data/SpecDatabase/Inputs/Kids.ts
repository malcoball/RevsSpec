import { SpecItem } from "../DatabaseCore";
import SpecTitles from "../Titles";
import Images from "../../Images";
import { Ingredients } from "../Ingredients";
import { specInput } from "../../@types/types";
import { Crockery } from "../Crockery";
import Cooking from "../Cooking";

const burger : specInput = {
    title:SpecTitles.kids.burger.beef.standard,
    builds:[
        {title:'Prep',items:[
            'Break the burger into quarters and roll each piece into a ball, then flatten into 7mm',
            'Slice the slider buns through the middle'
        ]},
        {title:'Cooking',items:[
            'Toast slider buns',
            'Cook these on the griddle for 3 minutes, using a little oil',
            'Melt the cheese on top using a closh and water',
        ]},
        {title:'Plating',items:[
            'Build the slider bun : ',
            'Relish',
            'Lettuce',
            'Burger',
            'Lid',
            'Skewer',
            'Serve sliders on plate',
            'Serve chosen side on plate'
        ]}
    ],
    image:Images.specs.default,
    crockery:[Crockery.plate.speckledRectangle],
    ingredients:[
        Ingredients.side.chosenSide,
        Ingredients.burger.bun.slider2,
        Ingredients.burger.burger.beef.slider2,
        Ingredients.burger.sauce.relish10,
        Ingredients.burger.veg.iceberg5
    ],
    type:'kids',
    variant : false,
};
const chickenBurger : specInput = {
    title:SpecTitles.kids.burger.friedChicken.standard,
    builds:[
        {title:'Prep',items:[
            'Slice the slider buns through the middle'
        ]},
        {title:'Cooking',items:[
            'Toast slider buns',
            'Coom chicken per spec UPDATE PLS',
        ]},
        {title:'Plating',items:[
            'Build the slider bun : ',
            'Relish',
            'Lettuce',
            'Burger',
            'Lid',
            'Skewer',
            'Serve sliders on plate',
            'Serve chosen side on plate'
        ]}
    ],
    image:Images.specs.default,
    crockery:[Crockery.plate.speckledRectangle],
    ingredients:[
        Ingredients.side.chosenSide,
        Ingredients.burger.bun.slider2,
        Ingredients.chicken.meat.goujon.strips2,
        Ingredients.burger.sauce.relish10,
        Ingredients.burger.veg.iceberg5
    ],
    type:'kids',
    variant : false,

};
const macNCheese : specInput = {
    title:SpecTitles.kids.macCheese,
    builds:[
        {title:'Prep',items:[
            'Prepare the 1/2 garlic bread as per spec UPDATE PLS',
        ]},
        {title:'Cooking',items:[
            'Heat the mac N cheese in a portion pot for 1 minute',
        ]},
        {title:'Plating',items:[
            "Serve the mac 'N' cheese in a COLD enamel dish",
            "Place mac 'N' cheese on rectangle plate",
            "Place garlic bread on rectangle plate",
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.plate.speckledRectangle,
        Crockery.bowl.enamelDish
    ],
    ingredients:[
        Ingredients.other.macNCheese.mac225,
        Ingredients.dough.half,
        Ingredients.sauce.garlicButter.garlicButter30
    ],
    type:'kids',
    variant : false,

}
const fishFingers : specInput = {
    title:SpecTitles.kids.fishFingers,
    builds:[
        {title:'Cooking',items:[
            'Deep fry the fish fingers. Drain well'
        ]},
        {title:'Plating',items:[
            'Serve on the plate with the chosen side'
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.plate.speckledRectangle
    ],
    ingredients:[
        Ingredients.garnish.oil.rapeseed50g,
        Ingredients.fish.fingers.fingers4
    ],
    type:'kids',
    variant : false,

}
const friedChicken : specInput = {
    title:SpecTitles.kids.friedChicken,
    builds:[
        {title:'Cooking',items:[
            'Cook the chicken strips as per spec UPDATE PLS'
        ]},
        {title:'Plating',items:[
            'Place the chicken on plate',
            'Place side on plate'
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.plate.speckledRectangle
    ],
    ingredients:[
        Ingredients.chicken.meat.goujon.strips2
    ],
    type:'kids',
    variant : false,

}
const sausages : specInput = {
    title:SpecTitles.kids.sausages,
    builds:[
        {title:'Cooking',items:[
            'Heat the sausages in the microwave for 40 seconds'
        ]},
        {title:'Plating',items:[
            'Serve on plate with chosen side'
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.plate.speckledRectangle
    ],
    ingredients:[
        Ingredients.other.sausage.sausage2
    ],
    type:'kids',
    variant : false,

}
const margherita : specInput = {
    title:SpecTitles.kids.pizza.marg.standard,
    builds:[
        {title:'Prep',items:[
            'De-frost the dough and prove in fridge for 12 hours or overnight',
            'Bring to room temp before use',
            'Hand stretch the half dough 6" elongated rectangle (like a skinny pizza)',
            'Build the pizza : ',
            'Pizza sauce',
            'Basil torn',
            'Mozzarella'
        ]},
        {title:'Cooking',items:[
            'Bake for 2-3 minutes, turning 1/2 way through'
        ]},
        {title:'Plating',items:[
            'Serve on a speckled rectangular plate with a pizza wheel'
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.plate.speckledRectangle,
        Crockery.cutlery.pizza
    ],
    ingredients:[
        Ingredients.dough.half,
        Ingredients.other.flour.flour5,
        Ingredients.sauce.pizza.pizza35,
        Ingredients.garnish.leaf.basil,
        Ingredients.topping.pizza.mozzarella.mozzarella35
    ],
    type:['kids','pizza'],
    variant : false,

}
const pepperoni : specInput = {
    title:SpecTitles.kids.pizza.pepperoni.standard,
    builds:[
        {title:'Prep',items:[
            'De-frost the dough and prove in fridge for 12 hours or overnight',
            'Bring to room temp before use',
            'Hand stretch the half dough 6" elongated rectangle (like a skinny pizza)',
            'Build the pizza : ',
            'Pizza sauce',
            'Mozzarella',
            'Pepperoni'
        ]},
        {title:'Cooking',items:[
            'Bake for 2-3 minutes, turning 1/2 way through'
        ]},
        {title:'Plating',items:[
            'Serve on a speckled rectangular plate with a pizza wheel'
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.plate.speckledRectangle,
        Crockery.cutlery.pizza
    ],
    ingredients:[
        Ingredients.dough.half,
        Ingredients.other.flour.flour5,
        Ingredients.sauce.pizza.pizza35,
        Ingredients.topping.pizza.mozzarella.mozzarella35,
        Ingredients.topping.pizza.pepperoni.pepperoni10
    ],
    type:['kids','pizza'],
    variant : false,

};
const fries : specInput = {
    title:SpecTitles.kids.fries,
    builds:[
        {title:'Cooking',items:[
            Cooking.fries.regular,
        ]},
        {title:'Plating',items:[
            'Serve in an enamel dish'
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.bowl.enamelDish
    ],
    ingredients:[
        Ingredients.side.fries.fries100,
        Ingredients.garnish.oil.rapeseed10
    ],
    type:'kids',
    variant : false,

};
const sweetcorn : specInput = {
    title:SpecTitles.kids.sweetcorn,
    builds:[
        {title:'Cooking',items:[
            'Heat the sweetcorn in the microwave for 20 seconds',
        ]},
        {title:'Plating',items:[
            'Serve in a square white ramekin',
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.ramekin
    ],
    ingredients:[
        Ingredients.veg.sweetcorn.sweetcorn50
    ],
    type:'kids',
    variant : false,

}
const salad : specInput = {
    title:SpecTitles.kids.salad,
    builds:[
        {title:'Prep',items:[
            'Salad lulz UPDATE PLS'
        ]}
    ],
    image:Images.specs.sides.salad,
    crockery:[
        Crockery.bowl.triangle
    ],
    ingredients:[

    ],
    type:'kids',
    variant : false,

}
const brownie : specInput = {
    title:SpecTitles.kids.dessert.brownie,
    builds:[
        {title:'Plating',items:[
            'Place the 1/2 brownie on to the plate',
            'Scoop vanilla ice cream and place on the top',
            'Garnish with a half strawberry and chocolate sauce'
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.plate.small
    ],
    ingredients:[
        Ingredients.dessert.brownie.brownie15,
        Ingredients.fruit.strawberry.strawberry20,
        Ingredients.dessert.iceCream.iceCream1,
        Ingredients.sauce.chocolate.chocolate10
    ],
    type:['kids','dessert'],
    variant : false,

};
const iceCream1 : specInput = {
    title:SpecTitles.kids.dessert.iceCream1,
    builds:[
        {title:'Plating',items:[
            'Scoop ice cream into speckled triangle bowl'
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.bowl.triangle
    ],
    ingredients:[
        Ingredients.dessert.iceCream.iceCream1
    ],
    type:['kids','dessert'],
    variant : false,

}
const iceCream2 = {...iceCream1}; 
iceCream2.ingredients = [Ingredients.dessert.iceCream.iceCream2]; iceCream2.title = SpecTitles.kids.dessert.iceCream2;

const chocMilk : specInput = {
    title:SpecTitles.kids.milk.chocolate,
    ingredients:[
        Ingredients.sauce.chocolate.chocolate25,
        Ingredients.other.milk.milk200
    ],
    builds:[
        {title:'Prep',items:[
            'Ice up a boston tin, then add the chocolate sauce and milk',
            'Shake thoroughly and strain into a freshly iced jam jar',
            'Serve with straw'
        ]}
    ],
    image:Images.specs.default,
    crockery:[
        Crockery.jamJar
    ],
    type:['kids','dessert'],
    variant : false,

}
const strawberryMilk = {...chocMilk};
strawberryMilk.title = SpecTitles.kids.milk.strawberry;
strawberryMilk.ingredients[0] = Ingredients.sauce.strawberry.strawberry25;
strawberryMilk.builds[0].items[0] = 'Ice up a boston tin, then add the strawberry puree and milk';

const kid1 = new SpecItem(burger,1)
const kid2 = new SpecItem(chickenBurger,1);
const kid3 = new SpecItem(macNCheese,1);
const kid4 = new SpecItem(fishFingers,1);
const kid5 = new SpecItem(friedChicken,1);
const kid6 = new SpecItem(sausages,1);
const kid7 = new SpecItem(margherita,1);
const kid8 = new SpecItem(pepperoni,1);
const kid9 = new SpecItem(fries,1);
const kid10 = new SpecItem(sweetcorn,1);
const kid11 = new SpecItem(salad,1);
const kid12 = new SpecItem(brownie,1);
const kid13 = new SpecItem(iceCream1,1);
const kid14 = new SpecItem(iceCream2,1);
const kid15 = new SpecItem(chocMilk,1);
const kid16 = new SpecItem(strawberryMilk,1);

export default [kid1,kid2,kid3,kid4,kid5,kid6,kid7,kid8,kid9,kid10,kid11,kid12,kid13,kid14,kid15,kid16];