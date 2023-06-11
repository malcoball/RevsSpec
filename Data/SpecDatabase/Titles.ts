// Follows order of the spec book really
const vegan = 'Vegan'; const veggie = 'V';
const beefChilli = 'Beef Chilli'; const veggieChilli = 'Veggie Chilli';
const glutenFree = 'GF'; const skinny = 'Skinny';
const SpecTitles = {
    grazer:{
        calamari: 'Calamari',
        halloumi : 'Halloumi Fries',
        skewers : {
            bbq : 'BBQ Chicken Skewers',
            bbqVe: 'BBQ Chicken Skewers '+veggie,
            cajun : 'Cajun Chicken Skewers',
            cajunV: 'Cajun Chicken Skewers'+veggie
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
            standard : 'Nachos',
            vegan : 'Nachos '+vegan,
            veggiChilli : 'Nachos Chilli '+veggie,
            beefChilli:'Nachos Chilli Beef'
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
                    veggie: 'Nachos '+" "+vegan+" "+veggieChilli
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
                full : 'Buffalo Crispy Chicken',
                skinny : `Buffalo Crispy Chicken ${skinny}`
            },
            veggie : {
                full : `Buffalo Crispy Chicken ${veggie}`,
                skinny : `Buffalo Crispy Chicken ${skinny} ${veggie}`
            },
            GF : `Buffalo Cripsy Chicken ${glutenFree}`
        },
        marg : {
            standard : {
                full : `Margherita`,
                skinny : `Margherita ${skinny}`
            },
            vegan :{
                full : `Margherita ${vegan}`,
                skinny : `Margherita ${skinny} ${vegan}`
            },
            GF : {
                standard : `Margherita ${glutenFree}`,
                vegan : `Margherita ${glutenFree} ${vegan}`
            }

        },
        bbqMeaty:{
            full: `BBQ Meaty One`,
            skinny: `BBQ Meaty One ${skinny}`,
            GF: `BBQ Meaty One ${glutenFree}`
        },
        pepperoni:{
            full:`Pepperoni`,
            skinny : `Pepperoni ${skinny}`,
            GF : `Pepperoni ${glutenFree}`
        },
        mushroom:{
            full: `Mushroom & Truffle Bianco`,
            skinny: `Mushroom & Truffle Bianco ${skinny}`,
            GF: `Mushroom & Truffle Bianco ${glutenFree}`,
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
                slider:'Classic Burger Slider',
                standard:'Classic Burger',
            },
            friedChicken:{
                slider:'Fried Chicken Slider',
                standard:'Fried Chicken Burger'
            },
        },
        macCheese:`Mac'N'Cheese`,
        fishFingers:'Fish Fingers',
        friedChicken:'Fried Chicken',
        sausages:'Sausages',
        
        fries:'Fries',
        sweetcorn:'Sweetcorn',
        salad:'Salad',
        dessert:{
            brownie:'Chocolate Brownie',
            iceCream:'Ice Cream (1 or 2 scoops)'
        },
        milk:{
            chocolate:'Chocolate Milk',
            strawberry:'Strawberry Milk'
        },
        pizza:{
            marg:{
                standard : 'Margherita',
                GF : `Margherita ${glutenFree}`
            },
            pepperoni:{
                standard : 'Pepperoni',
                GF : `Pepperoni ${glutenFree}`
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
            vegan : `Brunch Grill ${vegan}`,
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
            cajunChicken:'Cajun Marinated Chicken',
            cajunChickenVE:`Cajun Marinated Chicken ${vegan}`,
            friedChicken:`Fried Chicken`,
            friedChickenVE:`Fried Chicken Breast ${vegan}`,
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