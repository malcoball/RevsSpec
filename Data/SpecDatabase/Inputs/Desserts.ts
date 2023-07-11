import { specInput } from "../../@types/types";
import Images from "../../Images";
import { Crockery } from "../Crockery";
import { Ingredients } from "../Ingredients";
import { SpecItem } from "../DatabaseCore";
import SpecTitles from "../Titles";

const Titles = SpecTitles.dessert;

const brownie : specInput = {
    title:Titles.brownie,
    builds:[
        {title:'Prep',items:[
            'Fully de-frost the dessert before service',
            'Cut the brownie pieces into half, serving 3 x half pieces on a plate.',
        ]},
        {title:'Cooking',items:[
            'Warm the brownie in the microwave for 20 secs.',
        ]},
        {title:'Plating',items:[
            'Run a swirl of chocolate sauce around the plate as per the photo, and place the brownie in the centre.',
            'Place 1 scoop of vanilla ice cream on top of the brownie.',
            'Garnish with a half strawberry.'
        ]}
    ],
    image:Images.specs.dessert.brownie,
    crockery:[
        Crockery.plate.speckledRectangle
    ],
    ingredients:[
        Ingredients.dessert.brownie.brownie15,
        Ingredients.sauce.chocolate.chocolate20,
        Ingredients.dessert.iceCream.iceCream1,
        Ingredients.fruit.strawberry.strawberry20
    ],
    type:'dessert',
    variant : false,
}
const cookieDough : specInput = {
    title:Titles.smore,
    builds:[
        {title:'Prep',items:[
            'Break the cookie into pieces and put in a paella pan broken in to pieces with the nutella and marshmallows',
        ]},
        {title:'Cooking',items:[
            'Bake for 30 seconds to a minute to glaze the marshmallows and melt the chocolate'
        ]},
        {title:'Plating',items:[
            'Remove from oven and top with 2 x 50nk scoops if vanilla pod ice cream',
            'Zig zag with chocolate sauce & dust with icing sugar'
        ]}
    ],
    image:Images.specs.dessert.cookie,
    crockery: [
        Crockery.pan.paella,
        Crockery.plate.enamelRound,
        Crockery.napkin,
        Crockery.stick.hot
    ],

    ingredients:[
        Ingredients.dessert.cookie.cookie1,
        Ingredients.sauce.chocolate.nutella.nutella60,
        Ingredients.dessert.marshmellow.mash20,
        Ingredients.sauce.chocolate.chocolate20,
        Ingredients.dessert.iceCream.iceCream2,
        Ingredients.garnish.icingSugar
    ],
    type:'dessert',
    variant : false,
}
const iceCream : specInput = {
    title:Titles.iceCream,
    builds:[
        {title:'Plating',items:['3 scoops of vanilla ice cream in a triangle bowl']}
    ],
    image:Images.specs.dessert.icecream,
    crockery:[Crockery.bowl.triangle],
    ingredients:[Ingredients.dessert.iceCream.iceCream3],
    type:'dessert',
    variant : false,
}
const waffle : specInput = {
    title:Titles.waffles,
    builds:[
        {title:'Prep',items:['Slice the strawberry thinly']},
        {title:'Cooking',items:['Warm the waffle in the pizza oven for 1 minute.',]},
        {title:'Plating',items:[
            'Place waffle on plate',
            'Fan strawberry out over the waffle as per photo',
            'Place a scoop of ice cream in the top',
            'Garnish with a zig zag of salted caramel sauce'
        ]}
    ],
    image:Images.specs.dessert.waffle,
    crockery:[Crockery.plate.blueRim],
    ingredients:[
        Ingredients.dessert.waffle.waffle1,
        Ingredients.fruit.strawberry.strawberry60,
        Ingredients.sauce.caramel.caramel20,
        Ingredients.dessert.iceCream.iceCream1
    ],
    type:'dessert',
    variant : false,
}
const torte : specInput = {
    title:Titles.torte,
    builds:[
        {title:'Prep',items:['Fully de-frost the dessert before service']},
        {title:'Plating',items:[
            'Run a swirl of chocolate sauce around the plate as per the photo, and place the torte in the centre.',
            'Garnish with a mint spring'
        ]}
    ],
    image:Images.specs.dessert.torte,
    crockery:[Crockery.plate.blueRim],
    ingredients:[
        Ingredients.dessert.torte,
        Ingredients.garnish.mint.mint2g,
        Ingredients.sauce.chocolate.chocolate10
    ],
    type:'dessert',
    variant : false,
}

const dessert1 = new SpecItem(brownie,1);
const dessert2 = new SpecItem(cookieDough,1);
const dessert3 = new SpecItem(iceCream,1);
const dessert4 = new SpecItem(waffle,1);
const dessert5 = new SpecItem(torte,1);

export default[dessert1,dessert2,dessert3,dessert4,dessert5];