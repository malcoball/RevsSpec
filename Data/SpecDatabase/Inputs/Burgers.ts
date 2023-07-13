import { SpecItem } from "../DatabaseCore";
import SpecTitles from "../Titles";
import Images from "../../Images";
import { ingredient, specInput } from "../../@types/types";
import { Ingredients } from "../Ingredients";
import { Crockery } from "../Crockery";
import Cooking from "../Cooking";

const Titles = SpecTitles.burger;

// Single ingredients
const Bacon = Ingredients.burger.bacon;
const Bun  = Ingredients.burger.bun.standard;
const BunGF  = Ingredients.burger.bun.GF;
const BlueCheeseMayo  = Ingredients.burger.sauce.blueCheeseMayo;
const CheeseSauce  = Ingredients.burger.sauce.cheese;
const CheeseSlice = Ingredients.burger.cheese.standard;
const CheeseSliceHalf = Ingredients.burger.cheese.standardHalf;
const BlueCheeseSlice = Ingredients.burger.cheese.blue;
const VeganCheeseSlice = Ingredients.burger.cheese.vegan;
const Fries  = Ingredients.side.fries.standard;
const Coleslaw  = Ingredients.side.coleslaw.md.mayo;
const Slaw = Ingredients.side.coleslaw.md.noMayo;
const ColeslawSml  = Ingredients.side.coleslaw.sml.mayo;
const SlawSml  = Ingredients.side.coleslaw.sml.noMayo;
const FranksSauce  = Ingredients.burger.sauce.franks;
const Pickles  = Ingredients.burger.garnish.pickles;
const Gravy = Ingredients.burger.gravy;
const Iceberg  = Ingredients.burger.veg.iceberg;
const Relish  = Ingredients.burger.sauce.relish;
const BeefBurger = Ingredients.burger.burger.beef.meat;
const MeatlessBurger = Ingredients.burger.burger.beef.meatless;
const GrilledChickBurger = Ingredients.chicken.meat.cajun.cajun150;
const FriedChickBurger = Ingredients.chicken.meat.fried;
const FriedChickBurgerVE = Ingredients.chicken.nonMeat.breast;
const Tortilla = Ingredients.burger.garnish.tortilla;
const FriedOnion = Ingredients.burger.garnish.friedOnion;
const CajunSeasoning = Ingredients.seasoning.cajun.cajun1;
const BeefChilli = Ingredients.topping.chilli.beef;
const VeggieChilli = Ingredients.topping.chilli.veggie;
const CrushedChilli = Ingredients.burger.garnish.crushedChillis1;
const seasoning = Ingredients.burger.seasoning.seasoning;
const rsSeasoning = Ingredients.burger.seasoning.rs;
// Ingredients
const BurgerIngredients :ingredient[] = [Bun,Relish,Pickles,Iceberg,BeefBurger,seasoning,Fries,ColeslawSml];
const BurgerIngredientsGF :ingredient[] = [...BurgerIngredients]; BurgerIngredientsGF[0] = BunGF;
const BurgerIngredientsVeg :ingredient[] = [...BurgerIngredients]; BurgerIngredientsVeg[4] = MeatlessBurger; BurgerIngredientsVeg[7] = SlawSml;
const BurgerIngredientsGFVeg :ingredient[] = [BunGF,Relish,Iceberg,Pickles,MeatlessBurger,SlawSml];
const ChickenIngredients :ingredient[] = [Bun,Relish,Iceberg,Pickles,GrilledChickBurger,seasoning,Fries,Coleslaw];
const ChickenIngredientsGF :ingredient[] = [...ChickenIngredients]; ChickenIngredientsGF[0] = BunGF;
const FriedChickIngredients :ingredient[] = [Bun,Relish,Iceberg,Pickles,FriedChickBurger,seasoning,Fries,Coleslaw];
const FriedChickIngredientsVeg :ingredient[] = [...FriedChickIngredients]; FriedChickIngredientsVeg[4] = FriedChickBurgerVE; FriedChickIngredientsVeg[7] = Slaw
const FriedChickIngredientsGF :ingredient[] = [...FriedChickIngredients]; FriedChickIngredientsGF[0] = BunGF;
const FriedChickIngredientsVegGF :ingredient[] = [...FriedChickIngredientsVeg]; FriedChickIngredientsVegGF[0] = BunGF;
const CheeseBaconBurgerIngredients :ingredient[] = [Bun,BeefBurger,rsSeasoning,Relish,Iceberg,CheeseSlice,CheeseSauce,Bacon,Fries,Coleslaw];
const CheeseBaconBurgerIngredientsGF :ingredient[] = [...CheeseBaconBurgerIngredients]; CheeseBaconBurgerIngredientsGF[0] = BunGF;
const BlueCheeseTruffleIngredients : ingredient[] = [Bun,BlueCheeseMayo,Iceberg,seasoning,BeefBurger,BlueCheeseSlice,Gravy,Fries,Coleslaw];
const BlueCheeseTruffleIngredientsGF : ingredient[] = [BunGF,BlueCheeseMayo,Iceberg,seasoning,BeefBurger,BlueCheeseSlice,Gravy,Fries,Coleslaw];
const BlueCheeseTruffleIngredientsVeggie : ingredient[] = [Bun,BlueCheeseMayo,Iceberg,seasoning,MeatlessBurger,BlueCheeseSlice,Gravy,Fries,Slaw];
const BlueCheeseTruffleIngredientsGFVeggie : ingredient[] = [BunGF,BlueCheeseMayo,Iceberg,seasoning,MeatlessBurger,BlueCheeseSlice,Gravy,Fries,Slaw];
const BuffaloChickenIngredients :ingredient[] = [Bun,BlueCheeseMayo,Iceberg,FriedChickBurger,FranksSauce,Pickles,Fries,Coleslaw];
const BuffaloChickenGFIngredients :ingredient[] = [...BuffaloChickenIngredients]; BuffaloChickenGFIngredients[0] = BunGF;
const BuffaloChickenVeggieIngredients :ingredient[] = [...BuffaloChickenIngredients]; BuffaloChickenVeggieIngredients[4] = FriedChickBurgerVE; BuffaloChickenVeggieIngredients[7] =Slaw;
const BuffaloChickenGFVeggieIngredients :ingredient[] = [...BuffaloChickenVeggieIngredients]; BuffaloChickenGFVeggieIngredients[0] = BunGF;
const ChilliCheeseIngredients : ingredient[] = [Bun,Iceberg,Relish,BeefBurger,CajunSeasoning,BeefChilli,CrushedChilli,CheeseSliceHalf,
Tortilla,FriedOnion,CheeseSauce,Fries,Coleslaw]
const ChilliCheeseVeggieIngredients : ingredient[] = [...ChilliCheeseIngredients]; 
ChilliCheeseVeggieIngredients[3] = MeatlessBurger; ChilliCheeseVeggieIngredients[5] = VeggieChilli;
let ChilliCheeseVeganIngredients : ingredient[] = [...ChilliCheeseVeggieIngredients]; ChilliCheeseVeganIngredients[7] = VeganCheeseSlice; 
ChilliCheeseVeganIngredients = ChilliCheeseVeganIngredients.filter((elm,ind)=>{if (ind !== 10) return elm})


// Crockerys
// const BurgerCroc = ['Large White Plate','Enamel Mug','Branded Greaseproof Paper','Large Square Ramekin','Knotted Skewer'];
const BurgerCroc = [Crockery.plate.largeWhite,Crockery.bowl.enamelMug,Crockery.paper.brandedGreaseProof,Crockery.ramekin,Crockery.stick.small]
const BurgerBlueCheeseCroc = [Crockery.plate.largeWhite,Crockery.bowl.enamelMug,Crockery.paper.brandedGreaseProof,Crockery.ramekin + "x2",Crockery.stick.small]
const BurgerBlueCheeseCrocGF = [Crockery.plate.largeWhite,Crockery.bowl.enamelMug,Crockery.paper.brandedGreaseProof,Crockery.ramekin + "x2",Crockery.stick.small,Crockery.stick.GF];
const BurgerBlueCheeseCrocVeggie = [Crockery.plate.largeWhite,Crockery.bowl.enamelMug,Crockery.paper.brandedGreaseProof,Crockery.ramekin + "x2",Crockery.stick.small,Crockery.stick.veggie];
const BurgerBlueCheeseCrocGFVeggie = [Crockery.plate.largeWhite,Crockery.bowl.enamelMug,Crockery.paper.brandedGreaseProof,Crockery.ramekin + "x2",Crockery.stick.small,Crockery.stick.veggie,Crockery.stick.GF];
const BurgerCrocVeg = [...BurgerCroc,Crockery.stick.vegan];
const BurgerCrocVeggie = [...BurgerCroc,Crockery.stick.veggie];
const BurgerCrocGF = [...BurgerCroc,Crockery.stick.GF];

const BurgerCrocGFVeg = [...BurgerCrocGF,'Vegan Flag'];
const BurgerCrocGFVeggie = [...BurgerCrocGF,'Veggie Flag'];
// Plating Builds


// Burger Builds
// const BurgerBuild = ['Toasted Base','Revs Relish','Pickles','Lettuce','Burger','Lid & Skewer'];
// const BurgerBlueCheeseBuild = [BurgerBuild[0],'Blue Cheese Mayo','Lettuce','Burger','Melted Cheese','Little gravy on burger','Rest of gravy in ramekin','Lid & Skewer'];
// const BuffaloChickenBuild = ['Toasted Base','Blue Cheese Mayo 1/2','Lettuce','Fried Chicken, tossed in Franks','Pickles','Blue Cheese Mayo 1/2','Lid'];
// const ChilliCheeseBuild = ['Season burger with cajun seasoning','']


const beefBurger : specInput = {
    title:Titles.classic.standard,
    builds:[
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.burger.beef.meat.regular,
            Cooking.fries.regular,
        ]},
        {title:'Plating',items:[
            `Toasted base`,
            `Rev's relish`,
            `Pickles`,
            `Lettuce`,
            `Burger`,
            `Lid & Skewer`,
            `Burger on plate`,
            `Fries in cup, on plate`,
            `Coleslaw in ramekin, on plate`
        ]}
    ],
    image:Images.specs.burgers.beef,
    crockery:BurgerCroc,
    ingredients:BurgerIngredients,
    type:'burger',
    variant : false,
}

const beefBurgerVegan : specInput = {
    title:Titles.classic.vegan,
    builds:[
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.burger.beef.vegan.regular,
            Cooking.fries.regular,
        ]},
        {title:'Plating',items:[
            `Toasted base`,
            `Rev's relish`,
            `Pickles`,
            `Lettuce`,
            `Burger`,
            `Lid & Skewer`,
            `Burger on plate`,
            `Fries in cup, on plate`,
            `Slaw in ramekin, on plate`
        ]}
    ],
    image:Images.specs.default,
    crockery:BurgerCrocVeg,
    ingredients:BurgerIngredientsVeg,
    type:['burger','vegan'],
    variant : true,

}

const beefBurgerGF : specInput = {
    title:Titles.classic.GF,
    builds:[
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.burger.beef.meat.regular,
            Cooking.fries.regular
        ]},
        beefBurger.builds[1]
    ],
    image:Images.specs.default,
    crockery:BurgerCrocGF,
    ingredients:BurgerIngredientsGF,
    type:['burger','glutenFree'],
    variant : true,

}
const beefBurgerGFVegan : specInput = {
    title:Titles.classic.veganGF,
    builds:[
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.burger.beef.vegan.regular,
            Cooking.fries.regular
        ]},
        beefBurgerVegan.builds[1]
    ],
    image:Images.specs.default,
    crockery:BurgerCrocGFVeg,
    ingredients:BurgerIngredientsGFVeg,
    type:['burger','glutenFree','vegan'],
    variant : true,

}

const grilledChicken : specInput = {
    title:Titles.grilledChicken.standard,
    builds:[
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.chicken.breast.cajun,
            Cooking.fries.regular
        ]},
        {title:'Plating',items:[
            `Toasted base`,
            `Rev's relish`,
            `Pickles`,
            `Lettuce`,
            `Burger`,
            `Lid & Skewer`,
            `Burger on plate`,
            `Fries in cup, on plate`,
            `Coleslaw in ramekin, on plate`
        ]}
    ],
    image:Images.specs.default,
    crockery:BurgerCroc,
    ingredients:[
        ...ChickenIngredients,
    ],
    type: 'burger',
    variant : false,
}
const grilledChickenGF : specInput = {
    title:Titles.grilledChicken.GF,
    builds:[
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.chicken.breast.cajun,
            Cooking.fries.regular
        ]},
        grilledChicken.builds[1]
    ],
    image:Images.specs.default,
    crockery:BurgerCrocGF,
    ingredients:[
        ...ChickenIngredientsGF
    ],
    type:['burger','glutenFree'],
    variant : true,

}
const friedChicken : specInput = {
    title:Titles.friedChicken.standard,
    builds:[
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.chicken.breast.fried,
            Cooking.fries.regular
        ]},
        {title:'Plating',items:[
            'Toasted base',
            'Revs relish',
            'Pickles',
            'Lettuce',
            'Fried chicken',
            'Lid & skewer',
            'Burger on plate',
            'Fries in cup, on plate',
            'Coleslaw in ramekin, on plate'
        ]}
    ],
    image:Images.specs.burgers.friedChicken,
    crockery:BurgerCroc,
    ingredients:[
        ...FriedChickIngredients
    ],
    type:'burger',
    variant : false,
}
const friedChickenVegan : specInput = {
    title:Titles.friedChicken.vegan,
    builds:[
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.chicken.breast.fried,
            Cooking.fries.regular
        ]},
        {title:'Plating',items:[
            'Toasted base',
            'Revs relish',
            'Pickles',
            'Lettuce',
            'Vegan fried chicken',
            'Lid & skewer',
            'Burger on plate',
            'Fries in cup, on plate',
            'Slaw in ramekin, on plate'
        ]}
    ],
    image:Images.specs.default,
    crockery:BurgerCrocVeg,
    ingredients:[
        ...FriedChickIngredientsVeg
    ],
    type:['burger','vegan'],
    variant : true,
}
const friedChickenGF : specInput = {
    title:Titles.friedChicken.GF,
    builds:[
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.chicken.breast.fried,
            Cooking.fries.regular
        ]},
        friedChicken.builds[1]
    ],
    image:Images.specs.default,
    crockery:BurgerCrocGF,
    ingredients:[
        ...FriedChickIngredientsGF
    ],
    type:['burger','glutenFree'],
    variant : true,
}
const friedChickenGFVegan : specInput = {
    title:Titles.friedChicken.veganGF,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.chicken.breast.fried,
            Cooking.fries.regular
        ]},
        friedChickenVegan.builds[1]
    ],
    image:Images.specs.default,
    crockery:BurgerCrocGFVeg,
    ingredients:[
        ...FriedChickIngredientsVegGF
    ],
    type:['burger','vegan','glutenFree'],
    variant : true,

}
const cheeseBaconBurger : specInput = {
    title:Titles.cheeseBacon.standard,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.burger.beef.meat.regular,
            Cooking.burger.cheese.regular,
            Cooking.bacon,
            Cooking.fries.regular
        ]},
        {title:'Plating',items:[
            'Toasted base',
            "Rev's relish",
            'Lettuce',
            'Burger',
            'Cheese',
            'Cheese sauce',
            'Bacon (2 slices)',
            'Lid & Skewer',
            `Burger on plate`,
            `Fries in cup, on plate`,
            `Slaw in ramekin, on plate`
        ]}
    ],
    image:Images.specs.burgers.cheeseBacon,
    crockery:BurgerCroc,
    ingredients:CheeseBaconBurgerIngredients,
    type:'burger',
    variant : false,
}
const cheeseBaconBurgerGF : specInput = {
    title:Titles.cheeseBacon.GF,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.burger.beef.meat.regular,
            Cooking.burger.cheese.regular,
            Cooking.bacon,
            Cooking.fries.regular
        ]},
        cheeseBaconBurger.builds[1]
    ],
    image:Images.specs.default,
    crockery:BurgerCrocGF,
    ingredients:CheeseBaconBurgerIngredientsGF,
    type:['burger','glutenFree'],
    variant : true,
}

const blueCheeseTruffle : specInput = {
    title:Titles.blueCheese.standard,
    builds: [
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.burger.beef.meat.regular,
            Cooking.fries.regular,
            Cooking.gravy,
            Cooking.burger.cheese.blue,
            Cooking.burger.beef.meat.blueCheese
        ]},
        {title:'Plating',items:[
            'Toasted base',
            'Blue Cheese mayo',
            'Lettuce',
            'Burger & melted cheese',
            '(a little) truffle gravy over the burger (save rest for ramekin)',
            'Lid & skewer',
            `Burger on plate`,
            `Fries in cup, on plate`,
            `Coleslaw in ramekin, on plate`
        ]}
    ],
    image:Images.specs.burgers.blueCheeseTruffle,
    crockery:BurgerCroc,
    ingredients:BlueCheeseTruffleIngredients,
    type:'burger',
    variant : false,
};
const blueCheeseTruffleGF : specInput = {
    title:Titles.blueCheese.GF,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.burger.beef.meat.regular,
            Cooking.fries.regular,
            Cooking.gravy,
            Cooking.burger.cheese.blue,
            Cooking.burger.beef.meat.blueCheese
        ]},
        blueCheeseTruffle.builds[1]
    ],
    image:Images.specs.default,
    crockery:BurgerCrocGF,
    ingredients:BlueCheeseTruffleIngredientsGF,
    type:['burger','glutenFree'],
    variant : true,
}
const blueCheeseTruffleVeggie : specInput = {
    title:Titles.blueCheese.veggie,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.burger.beef.vegan.regular,
            Cooking.fries.regular,
            Cooking.gravy,
            Cooking.burger.beef.veggie.blueCheese,
            Cooking.burger.beef.meat.blueCheese
        ]},
        {title:'Plating',items:[
            'Toasted base',
            'Blue Cheese mayo',
            'Lettuce',
            'Burger & melted cheese',
            '(a little) truffle gravy over the burger (save rest for ramekin)',
            'Lid & skewer',
            `Burger on plate`,
            `Fries in cup, on plate`,
            `Coleslaw in ramekin, on plate`
        ]}
    ],
    image:Images.specs.default,
    crockery:BurgerCrocVeggie,
    ingredients:BlueCheeseTruffleIngredientsVeggie,
    type:['burger','vegetarian'],
    variant : true,
}
const blueCheeseTruffleGFVeggie : specInput = {
    title:Titles.blueCheese.veggieGF,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.burger.beef.vegan.regular,
            Cooking.fries.regular,
            Cooking.gravy,
            Cooking.burger.beef.veggie.blueCheese,
            Cooking.burger.beef.meat.blueCheese
        ]},
        {title:'Plating',items:[
            'Toasted base',
            'Blue Cheese mayo',
            'Lettuce',
            'Burger & melted cheese',
            '(a little) truffle gravy over the burger (save rest for ramekin)',
            'Lid & skewer',
            `Burger on plate`,
            `Fries in cup, on plate`,
            `Coleslaw in ramekin, on plate`
        ]}
    ],
    image:Images.specs.default,
    crockery:BurgerCrocGFVeggie,
    ingredients:BlueCheeseTruffleIngredientsGFVeggie,
    type:['burger','glutenFree','vegetarian'],
    variant : true,
}


const buffaloChicken : specInput = {
    title:Titles.buffaloChicken.standard,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.chicken.breast.fried,
            Cooking.fries.regular,
            Cooking.chicken.breast.franks

        ]},
        {title:'Plating',items:[
            'Toasted base',
            'Blue cheese mayo (30g)',
            'Lettuce',
            'Fried chicken tossed in franks',
            'Pickles',
            'Lid with Blue Cheese Mayo (30g) & skewer',
            'Burger on plate',
            'Fries in cup, on plate',
            'Coleslaw in ramekin, on plate'
        ]}
    ],
    image:Images.specs.burgers.buffaloChicken,
    crockery:BurgerCroc,
    ingredients:BuffaloChickenIngredients,
    type:'burger',
    variant : false,

}
const buffaloChickenVeggie : specInput = {
    title:Titles.buffaloChicken.veggie,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.chicken.breast.vegan,
            Cooking.fries.regular,
            Cooking.chicken.breast.franks

        ]},
        buffaloChicken.builds[1]
    ],
    image:Images.specs.burgers.buffaloChicken,
    crockery:BurgerCrocVeggie,
    ingredients:BuffaloChickenVeggieIngredients,
    type:['burger','vegetarian'],
    variant : true,

}
const buffaloChickenGF : specInput = {
    title:Titles.buffaloChicken.GF,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.chicken.breast.fried,
            Cooking.fries.regular,
            Cooking.chicken.breast.franks

        ]},
        buffaloChicken.builds[1]
    ],
    image:Images.specs.burgers.buffaloChicken,
    crockery:BurgerCrocGF,
    ingredients:BuffaloChickenGFIngredients,
    type:['burger','glutenFree'],
    variant : true,
}
const buffaloChickenGFVeggie : specInput = {
    title:Titles.buffaloChicken.veggieGF,
    builds : [
        {title:'Cooking',items:[
            Cooking.bun.GF,
            Cooking.chicken.breast.vegan,
            Cooking.fries.regular,
            Cooking.chicken.breast.franks
        ]},
        buffaloChicken.builds[1]
    ],
    image:Images.specs.burgers.buffaloChicken,
    crockery:BurgerCrocGFVeggie,
    ingredients:BuffaloChickenGFVeggieIngredients,
    type:['burger','glutenFree','vegetarian'],
    variant : true,
}
const chilliCheese : specInput = {
    title:Titles.chilliCheese.standard,
    builds: [
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.burger.beef.meat.cajun,
            Cooking.burger.chilli,
            Cooking.fries.regular,
            Cooking.burger.beef.meat.chilli,
            Cooking.sauce.cheese
        ]},
        {title:'Plating',items:[
            'Toasted base',
            'Revs relish',
            'Lettuce',
            'Burger, chilli & cheese',
            'Hot cheese sauce',
            'Nachos (crushed and sprinkled on)',
            'Fried onions',
            'Jalapeños',
            'Chilli flakes',
            'Lid & skewer',
            'Burger on plate',
            'Fries in cup, on plate',
            'Coleslaw in ramekin, on plate'
        ]}
    ],
    image:Images.specs.burgers.chilliCheese,
    crockery:BurgerCroc,
    ingredients:ChilliCheeseIngredients,
    type:'burger',
    variant : false,
}
const chilliCheeseVeggie : specInput = {
    title:Titles.chilliCheese.veggie,
    builds: [
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.burger.beef.vegan.cajun,
            Cooking.burger.chilli,
            Cooking.fries.regular,
            Cooking.burger.beef.meat.chilli,
            Cooking.sauce.cheese
        ]},
        {title:'Plating',items:[
            'Toasted base',
            'Revs relish',
            'Lettuce',
            'Burger, chilli & cheese',
            'Hot cheese sauce',
            'Nachos (crushed and sprinkled on)',
            'Fried onions',
            'Jalapeños',
            'Chilli flakes',
            'Lid & skewer',
            'Burger on plate',
            'Fries in cup, on plate',
            'Coleslaw in ramekin, on plate'
        ]}
    ],
    image:Images.specs.burgers.chilliCheese,
    crockery:BurgerCrocVeggie,
    ingredients:ChilliCheeseVeggieIngredients,
    type:['burger','vegetarian'],
    variant : true,
}
const chilliCheeseVegan : specInput = {
    title:Titles.chilliCheese.vegan,
    builds: [
        {title:'Cooking',items:[
            Cooking.bun.regular,
            Cooking.burger.beef.vegan.cajun,
            Cooking.burger.chilli,
            Cooking.fries.regular,
            Cooking.burger.beef.meat.chilli,
        ]},
        {title:'Plating',items:[
            'Toasted base',
            'Revs relish',
            'Lettuce',
            'Burger, chilli & cheese',
            'Hot cheese sauce',
            'Nachos (crushed and sprinkled on)',
            'Fried onions',
            'Jalapeños',
            'Chilli flakes',
            'Lid & skewer',
            'Burger on plate',
            'Fries in cup, on plate',
            'Coleslaw in ramekin, on plate'
        ]}
    ],
    image:Images.specs.burgers.chilliCheese,
    crockery:BurgerCrocVeggie,
    ingredients:ChilliCheeseVeganIngredients,
    type:['burger','vegetarian'],
    variant : true,
}


const burger1 = new SpecItem(beefBurger,1,['vegan','show'],['glutenFree','show']);
const burger2 = new SpecItem(beefBurgerVegan,1,['vegan','active'],['glutenFree','show']);
const burger3 = new SpecItem(beefBurgerGF,1,['vegan','show'],['glutenFree','active']);
const burger4 = new SpecItem(beefBurgerGFVegan,1,['vegan','active'],['glutenFree','active']);
const burger5 = new SpecItem(grilledChicken,1,['glutenFree','show']);
const burger6 = new SpecItem(grilledChickenGF,1,['glutenFree','active']);
const burger7 = new SpecItem(friedChicken,1,['glutenFree','show'],['vegan','show']);
const burger8 = new SpecItem(friedChickenVegan,1,['glutenFree','show'],['vegan','active']);
const burger9 = new SpecItem(friedChickenGF,1,['glutenFree','active'],['vegan','show']);
const burger10 = new SpecItem(friedChickenGFVegan,1,['glutenFree','active'],['vegan','active']);
const burger11 = new SpecItem(cheeseBaconBurger,1,['glutenFree','show']);
const burger12 = new SpecItem(cheeseBaconBurgerGF,1,['glutenFree','active']);
const burger13 = new SpecItem(blueCheeseTruffle,1,['glutenFree','show'],['vegetarian','show'])
const burger14 = new SpecItem(blueCheeseTruffleGF,1,['glutenFree','active'],['vegetarian','show'])
const burger15 = new SpecItem(blueCheeseTruffleVeggie,1,['glutenFree','show'],['vegetarian','active'])
const burger16 = new SpecItem(blueCheeseTruffleGFVeggie,1,['glutenFree','active'],['vegetarian','active'])
const burger17 = new SpecItem(buffaloChicken,1,['glutenFree','show'],['vegetarian','show'])
const burger18 = new SpecItem(buffaloChickenVeggie,1,['glutenFree','show'],['vegetarian','active'])
const burger19 = new SpecItem(buffaloChickenGF,1,['glutenFree','active'],['vegetarian','show'])
const burger20 = new SpecItem(buffaloChickenGFVeggie,1,['glutenFree','active'],['vegetarian','active'])
const burger21 = new SpecItem(chilliCheese,1,['vegetarian','show'],['vegan','show']);
const burger22 = new SpecItem(chilliCheeseVeggie,1,['vegetarian','active'],['vegan','show']);
const burger23 = new SpecItem(chilliCheeseVegan,1,['vegetarian','show'],['vegan','active']);

export default [burger1,burger2,burger3,burger4,burger5,burger6,burger7,burger8,burger9,
burger10,burger11,burger12,burger13,burger14,burger15,burger16,burger17,burger18,burger19,
burger20,burger21,burger22,burger23];