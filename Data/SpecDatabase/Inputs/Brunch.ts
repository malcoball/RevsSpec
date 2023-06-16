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
            Ingredients.other.sourdough.sourdough70,
            Ingredients.veg.avo.avocado100,
            Ingredients.veg.avo.smashed.smashed100,
            Ingredients.garnish.crushedChilli2,
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
        ]
    },
    egg : {
        title:Titles.avoToast.egg,image:Imgs.avoToast,
        type:'brunch',
        ingredients:[
            Ingredients.other.sourdough.sourdough70,
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
        ]
    },
}
const eggsBenedict : specInput = {
    title:Titles.eggsBenedict.standard, image:Images.specs.brunch.eggsBenedict,
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
    ]
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
    ]
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
    ]
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
            Ingredients.other.sourdough.sourdough70,
            
        ],

    }
}