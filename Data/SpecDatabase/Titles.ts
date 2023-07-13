// Follows order of the spec book really
const vegan = 'Vegan'; const veggie = 'V';
const beefChilli = 'Beef Chilli'; const veggieChilli = 'Veggie Chilli';
const kids = 'Kids';
const glutenFree = 'GF'; const skinny = 'Skinny';
const SpecTitles = {
    grazer:{
        calamari: 'Calamari',
        halloumi : 'Halloumi Fries',
        skewers : {
            bbq : 'BBQ Chicken Skewers',
            bbqVe: 'BBQ Chicken Skewers '+vegan,
            cajun : 'Cajun Chicken Skewers',
            cajunV: 'Cajun Chicken Skewers '+veggie
        },
        macBites : "Crispy Mac'N'Cheese Bites",
        breadedMushrooms : 'Breaded Mushrooms',
        friedChicken :{
            meat : 'Crispy Fried Chicken',
            vegan: 'Crispy Fried Chicken '+vegan
        },
        doughballs : 'Doughballs',
        hummus : 'Hummus & Flatbread',
        falafel : {
            standard : 'Pea & Mint Falafel',
            vegan : `Pea & Mint Falafel ${vegan}`
        },
        prawns : 'Prawns Tempura',
        jalapenoPoppers : 'Jalapeno Poppers',
        nachos : {
            standard : 'Nachos Grazer',
            vegan : 'Nachos Grazer '+vegan,
            veggiChilli : 'Nachos Chilli Grazer '+veggie,
            beefChilli:'Nachos  Chilli Beef'
        }
    },
    sharer :{
        nachos:{
            standard : {
                standard : 'Nachos',
                chilli : {
                    beef : 'Nachos '+beefChilli,
                    veggie: 'Nachos' + veggieChilli
                }
            },
            vegan:{
                standard : 'Nachos ' + vegan,
                chilli: {
                    beef : 'Nachos '+" "+vegan+" "+beefChilli,
                    veggie: 'Nachos '+" "+" "+veggieChilli
                }
            },
            veggie:{
                standard : 'Nachos ' + veggie,
                chilli: {
                    beef : 'Nachos '+" "+veggie+" "+beefChilli,
                    veggie: 'Nachos '+" "+veggie+" "+veggieChilli
                }
            }
            
        },
        houseSharer:{
            meat: "Rev's House Sharer",
            veggie : "Rev's House Sharer "+veggie,
            vegan : "Rev's House Sharer " + vegan
        }
    },
    sandwhich:{
        chickenBacon: 'Chicken & Bacon Sandwich',
        fishFinger : 'Fish Finger Butty',
    },
    wrap:{
        avo:'Avo & Halloumi Wrap',
        chicken:'Fried Chicken Wrap',
        chickenVe:'Fried Chicken Wrap '+vegan
    },
    main:{
        grainBowl : "Rev's Grain Bowl",
        salad:{
            asian : "Asian Salad",
            chickenCaesar: ' Chicken Caesar Salad'
        },
        flatBread:{
            chicken : 'Chicken Flatbread',
            vegan : 'Chicken Flatbread '+vegan,
            falafel : 'Falafel Flatbread'
        },
        fish: 'Fish & Chips',
        katsuCurry:{
            chicken : 'Katsu Chicken Curry',
            vegan : 'Katsu Chicken Curry '+vegan
        },
        macCheese:{
            standard : "Mac'N'Cheese",
            mushroom: "Mac'N'Cheese with Truffle Mushroom",
            chicken : "Mac'N'Cheese with Fried Chicken"
        },
        chickenChips : {
            fried : {
                meat : 'Fried Chicken & Chips',
                vegan : 'Fried Chicken & Chips '+vegan,
            },
            cajun : {
                meat : 'Cajun Chicken & Chips',
                vegan : 'Cajun Chicken & Chips '+vegan
            }
        }
    },
    burger:{
        classic:{
            standard    : 'Classic Burger',
            vegan       : 'Classic Burger '+vegan,
            GF          : 'Classic Burger '+glutenFree,
            veganGF     : `Classic Burger ${glutenFree} ${vegan}`
        },
        grilledChicken:{
            standard    : 'Classic Grilled Chicken',
            vegan       : 'Classic Grilled Chicken '+vegan,
            GF          : 'Classic Grilled Chicken '+glutenFree,
            veganGF     : `Classic Grilled Chicken ${glutenFree} ${vegan}`
        },
        friedChicken : {
            standard    : 'Classic Fried Chicken',
            vegan       : 'Classic Fried Chicken '+vegan,
            GF          : 'Classic Fried Chicken '+glutenFree,
            veganGF     : `Classic Fried Chicken ${glutenFree} ${vegan}`
        },
        cheeseBacon :{
            standard    : 'Cheese & Bacon Burger',
            vegan       : 'Cheese & Bacon Burger '+vegan,
            GF          : 'Cheese & Bacon Burger '+glutenFree,
            veganGF     : `Cheese & Bacon Burger ${glutenFree} ${vegan}`
        },
        blueCheese :{
            standard    : 'Blue Cheese & Truffle Burger',
            vegan       : 'Blue Cheese & Truffle Burger '+vegan,
            GF          : 'Blue Cheese & Truffle Burger '+glutenFree,
            veganGF     : `Blue Cheese & Truffle Burger ${glutenFree} ${vegan}`,
            veggie      : `Blue Cheese & Truffle Burger ${veggie}`,
            veggieGF      : `Blue Cheese & Truffle Burger ${glutenFree} ${veggie}`
        },
        buffaloChicken :{
            standard    : 'Buffalo Chicken Burger',
            veggie       : 'Buffalo Chicken Burger '+veggie,
            GF          : 'Buffalo Chicken Burger '+glutenFree,
            veggieGF     : `Buffalo Chicken Burger ${glutenFree} ${veggie}`
        },
        chilliCheese :{
            standard    : 'Chilli Cheese Burger',
            veggie      : 'Chilli Cheese Burger '+veggie,
            vegan      : 'Chilli Cheese Burger '+vegan,
            GF          : 'Chilli Cheese Burger '+glutenFree,
            veggieGF    : `Chilli Cheese Burger ${glutenFree} ${veggie}`,
            veganGF    : `Chilli Cheese Burger ${glutenFree} ${vegan}`
        },
        macChicken :{
            standard    : `Mac'N'Chicken Burger`,
            veggie      : `Mac'N'Chicken Burger `+veggie,
            GF          : `Mac'N'Chicken Burger `+glutenFree,
            veggieGF    : `Mac'N'Chicken Burger ${glutenFree} ${veggie}`
        },
        ultimate : 'Ultimate BBQ & Bacon'
        
    },
    pizza:{
        buffaloChicken:{
            standard : {
                full : 'Buffalo Crispy Chicken Pizza',
                skinny : `Buffalo Crispy Chicken Pizza ${skinny}`
            },
            veggie : {
                full : `Buffalo Crispy Chicken Pizza ${veggie}`,
                skinny : `Buffalo Crispy Chicken Pizza ${skinny} ${veggie}`
            },
            GF : `Buffalo Cripsy Chicken Pizza ${glutenFree}`
        },
        marg : {
            standard : {
                full : `Margherita Pizza`,
                skinny : `Margherita Pizza ${skinny}`
            },
            vegan :{
                full : `Margherita Pizza ${vegan}`,
                skinny : `Margherita Pizza ${skinny} ${vegan}`
            },
            GF : {
                standard : `Margherita Pizza ${glutenFree}`,
                vegan : `Margherita Pizza ${glutenFree} ${vegan}`
            }

        },
        bbqMeaty:{
            full: `BBQ Meaty One Pizza`,
            skinny: `BBQ Meaty One Pizza ${skinny}`,
            GF: `BBQ Meaty One Pizza ${glutenFree}`
        },
        pepperoni:{
            full:`Pepperoni Pizza`,
            skinny : `Pepperoni Pizza ${skinny}`,
            GF : `Pepperoni Pizza ${glutenFree}`
        },
        mushroom:{
            full: `Mushroom & Truffle Bianco Pizza`,
            skinny: `Mushroom & Truffle Bianco Pizza ${skinny}`,
            GF: `Mushroom & Truffle Bianco Pizza ${glutenFree}`,
        }
    },
    side:{
        garlicBread:{
            standard : 'Garlic Bread',
            cheesy : 'Cheesy Garlic Bread'
        },
        sideSalad:'Side Salad',
        onionRings:'Onion Rings',
        rice:'Rice',
        macNCheese:`Mac'N'Cheese`,
        fries:{
            standard : 'Fries',
            saltPepper: 'Salt & Pepper Fries',
            blueCheese: 'Blue Cheese & Truffle',
            bacon:'Fries Cheese & Bacon',
            chilliCheese :{
                beef : `Chilli Cheese Fries`,
                veggie : `Chilli Cheese Fries ${veggie}`,
                vegan : `Chilli Cheese Fries ${vegan}`,
                cheeseBacon:{
                    beef : `Chilli Cheese Fries Cheese & Bacon`,
                    veggie : `Chilli Cheese Fries Cheese & Bacon ${veggie}`,
                    vegan : `Chilli Cheese Fries Cheese & Bacon ${vegan}`,
                },
            }
        }
    },
    dessert:{
        brownie: 'Chocolate Brownie',
        smore : `So S'Morish`,
        iceCream:'Vanilla Ice Cream',
        waffles : 'Waffles & Strawberry',
        torte:'Chocolate & Clementine Torte'
    },
    kids:{
        burger:{
            beef:{
                slider:kids + ' Classic Burger Slider',
                standard:kids +' Classic Burger',
            },
            friedChicken:{
                slider:kids +' Fried Chicken Slider',
                standard:kids +' Fried Chicken Burger'
            },
        },
        macCheese:`${kids} Mac'N'Cheese`,
        fishFingers:kids + ' Fish Fingers',
        friedChicken:kids + ' Fried Chicken',
        sausages:kids + ' Sausages',
        
        fries:kids + ' Fries',
        sweetcorn:kids + ' Sweetcorn',
        salad:kids + ' Salad',
        dessert:{
            brownie:kids + ' Chocolate Brownie',
            iceCream1:kids + ' Ice Cream (1 scoop)',
            iceCream2:kids + ' Ice Cream (2 scoop)',
        },
        milk:{
            chocolate:kids + ' Chocolate Milk',
            strawberry:kids + ' Strawberry Milk'
        },
        pizza:{
            marg:{
                standard : kids + ' Margherita',
                GF : `${kids} Margherita ${glutenFree}`
            },
            pepperoni:{
                standard :kids + ' Pepperoni',
                GF : `${kids} Pepperoni ${glutenFree}`
            },
        }
        
    },
    brunch:{
        avoToast:{
            standard : `Avocado on Toasted Sourdough`,
            egg : `Avocado & Poached Eggs`
        },
        eggsBenedict : {
            standard : 'Eggs Benedict',
            GF : `Eggs Benedict ${glutenFree}`
        },
        waffles:'Fried Chicken & Bacon Waffles',
        pancakes:'Banana & Nutella Pancakes',
        grill: {
            standard : 'Brunch Grill',
            GF : `Brunch Grill ${glutenFree}`,
            veggie : `Brunch Grill ${veggie}`,
            veggieGF : `Brunch Grill ${veggie} ${glutenFree}`,
            vegan : `Brunch Grill ${vegan}`,
            veganGF : `Brunch Grill ${vegan} ${glutenFree}`,
        },
        pizza : {
            standard : 'Brunch Pizza',
            GF : `Brunch Pizza ${glutenFree}`
        },
        burger : {
            standard : 'Brunch Burger',
            GF : `Brunch Burger ${glutenFree}`
        }
    },
    bulk:{
        sauce:{
            beerBBQ : 'Beer & BBQ Sauce',
            blueMayo: 'Blue Cheese Mayo',
            bbqMustardMayo:'BBQ Mustard Mayo',
            blueCheeseMayo:'Blue Cheese Mayo',
            salsa:'Chilli Vodka Salsa',
            limePickleMayo:'Lime Pickle Mayo',
            srirachaMayo:'Sriracha Mayo',
        },
        batter:'Beer Batter Mix',
        bbqBeans:'BBQ Beans',
        beerMacCheese : 'Beer Mac & Cheese',
        croutons:'Croutons',
        chicken:{
            pulledChicken:'Cooked Pulled Chicken',
            cajunChicken:{
                main : 'Cajun Marinated Chicken Main',
                burger : 'Cajun Marinated Chicken Burger',
                strip : 'Cajun Marinated Chicken Strip',
            },
            cajunChickenVe:{
                main : `Cajun Marinated Chicken Main ${vegan}`,
                strip : `Cajun Marinated Chicken Strip ${vegan}`,
            },
            // friedChicken:`Fried Chicken`,
            friedChicken:{
                main : 'Fried Chicken Main',
                breast : 'Fried Chicken Breast',
                strip : 'Fried Chicken Strip',
            },
            // friedChickenVE:`Fried Chicken Breast ${vegan}`,
            friedChickenVe:{
                main : `Fried Chicken Main ${vegan}`,
                strip : `Fried Chicken Strip ${vegan}`,
            },
        },
        coleslaw:{
            standard:'coleslaw',
            vegan:`Coleslaw ${vegan}`
        },
        bacon:'Cooked Bacon',
        flatBread:'Flat Bread',
        gravy:{
            standard: 'Gravy',
            truffle:' Truffle Gravy'
        },
        harissaHummus:'Harissa Hummus',
        macCheeseCrumb:`Mac'N'Cheese Crumb`,
        pepper:'Roasted Red Pepper',
        saltPepperFrySeasoning:'Salt & Pepper Fry Seasoning',
        doughballs:{
            standard:'Dough Balls',
            vegan:`Dough Balls ${vegan}`
        },
        sliders:{
            beef: `Cheese Burger Sliders`,
            vegan:`Cheese Burger Sliders ${vegan}`,
            veggie:`Cheese Burger Sliders ${veggie}`,
        }
    }
}
export default SpecTitles;