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
                breast600: <ingredient>{name:'Chicken Breast',amount:'600g (3 pieces)'},
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
            breast600 : <ingredient>{name:'Arleys Plant Based Chicken Breast',amount:'600g (1 each)'},
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
                sliderV1:{name:'Meatless Burger',amount : '1/2'},
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
            crushedChillis1:<ingredient>{name:'Crushed Chillies',amount:'1 g'},
            crushedChillis2:<ingredient>{name:'Crushed Chillies',amount:'2 g'},
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
            relish10: <ingredient>{name:"Revolution Relish",amount:"10 g"},
        },
        seasoning:{
            rs: <ingredient>{name:'RS 4:1 Seasoning Bulk',amount:'1g'},
            rs2: <ingredient>{name:'RS 4:1 Seasoning Bulk',amount:'2g'},
            crushedChillies : <ingredient>{name:'Crushed Chillies',amount:'2g'},
            cajun : <ingredient>{name:'Cajun Seasoning',amount:'2 g'},
            seasoning : <ingredient>{name:'Seasoning',amount:'1 g'}
        },
        veg:{
            iceberg : <ingredient>{name:"Iceberg Lettuce",amount:"20 g"},
            iceberg5 : <ingredient>{name:"Iceberg Lettuce",amount:"5 g"},
        }
    },
    cheese:{
        blueCheese:{
            slices150 : <ingredient>{name:'Blue Cheese Slices',amount:'150 g'}
        },
        vegan:{
            grated40 : <ingredient>{name:'Vegan Grated Cheddar',amount:'40 g'}
        }
    },
    dessert:{
        // brownie : <ingredient> {name:'Chocolate Brownie',amount:'1.5 each'},
        cream:{
            aerosolCream30 : <ingredient>{name:'Aerosol Cream',amount:'30 g'}
        },
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
        torte: <ingredient>{name:' Chocolate & Clementine Torte',amount:'1 slice'},
        pancake:{
            pancake3 : <ingredient>{name:'American Pancakes',amount:'3 each'}
        }

    },
    dip:{
        hummus :{
            hummus : <ingredient> {name:'Hummus',amount:'55 g'},
            hummus30 : <ingredient> {name:'Hummus',amount:'30 g'},
            hummus300 : <ingredient> {name:'Hummus',amount:'300 g'},
            haissa : <ingredient> {name:'Harissa Hummus',amount:'55 g'},
        },
        saucePot : {
            mayo : <ingredient> {name:'Mayonnaise',amount:'35 g'},
            relish : <ingredient> {name:`Rev's Relish`,amount:'35 g'},
            bbq : <ingredient> {name:`BBQ Sauce`,amount:'35 g'},
            sourCream : <ingredient> {name:'Sour Cream',amount:'35 g'},
            blueCheeseMayo : <ingredient> {name:'Blue Cheese Mayo',amount:'35 g'},
            srirachaMayo : <ingredient> {name:'Sriracha Mayo',amount:'35 g'},
            sriracha : <ingredient> {name:'Sriracha',amount:'35 g'},
            buffalo : <ingredient> {name:'Franks Buffalo Wing sauce',amount:'35 g'},
            mapleSyrup:<ingredient>{name:'Maple Syrup',amount:'40 ml'},
            salsa:<ingredient>{name:'Chilli Vodka Salsa',amount:'35 g'}
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
            rapeseed5 : <ingredient>{name : 'Rapeseed Oil',amount:'5 ml'},
            rapeseed7 : <ingredient>{name : 'Rapeseed Oil',amount:'7 ml'},
            rapeseed10 : <ingredient>{name : 'Rapeseed Oil',amount:'10 ml'},
            rapeseed15 : <ingredient>{name : 'Rapeseed Oil',amount:'15 ml'},
            rapeseed13g : <ingredient>{name : 'Rapeseed Oil',amount:'13 g'},
            rapeseed20g : <ingredient>{name : 'Rapeseed Oil',amount:'20 g'},
            rapeseed50g : <ingredient>{name : 'Rapeseed Oil',amount:'50 g'},
            rapeseed60g : <ingredient>{name : 'Rapeseed Oil',amount:'60 g'},
            olive : <ingredient>{name :'Olive Oil',amount:'5 g'},
            olive20 : <ingredient>{name :'Olive Oil',amount:'20 g'},
            olive30 : <ingredient>{name :'Olive Oil',amount:'30 g'},
            truffle5:<ingredient>{name:'Black Truffle Oil',amount:'5 g'},
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
            coriander5 : <ingredient> {name:'Coriander',amount:'5 g'},
            coriander2 : <ingredient> {name:'Coriander',amount:'2 g'},
            coriander : <ingredient> {name:'Coriander',amount:'1 g'},
            corianderHalf : <ingredient> {name:'Coriander',amount:'0.5 g'},
            corianderGround :{
                coriander5 : <ingredient>{name:'Ground Coriander', amount:'5 g'}
            },
            parsley : <ingredient> {name:'Flat Leaf Parsley',amount:'1 g'},
            parsleyHalf : <ingredient> {name:'Flat Leaf Parsley',amount:'0.5 g'},
        },
        icingSugar : <ingredient>{name:'Icing Sugar',amount:'1 g'},
        pomegranate : {
            pomegranate5 : <ingredient> {name:'Pomegranate',amount:'5 g'},
            pomegranate10 : <ingredient> {name:'Pomegranate',amount:'10 g'},
        },
        mint:{
            mint2g: <ingredient>{name:'Mint', amount:'2 g'},
            mint3g : <ingredient>{name:'Mint', amount:'3 g'}
        },
        crushedChilli1:<ingredient>{name:'Crushed Chillies',amount:'1 g'},
        crushedChilli2:<ingredient>{name:'Crushed Chillies',amount:'2 g'},
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
            fingers4 : <ingredient>{name:'Fish Fingers',amount:'4 each'},
            fingers5 : <ingredient>{name:'Fish Fingers',amount:'5 each'}
        },
        fillet : <ingredient>{name:'Pengasius Fillet',amount:'300 g (1 piece)'}
    },
    fruit:{
        banana:{
            banana1 : <ingredient> {name:'Bananas',amount:'1 each'}
        },
        strawberry:{
            strawberry20 : <ingredient> {name:'Strawberries',amount:'20 g'},
            strawberry30 : <ingredient> {name:'Strawberries',amount:'30 g'},
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
            french10:<ingredient>{name:'French Dressing',amount:'10 ml'},
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
            chocolate25 : <ingredient>{name:'Chocolate Sauce',amount:'25 g'},
            nutella:{
                nutella40 : <ingredient>{name:'Nutella', amount:'40 g'},
                nutella60 : <ingredient>{name:'Nutella', amount:'60 g'},
            }
        },
        caramel:{
            caramel20: <ingredient>{name:'Salted Caramel Sauce',amount:'20 g'}
        },
        cheese :{
            cheese120: <ingredient>{name:'Cheese Sauce',amount:'120 g'},
            cheese60 : <ingredient>{name:'Cheese Sauce',amount:'60 g'},
        },
        strawberry : {
            strawberry25:<ingredient>{name:'Strawberry Puree',amount:'25 g'}  
        },
        garlicButter :{
            garlicButter10 : <ingredient> {name:'Garlic Butter',amount:'10 g'},
            garlicButter30 : <ingredient> {name:'Garlic Butter',amount:'30 g'},
        },
        hollandaise:{
            hollandaise60:<ingredient>{name:'Hollandaise',amount:'60 g'}
        },
        bbq:{
            bbq15 : <ingredient> {name:'BBQ Sauce',amount:'15 g'},
            bbq20 : <ingredient> {name:'BBQ Sauce',amount:'20 g'},
            bbq50 : <ingredient> {name:'BBQ Sauce',amount:'50 g'},
            bbq100 : <ingredient> {name:'BBQ Sauce',amount:'100 g'},
            beerbbq50: <ingredient>{name:'Beer & BBQ sauce',amount:'50 g'}
        },
        mayo:{
            mayo20: <ingredient>{name:'Mayonnaise',amount:'20 g'},
            mayo30: <ingredient>{name:'Mayonnaise',amount:'30 g'},
            mayo35: <ingredient>{name:'Mayonnaise',amount:'35 g'},
            mayo100: <ingredient>{name:'Mayonnaise',amount:'100 g'},
            mayo200: <ingredient>{name:'Mayonnaise',amount:'200 g'},
            mayo300: <ingredient>{name:'Mayonnaise',amount:'300 g'},
            limePickle : {
                lime15 : <ingredient>{name:'Lime Pickle Mayo',amount:'15 g'},
            }
        },
        limePickle : {
            limePickle50 : <ingredient>{name:'Lime Pickle',amount:'50 g'},
            limePickle30 : <ingredient>{name:'Lime Pickle',amount:'30 g'},
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
        sriracha:{
            sriracha30 : <ingredient> {name:'Sriracha Sauce', amount:'30 g'},
            sriracha10 : <ingredient> {name:'Sriracha Sauce', amount:'10 g'}
        },
        franks: <ingredient> {name:'Franks Buffalo Wing Sauce',amount:'20 g'},
        franksHalf: <ingredient> {name:'Franks Buffalo Wing Sauce',amount:'10 g'},
        mustard:{
            french25:<ingredient>{name:'French Mustard',amount:'50 g'}
        }
    },
    seasoning:{
        cajun:{
            cajun1:<ingredient>{name:'Cajun Seasoning',amount:'1 g'},
            cajun2:<ingredient>{name:'Cajun Seasoning',amount:'2g'},
            cajun10:<ingredient>{name:'Cajun Seasoning',amount:'10 g'},
        },
        cumin:{
            cumin3 : <ingredient>{name:'Cumin',amount:'3 g'},
        },
        curry:{
            curry2: <ingredient>{name:'Madras Curry Powder',amount:'2 g'}
        },
        tableSalt : <ingredient>{name:'Table Salt',amount:'0.5 g'},
        salt05 : <ingredient>{name:'Salt',amount:'0.5 g'},
        salt : <ingredient>{name:'Salt',amount:'1 g'},
        salt2 : <ingredient>{name:'Salt',amount:'2 g'},
        salt5 : <ingredient>{name:'Salt',amount:'5 g'},
        saltPepperFry:<ingredient> {name:'Salt & Pepper Fry Seasoning',amount:'1.5 g'},
        crackedBlackPepper:<ingredient>{name:'Cracked black pepper',amount:'1 g'},
        crackedBlackPepper05:<ingredient>{name:'Cracked black pepper',amount:'0.5 g'},

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
            beans100 : <ingredient>{name:'Baked Beans',amount:'100 g'},
            bbq:{
                bbq115 : <ingredient>{name:'BBQ Beans',amount:'115 g'},
            },
        },
        falafel:{
            falalfel4:<ingredient>{name:'Pea & Mint Falafel',amount:'4 each'}
        },
        fries:{
            standard : <ingredient>{name:'Fries',amount:'1 serving'},
            fries200 : <ingredient>{name:'Fries',amount:'200 g'},
            fries150 : <ingredient>{name:'Fries',amount:'150 g'},
            fries100 : <ingredient>{name:'Fries',amount:'100 g'},
        },
        houseSalad:<ingredient>{name:'House Salad',amount:'1 serving'},
        onionRings : {
            onion8 : <ingredient>{name:'Onion Rings',amount:'160 g (8 each)'},
            onion6 : <ingredient>{name:'Onion Rings',amount:'120 g (6 each)'},
        },
        jalapenoPopper:{
            jalapenoPopper4: <ingredient>{name:'Jalapeno Popper',amount:'165 g (4 each)'}
        },
        rice: <ingredient>{name:'Rice',amount:'200 g'},
        mushyPeas: <ingredient>{name:'Mushy Peas',amount:'100 g'},
        chosenSide:<ingredient>{name:'Chosen side',amount:'1'}
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
                mozzarella50 : <ingredient>{name:'Grated Mozzarella',amount:'50 g'},
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
                redOnion40 : <ingredient>{name:'Red Onions',amount:'40 g'},
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
                veganGrated100:<ingredient>{name:'Vegan Grated Cheddar',amount:'100 g'}
            },
        },
        chilli:{
            beef : <ingredient>{name:'Beef Chilli',amount:'100g'},
            beef200 : <ingredient>{name:'Beef Chilli',amount:'200g'},
            veggie : <ingredient>{name:'Veggie Chilli', amount:'100g'},
            veggie200 : <ingredient>{name:'Veggie Chilli', amount:'200g'},
            flakes05: <ingredient>{name:'Chilli Flakes',amount:'0.5g'},
            flakes1: <ingredient>{name:'Chilli Flakes',amount:'1g'},
        },
        gravy:{
            gravy:{
                gravy200: <ingredient>{name:'Gravy', amount : '200 ml'}
            },
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
            avocado60: <ingredient>{name:'Avocado (fresh)',amount:'60 g (0.25 each)'},
            avocado100: <ingredient>{name:'Avocado (fresh)',amount:'100 g'},
            avocado115: <ingredient>{name:'Avocado (fresh)',amount:'115 g (0.5 each)'},
            smashed:{
                smashed100 : <ingredient>{name:'Seasoned Avocado Chunky Smash',amount:'100 g'}
            }

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
            pepper135:<ingredient>{name:'Red Pepper',amount:'135 g'},
            pepper30 : <ingredient> {name:'Red Peppers',amount:'30 g'},
            pepper20 : <ingredient> {name:'Red Peppers',amount:'20 g'},
            pepper25 : <ingredient> {name:'Red Peppers',amount:'25 g'},
            pepper15 : <ingredient> {name:'Red Peppers',amount:'15 g'},
        },
        rocket : {
            rocket5 : <ingredient> {name:'Rocket Washed', amount:'5 g'},
            rocket10 : <ingredient> {name:'Rocket Washed', amount:'10 g'},
        },
        tomato:{
            plum:{
                plum20: <ingredient>{name:'Plum Tomatoes',amount:'20 g'},
                plum30: <ingredient>{name:'Plum Tomatoes',amount:'30 g'},
                plum35: <ingredient>{name:'Plum Tomatoes',amount:'35 g'},
                plum40: <ingredient>{name:'Plum Tomatoes',amount:'40 g'},
                plum80: <ingredient>{name:'Plum Tomatoes',amount:'80 g'},
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
                slaw55 : <ingredient> {name:'Red Star Coleslaw',amount:'55 g'},
                slaw50 : <ingredient> {name:'Red Star Coleslaw',amount:'50 g'},
            }
        },
        sweetcorn:{
            sweetcorn50 : <ingredient>{name:'Sweetcorn',amount:'50 g'}
        },
        pineapple:{
            pineapple60 : <ingredient> {name:'Pineapple',amount:'60 g'}
        },
        mushroom:{
            mushrooms60 : <ingredient>{name:'Flat Mushrooms',amount:'60 g'},
            mushrooms50 : <ingredient>{name:'Flat Mushrooms',amount:'50 g'},
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
        sausage:{
            vegan:{
                vegan2 : <ingredient>{name:'Quorn Vegan Sausage',amount:'2 each'}
            },
            sausage2:<ingredient>{name:'Frozen Cooked Sausage',amount:'120g (2 each)'},
            sausage:<ingredient>{name:'Frozen Cooked Sausage',amount:'60g (1 each)'},
            sausageHalf:<ingredient>{name:'Frozen Cooked Sausage',amount:'30g (0.5 each)'},
            
        },
        egg :{
            egg1 : <ingredient>{name:'Free Range Eggs',amount:'1'},
            egg2 : <ingredient>{name:'Free Range Eggs',amount:'2'},
        },
        bacon:{
            bacon1k : <ingredient>{name:'Cooked Bacon',amount:'1 kg'},
            bacon5 : <ingredient>{name:'Cooked Bacon',amount:'5 g'},
            bacon2 : <ingredient>{name:'Cooked Bacon',amount:'2 g'},
            bacon2Slice : <ingredient>{name:'Cooked Bacon',amount:'2 slices'},
            bacon3Slice : <ingredient>{name:'Cooked Bacon',amount:'3 slices'},
            bacon4Slice : <ingredient>{name:'Cooked Bacon',amount:'4 slices'},
        },
        butter :{
            butter15 : <ingredient>{name:'English Unsalted Butter',amount:'15 g'}
        },
        gravy:{
            granules80 : <ingredient>{name:'Savoury Gravy Granules', amount:'80 g'}
        },
        macCheese:{
            full : <ingredient>{name:"Mac'n'Cheese",amount:'1 serv'},// needs updating
            half : <ingredient>{name:"Mac'n'Cheese",amount:'0.5 serv'}
        },
        sourdough:{
            sourdough120 : <ingredient>{name:'Sourdough Bloomer',amount:'120 g (1 slice)'},
            sourdough70 : <ingredient>{name:'Sourdough Bloomer',amount:'70 g'},
            sourdough60 : <ingredient>{name:'Sourdough Bloomer',amount:'60 g'},
        },
        batter:{
            batter100: <ingredient>{name:'Beer Batter Mix',amount:'100 g'},
            batter500: <ingredient>{name:'Beer Batter Mix',amount:'500 g'},
        },
        breading:{
            breading90: <ingredient>{name:'GF Chicken Breading',amount:'90 g'}
        },
        macNCheese : {
            mac450:<ingredient>{name:"Mac'n'Cheese",amount:'450 g'},
            mac225:<ingredient>{name:"Mac'n'Cheese",amount:'225 g'},
        },
        milk:{
            milk200:<ingredient>{name:'Semi Skimmed Milk',amount:'200ml'}
        },
        water:{
            water800:<ingredient>{name:'Water',amount:'800 ml'},
            water1000:<ingredient>{name:'Water',amount:'1 l'},
        },
        salsa:{
            salsa500:<ingredient>{name:'Tomato Salsa',amount:'500 g'}
        },
        yoghurt:{
            yoghurt110:<ingredient>{name:'Alpro Soy Yogurt',amount:'110 g'}
        },
        breadCrumbs:{
            breadCrumbs100 : <ingredient>{name:'Panko Breadcrumbs', amount:'100 g'},
        },
        hashbrown:{
            hashbrown1 : <ingredient>{name:'Hash Brown', amount:'1 each'},
            hashbrown2 : <ingredient>{name:'Hash Brown', amount:'2 each'},
        }
    },
    lager:{
        amstel:{
            amstel25:<ingredient>{name:'Amstel lager',amount:'25 ml'},
            amstel50:<ingredient>{name:'Amstel lager',amount:'50 ml'},
            amstel200:<ingredient>{name:'Amstel lager',amount:'200 g'}
        }
    },
    vodka:{
        chilli35:<ingredient>{name:'Chilli Vodka',amount:'35 g'}
    }
}