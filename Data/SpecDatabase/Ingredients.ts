import { ingredient } from "../@types/types";
const arleysChicken = "Arleys Plant Based Chicken Breast";
const chickenStrips = 'Fried Chicken Strips';
const chickenStripsVe = 'Fried Chicken Strips (VE)';
const pizzaDough = 'Sourdough Style Pizza Dough';

export const Ingredients = {
    chicken:{
        meat:{
            fried : <ingredient>{name:'Fried Chicken Breast',amount:'150 g (1 piece)'},
            breast:{
                breast150: <ingredient>{name:'Chicken Breast',amount:'150g (1 piece)'},
                breast200: <ingredient>{name:'Chicken Breast',amount:'200g (1 piece)'},
            },
            cajun:{
                cajun150 : <ingredient>{name:'Cajun Marinated Chicken',amount:'150g (1 breast)'},
                cajun200 : <ingredient>{name:'Cajun Marinated Chicken',amount:'200g (1 breast)'},
            },
            stripPlain : <ingredient>{name:'Chicken Breast',amount:'150g (3strips)'},
            stripCajun : <ingredient>{name:'Cajun Marinated Chicken',amount:'150g (3strips)'},
            goujon:{
                strips4 : <ingredient>{name:'Fried Chicken Strips',amount:'4 strips'},
                strips3 : <ingredient>{name:'Fried Chicken Strips',amount:'3 strips'},
                strips2 : <ingredient>{name:'Fried Chicken Strips',amount:'2 strips'},
                strip : <ingredient>{name:'Fried Chicken Strip',amount:'1 strip'},
            },
            goujonVe:{
                strips4 : <ingredient>{name:'Fried Chicken Strips Ve',amount:'4 strips'},
                strips2 : <ingredient>{name:'Fried Chicken Strips Ve',amount:'2 strips'},
                strip : <ingredient>{name:'Fried Chicken Strip Ve',amount:'1 strip'},
            },
            pulledDouble : <ingredient>{name:'Cooked Pulled Chicken',amount:'70 g'},
            pulled : <ingredient>{name:'Cooked Pulled Chicken',amount:'35 g'},
            pulledHalf : <ingredient>{name:'Cooked Pulled Chicken',amount:'18 g'},
        },
        nonMeat:{
            breast : <ingredient>{name:'Arleys Plant Based Chicken Breast',amount:'100g (1 each)'},
            cajun : <ingredient>{name:'Cajun Marinated Chicken (V)',amount:'1 piece bulk'},
            goujon:{
                strips3 : <ingredient>{name:'Fried Chicken Strips (VE)',amount:'3 strips'},
                strips2 : <ingredient>{name:'Fried Chicken Strips (VE)',amount:'2 strips'},
                strip : <ingredient>{name:'Fried Chicken Strip (VE)',amount:'1 strip'},
            }
        }
    },
    burger:{
        bacon: {name:'Cooked Bacon',amount:'2 slices (20g)'},
        burger:{
            beef:{
                meat :{name:'Beef Steak Burger',amount:'1 each'}, 
                meatless:{name:'Meatless Burger',amount : '1 each'},
                slider :{name:'Beef Steak Burger',amount:'1/2'}, 
                slider2 :{name:'Beef Steak Burger',amount:'2 1/2'}, 
                sliderV2:{name:'Meatless Burger',amount : '2 1/2'},
            }
        },
        cheese :{
            standard : <ingredient>{name:'Cheese Burger Slices',amount:'2 slices'},
            standardHalf : <ingredient>{name:'Cheese Burger Slice',amount:'1 slice'},
            blue : <ingredient>{name:'Blue Cheese Slice',amount:'1 slice'},
            vegan: <ingredient>{name:'Vegan Cheese Slice',amount:'1 slice'}
        },
        garnish:{
            friedOnion:<ingredient>{name:'Crispy fried onion',amount:'10 g'},
            crushedChillis:<ingredient>{name:'Crushed Chillies',amount:'2 g'},
            jalapenos:{
                jal5 : <ingredient>{name:'Jalapenos',amount:'5 each (12 g)'},
                jal8 : <ingredient>{name:'Jalapenos',amount:'8 each (20 g)'},
            },
            pickles : <ingredient>{name:'Pickles',amount:'20 g (8 each)'},
            tortilla : <ingredient>{name:'Tortilla Chips',amount:'10 g'},
        },
        gravy:<ingredient>{name:'Truffle Gravy',amount:'80 g'},
        gravy75:<ingredient>{name:'Truffle Gravy',amount:'75 g'},
        bun:{
            standard : <ingredient>{name:'Demi Brioche Vegan Bun',amount : '1'},
            GF : <ingredient>{name:'Poppy Seeded Gluten Free Bun',amount:'1'},
            slider1 : <ingredient>{name:'Slider bun',amount:'1'},
            slider2 : <ingredient>{name:'Slider buns',amount:'2'},
        },
        sauce :{
            cheese : <ingredient>{name:'Cheese Sauce',amount:'30 g'},
            blueCheeseMayo : <ingredient>{name:'Blue Cheese Mayo',amount:'30 g'},
            franks: <ingredient>{name:"Frank's Buffalo Wing Sauce",amount:'75ml'},
            relish: <ingredient>{name:"Revolution Relish",amount:"30 g"},
        },
        seasoning:{
            rs: <ingredient>{name:'RS 4:1 Seasoning Bulk',amount:'1g'},
            crushedChillies : <ingredient>{name:'Crushed Chillies',amount:'2g'},
            cajun : <ingredient>{name:'Cajun Seasoning',amount:'2 g'},
            seasoning : <ingredient>{name:'Seasoning',amount:'1 g'}
        },
        veg:{
            iceberg : <ingredient>{name:"Iceberg Lettuce",amount:"20 g"}
        }
    },
    dessert:{
        // brownie : <ingredient> {name:'Chocolate Brownie',amount:'1.5 each'},
        brownie : {
            brownie15 : <ingredient> {name:'Chocolate Brownie',amount:'1.5 each'}
        },
        cookie : {
            cookie1 : <ingredient>{name:'Double Chocolate Cookie',amount:'1 each'}
        },
        iceCream : {
            iceCream1 : <ingredient> {name:'Vanilla Ice Cream',amount:'50 ml (1 scoop)'},
            iceCream2 : <ingredient> {name:'Vanilla Ice Cream',amount:'100 ml (2 scoop)'},
            iceCream3 : <ingredient> {name:'Vanilla Ice Cream',amount:'150 ml (3 scoop)'},
        },
        marshmellow:{
            mash20 : <ingredient>{name:'Mini Marshmallows',amount:'20 g'}
        },
        waffle:{
            waffle1:<ingredient>{name:'Belgian Waffles',amount:'1 each'}
        },
        torte: <ingredient>{name:' Chocolate & Clementine Torte',amount:'1 slice'}

    },
    dip:{
        hummus :{
            hummus : <ingredient> {name:'Hummus',amount:'55 g'},
            haissa : <ingredient> {name:'Harissa Hummus',amount:'55 g'},
        },
        saucePot : {
            mayo : <ingredient> {name:'Mayonnaise',amount:'35 g'},
            relish : <ingredient> {name:`Rev's Relish`,amount:'35 g'},
            bbq : <ingredient> {name:`Bbq`,amount:'35 g'},
            sourCream : <ingredient> {name:'Sour Cream',amount:'35 g'},
            blueCheeseMayo : <ingredient> {name:'Blue Cheese Mayo',amount:'35 g'},
            srirachaMayo : <ingredient> {name:'Sriracha Mayo',amount:'35 g'},
            sriracha : <ingredient> {name:'Sriracha',amount:'35 g'},
            buffalo : <ingredient> {name:'Franks Buffalo Wing sauce',amount:'35 g'}
        },
        ramekin:{
            katsu50:<ingredient>{name:'Katsu Sauce',amount:'50 g'},
            truffle50: <ingredient>{name:'Truffle Gravy',amount:'50 g'},
        }
    },
    garnish :{
        blackPepper:<ingredient>{name:'Black Pepper',amount:'1 g'},
        sourCream : <ingredient>{name:'Sour Cream',amount:'10 g'},
        oil :{
            rapeseed10 : <ingredient>{name : 'Rapeseed Oil',amount:'10 ml'},
            rapeseed20g : <ingredient>{name : 'Rapeseed Oil',amount:'20 g'},
            olive : <ingredient>{name :'Olive Oil',amount:'5 g'},
            truffle3:<ingredient>{name:'Black Truffle Oil',amount:'3 ml'},
            truffle:<ingredient>{name:'Black Truffle Oil',amount:'2 ml'},
            truffleHalf:<ingredient>{name:'Black Truffle Oil',amount:'1 ml'}
        },
        nigellaSeeds05 :<ingredient>{name:'Nigella Seeds',amount:'0.5 g'},
        nigellaSeeds1 :<ingredient>{name:'Nigella Seeds',amount:'1 g'},
        jalapenos : {
            jalapenos5 : <ingredient>{name:'Jalapenos',amount:'5 each'},
            jalapenos10 : <ingredient>{name:'Jalapenos',amount:'10 each'},
        },
        lemon :{
            wedge : <ingredient> {name:'Wedge Lemon',amount : '1'},
            half : <ingredient>{name:'Half Lemon',amount:'1'}
        },
        lime:{
            wedge : <ingredient> {name:'Wedge Lime', amount:'1'}
        },
        hardCheese15 : <ingredient>{name:'Italian Hard Cheese',amount:'15 g'},
        hardCheese : <ingredient>{name:'Italian Hard Cheese',amount:'10 g'},
        hardCheeseHalf : <ingredient>{name:'Italian Hard Cheese',amount:'5 g'},
        leaf :{
            basil:<ingredient>{name:'Basil',amount:'2 g'},
            basilHalf:<ingredient>{name:'Basil',amount:'1 g'},
            corianderGrazer : <ingredient> {name:'Coriander',amount:'3 g'},
            coriander2 : <ingredient> {name:'Coriander',amount:'2 g'},
            coriander : <ingredient> {name:'Coriander',amount:'1 g'},
            corianderHalf : <ingredient> {name:'Coriander',amount:'0.5 g'},
            parsley : <ingredient> {name:'Flat Leaf Parsley',amount:'1 g'},
            parsleyHalf : <ingredient> {name:'Flat Leaf Parsley',amount:'0.5 g'},
        },
        icingSugar : <ingredient>{name:'Icing Sugar',amount:'1 g'},
        pomegranate : {
            pomegranate5 : <ingredient> {name:'Pomegranate',amount:'5 g'},
            pomegranate10 : <ingredient> {name:'Pomegranate',amount:'10 g'},
        },
        mint: <ingredient>{name:'Mint', amount:'2 g'},
        crushedChilli:<ingredient>{name:'Crushed Chillies',amount:'1 g'},
        friedOnion:{
            friedOnion025:<ingredient>{name:'Crispy fried onion',amount:'2.5 g'},
            friedOnion3:<ingredient>{name:'Crispy fried onion',amount:'3 g'},
            friedOnion10:<ingredient>{name:'Crispy fried onion',amount:'10 g'},
        },
        wedge:{
            lime:<ingredient>{name:'Lime Wedge',amount:'1'}
        }
    },
    grazer : {
        breadedMushrooms : <ingredient> {name:'Breaded Mushrooms',amount:'145g (8 roughly)'},
        calamari : <ingredient> {name:'Salt & Pepper Squid',amount:'110 g'},
        falafel : <ingredient> {name:'Pea & Mint Falafel',amount:'100 g (4 each)'},
        skewers : {
            bbq :   <ingredient> {name:'Chicken Breast',amount:'150 g (3strips)'},
            bbqVE : <ingredient> {name:arleysChicken,amount:'100 g (1 each)'},
            cajun : <ingredient> {name:'Cajun Marinated Chicken',amount:'150 g (3strips)'},
            cajunV: <ingredient> {name:'Cajun Marinated Chicken (V)',amount:'1 piece'}
        },
        friedChicken :{
            standard : <ingredient> {name:chickenStrips,amount:'3 strips'},
            vegan : <ingredient>    {name:chickenStripsVe,amount:'3 strips'},
        },
        macBites : <ingredient> {name:'Fiery Mac Cheese Bites',amount:'96 g (3 each)'},
        halloumi : <ingredient> {name:'Breaded Halloumi Fries',amount:'6 each'},
        mushrooms: <ingredient> {name:' Breaded Mushrooms',amount:'145 g'},
        prawn : <ingredient> {name:'Tempura Prawns',amount:'90 g (4 each)'},
        jalapoenoPoppers : <ingredient> {name:'Jalapeno Poppers',amount:'165 g (4 each)'}
    },
    fish:{
        fingers:{
            fingers5 : <ingredient>{name:'Fish Fingers',amount:'5 each'}
        },
        fillet : <ingredient>{name:'Pengasius Fillet',amount:'300 g (1 piece)'}
    },
    fruit:{
        strawberry:{
            strawberry20 : <ingredient> {name:'Strawberries',amount:'20 g'},
            strawberry60 : <ingredient> {name:'Strawberries',amount:'60 g'},
        }
    },
    
    sauce :{
        curry:{
            katsuCurry150 : <ingredient>{name:'Katsu Curry Sauce',amount:'150 ml'},
        },
        dressing:{
            caesar:<ingredient>{name:'Caesar Dressing',amount:'15 g'},
            caesarHalf:<ingredient>{name:'Caesar Dressing',amount:'7 g'},
            french15:<ingredient>{name:'French Dressing',amount:'15 ml'},
            soyChilli:{
                soy40:<ingredient>{name:'Soy Chilli Dressing',amount:'40 g'}
            }
        },
        nacho:{
            sourCream:{
                sourCream50:<ingredient>{name:'Sour Cream',amount:'50 g'},
                sourCream25:<ingredient>{name:'Sour Cream',amount:'25 g'},
            },
            salsa:{
                salsa25:<ingredient>{name:'Vodka Salsa',amount:'25 g'},
                salsa50:<ingredient>{name:'Vodka Salsa',amount:'50 g'},
            },
            avocado:{
                avocado25:<ingredient>{name:'Avocado',amount:'25 g'},
                avocado50:<ingredient>{name:'Avocado',amount:'50 g'},
            }
        },
        chocolate:{
            chocolate10 : <ingredient>{name:'Chocolate Sauce',amount:'10 g'},
            chocolate20 : <ingredient>{name:'Chocolate Sauce',amount:'20 g'},
            nutella:{
                nutella60 : <ingredient>{name:'Nutella', amount:'60 g'}
            }
        },
        caramel:{
            caramel20: <ingredient>{name:'Salted Caramel Sauce',amount:'20 g'}
        },
        cheese :{
            cheese120: <ingredient>{name:'Cheese Sauce',amount:'120 g'},
            cheese60 : <ingredient>{name:'Cheese Sauce',amount:'60 g'},
        },
        garlicButter : <ingredient> {name:'Garlic Butter',amount:'10 g'},
        bbq:{
            bbq20 : <ingredient> {name:'BBQ Sauce',amount:'20 g'},
            bbq50 : <ingredient> {name:'BBQ Sauce',amount:'50 g'},
        },
        mayo:{
            mayo20: <ingredient>{name:'Mayonnaise',amount:'20 g'},
            mayo35: <ingredient>{name:'Mayonnaise',amount:'35 g'},
            limePickle : {
                lime15 : <ingredient>{name:'Lime Pickle Mayo',amount:'15 g'},
            }
        },
        pizza:{
            bbq80:<ingredient>{name:'BBQ Sauce',amount:'80 g'},
            bbq60:<ingredient>{name:'BBQ Sauce',amount:'60 g'},
            bbq40:<ingredient>{name:'BBQ Sauce',amount:'40 g'},
            pizza35 : <ingredient> {name:'Gusto Pizza Sauce',amount:'35 g'},
            pizza50 : <ingredient> {name:'Gusto Pizza Sauce',amount:'50 g'},
            pizza60 : <ingredient> {name:'Gusto Pizza Sauce',amount:'60 g'},
            pizza70 : <ingredient> {name:'Gusto Pizza Sauce',amount:'70 g'},
            garlicButter20:<ingredient>{name:' Lands garlic butter',amount:'20 g'},
            garlicButter10:<ingredient>{name:' Lands garlic butter',amount:'10 g'},
        },
        tartare:{
            tartare20:<ingredient>{name:'Tartare Sauce',amount:'20 g'}
        },
        salsa:{
            salsa50 : <ingredient> {name:'Vodka Salsa',amount:'50 g'},
            salsa20 : <ingredient> {name:'Vodka Salsa',amount:'20 g'},
        },
        franks: <ingredient> {name:'Franks Buffalo Wing Sauce',amount:'20 g'},
        franksHalf: <ingredient> {name:'Franks Buffalo Wing Sauce',amount:'10 g'}
    },
    seasoning:{
        cajun:{
            cajun1:<ingredient>{name:'Cajun Seasoning',amount:'1 g'},
            cajun2:<ingredient>{name:'Cajun Seasoning',amount:'2g'},
        },
        tableSalt : <ingredient>{name:'Table Salt',amount:'0.5 g'},
        salt : <ingredient>{name:'Salt',amount:'1 g'},
        saltPepperFry:<ingredient> {name:'Salt & Pepper Fry Seasoning',amount:'1.5 g'},
        crackedBlackPepper:<ingredient>{name:'Cracked black pepper',amount:'1 g'}
    },
    side :{
        coleslaw:{
            sml:{
                mayo:<ingredient>{name:'Coleslaw',amount:'25 g'},
                noMayo:<ingredient>{name:'Slaw (no mayo)',amount:'25 g'},
            },
            md:{
                mayo:<ingredient>{name:'Coleslaw',amount:'35 g'},
                noMayo:<ingredient>{name:'Slaw (no mayo)',amount:'35 g'},
            },
        },
        beans:{
            bbq:{
                bbq115 : <ingredient>{name:'BBQ Beans',amount:'115 g'}
            },
        },
        falafel:{
            falalfel4:<ingredient>{name:'Pea & Mint Falafel',amount:'4 each'}
        },
        fries:{
            standard : <ingredient>{name:'Fries',amount:'1 serving'},
            fries200 : <ingredient>{name:'Fries',amount:'200 g'},
            fries150 : <ingredient>{name:'Fries',amount:'150 g'},
        },
        houseSalad:<ingredient>{name:'House Salad',amount:'1 serving'},
        onionRings : {
            onion8 : <ingredient>{name:'Onion Rings',amount:'160 g (8 each)'},
            onion6 : <ingredient>{name:'Onion Rings',amount:'120 g (6 each)'},
        },
        jalapenoPopper:{
            jalapenoPopper4: <ingredient>{name:'Jalapeno Popper',amount:'4 update pls'}
        },
        rice: <ingredient>{name:'Rice',amount:'200 g'},
        mushyPeas: <ingredient>{name:'Mushy Peas',amount:'100 g'}
    },
    nachos:{
        nacho150 : <ingredient>{name:'Tortilla Chips',amount:'150 g'},
        nacho75 : <ingredient>{name:'Tortilla Chips',amount:'75 g'}
    },
    tortilla:{
        grazer:<ingredient>{name:'Tortilla Chips',amount:'75 g'},
    },
    topping:{
        pizza:{
            blueCheese :{
                blueCheese25 : <ingredient>{name:'Blue Cheese Slice', amount:'25 g'}
            },
            mozzarella : {
                mozzarella25 : <ingredient>{name:'Grated Mozzarella',amount:'25 g'},
                mozzarella35 : <ingredient>{name:'Grated Mozzarella',amount:'35 g'},
                mozzarella40 : <ingredient>{name:'Grated Mozzarella',amount:'40 g'},
                mozzarella60 : <ingredient>{name:'Grated Mozzarella',amount:'60 g'},
                mozzarella70 : <ingredient>{name:'Grated Mozzarella',amount:'70 g'},
            },
            pepperoni:{
                pepperoni3: <ingredient>{name:'Pepperoni Slices',amount:'10 g (3 each)'},
                pepperoni5: <ingredient>{name:'Pepperoni Slices',amount:'15 g (5 each)'},
                pepperoni6: <ingredient>{name:'Pepperoni Slices',amount:'20 g (6 each)'},
                pepperoni10: <ingredient>{name:'Pepperoni Slices',amount:'30 g (10 each)'},
                pepperoni15: <ingredient>{name:'Pepperoni Slices',amount:'45 g (15 each)'},
                pepperoni20: <ingredient>{name:'Pepperoni Slices',amount:'60 g (20 each)'},
            },
            veganCheddar:{
                vegan40 : <ingredient>{name:'Grated Vegan Cheddar',amount:'40 g'},
                vegan60 : <ingredient>{name:'Grated Vegan Cheddar',amount:'60 g'},
                vegan70 : <ingredient>{name:'Grated Vegan Cheddar',amount:'70 g'}
            },
            veg:{
                friedOnion:<ingredient>{name:'Crispy Fried Onion',amount:'5 g'},
                friedOnionHalf:<ingredient>{name:'Crispy Fried Onion',amount:'3 g'},
                redOnion : <ingredient>{name:'Red Onions',amount:'10 g'},
                redOnionHalf : <ingredient>{name:'Red Onions',amount:'50 g'},
                sweetcorn:<ingredient>{name:'Sweet Corn', amount:'20 g'},
                sweetcornHalf:<ingredient>{name:'Sweet Corn', amount:'10 g'},
                redPepper:<ingredient>{name:'Red Pepper',amount:'20 g'},
                redPepperHalf:<ingredient>{name:'Red Pepper',amount:'10 g'},
                jalapenos:<ingredient>{name:' Fontinella Sliced Jalapeños',amount:'15 each'},
                jalapenosHalf:<ingredient>{name:' Fontinella Sliced Jalapeños',amount:'7 each'},
                mushrooms90 : <ingredient>{name:'Flat Mushrooms',amount:'90 g'},
                mushrooms70 : <ingredient>{name:'Flat Mushrooms',amount:'70 g'},
                mushroomsHalf : <ingredient>{name:'Flat Mushrooms',amount:'45 g'}
            }
            
        },
        cheese : {
            macCrumb: <ingredient>{name:'Mac Crumb',amount:'30 g'},
            vegan:{
                veganCheese100 : <ingredient>{name:'Vegan Cheese', amount:'100 g'},
                veganCheese50 : <ingredient>{name:'Vegan Cheese', amount:'50 g'},
            },
        },
        chilli:{
            beef : <ingredient>{name:'Beef Chilli',amount:'100g'},
            veggie : <ingredient>{name:'Veggie Chilli', amount:'100g'},
            flakes05: <ingredient>{name:'Chilli Flakes',amount:'0.5g'},
            flakes1: <ingredient>{name:'Chilli Flakes',amount:'1g'},
        },
        gravy:{
            truffle:{
                truffle100: <ingredient>{name:'Truffle Gravy',amount:'100g'},
                truffle50: <ingredient>{name:'Truffle Gravy',amount:'50g'},
            }
        },
        bacon:{
            bacon10:<ingredient>{name:'Cooked Bacon',amount:'10 g'},
            bacon5:<ingredient>{name:'Cooked Bacon',amount:'5 g'},
            baconBits:{
                bits15: <ingredient>{name:'Cheese Veg Italian Hard',amount:'15 g'}
            }
        },
        croutons : {
            croutons20 : <ingredient>{name:'Croutons',amount:'20 g'}
        }
    },
    veg :{
        avo:{
            avocado20: <ingredient>{name:'Avocado (fresh)',amount:'20 g'},
            avocado60: <ingredient>{name:'Avocado (fresh)',amount:'60 g (0.25 each)'}
        },
        cucumber : {
            cucumber10: <ingredient> {name:'Cucumber',amount:'10 g'},
            cucumber20: <ingredient> {name:'Cucumber',amount:'20 g'},
            cucumber30: <ingredient> {name:'Cucumber',amount:'30 g'},
        },
        lettuce : {
            cos : {
                cos15 : <ingredient> {name:'Cos Lettuce',amount:'15 g'},
                cos20 : <ingredient> {name:'Cos Lettuce',amount:'20 g'},
                cos30 : <ingredient> {name:'Cos Lettuce',amount:'30 g'},
                cos40 : <ingredient> {name:'Cos Lettuce',amount:'40 g'},
                cos150 : <ingredient> {name:'Cos Lettuce',amount:'150 g'},
            }
        },
        redPepper : {
            pepper30 : <ingredient> {name:'Red Peppers',amount:'30 g'},
            pepper20 : <ingredient> {name:'Red Peppers',amount:'20 g'},
            pepper25 : <ingredient> {name:'Red Peppers',amount:'25 g'},
            pepper15 : <ingredient> {name:'Red Peppers',amount:'15 g'},
        },
        rocket : {
            rocket5 : <ingredient> {name:'Rocket Washed', amount:'5 g'}
        },
        tomato:{
            plum:{
                plum20: <ingredient>{name:'Plum Tomatoes',amount:'20 g'},
                plum30: <ingredient>{name:'Plum Tomatoes',amount:'30 g'},
                plum40: <ingredient>{name:'Plum Tomatoes',amount:'40 g'},
            }
        },
        onion:{
            springOnion:{
                spring5 : <ingredient>{name:'Spring Onions',amount:'5 g'},
                spring10 : <ingredient>{name:'Spring Onions',amount:'10 g'},
            }
        },
        grains:{
            grains200 : <ingredient>{name:'Indian Summer Grains',amount:'200 g'}
        },
        slaw : {
            coleslaw:{
                coleslaw55:<ingredient>{name:'Coleslaw', amount:'55 g'},
                coleslaw80:<ingredient>{name:'Coleslaw', amount:'80 g'},
            },
            slaw:{
                slaw100 : <ingredient> {name:'Red Star Coleslaw',amount:'100 g'},
                slaw80 : <ingredient> {name:'Red Star Coleslaw',amount:'80 g'},
                slaw55 : <ingredient> {name:'Red Star Coleslaw',amount:'55 g'}
            }
        },
        pineapple:{
            pineapple60 : <ingredient> {name:'Pineapple',amount:'60 g'}
        }
    },
    dough:{
        gf : <ingredient>{name:'GF Pizza base',amount:'1 each'},
        full : <ingredient>{name:pizzaDough,amount:'260g (full)'},
        half : <ingredient>{name:pizzaDough,amount:'130g (half)'},
        quarter : <ingredient>{name:pizzaDough,amount:'65g (quarter)'},
    },
    other :{
        flour : {
            flour10 : <ingredient>{name:'Plain White Flour',amount:'10g'},
            flour5 : <ingredient>{name:'Plain White Flour',amount:'5g'},
        },
        tortilla : <ingredient>{name:'12" Flour Tortilla',amount:'1 each'},
        halloumi:<ingredient>{name:'Breaded Halloumi Fries',amount:'75 g (4 each)'},
        sausage:<ingredient>{name:'Frozen Cooked Sausage',amount:'60g (1 each)'},
        sausageHalf:<ingredient>{name:'Frozen Cooked Sausage',amount:'30g (0.5 each)'},
        bacon:{
            bacon5 : <ingredient>{name:'Cooked Bacon',amount:'5 g'},
            bacon2 : <ingredient>{name:'Cooked Bacon',amount:'2 g'},
            bacon3Slice : <ingredient>{name:'Cooked Bacon',amount:'3 slices'},
        },
        macCheese:{
            full : <ingredient>{name:"Mac'n'Cheese",amount:'1 serv'},// needs updating
            half : <ingredient>{name:"Mac'n'Cheese",amount:'0.5 serv'}
        },
        sourdough:{
            sourdough120 : <ingredient>{name:'Sourdough Bloomer',amount:'120 g (1 slice)'}
        },
        batter:{
            batter100: <ingredient>{name:'Beer Batter Mix',amount:'100 g'},
        },
        macNCheese : {
            mac450:<ingredient>{name:"Mac'n'Cheese",amount:'450 g'},

        }
    }
}