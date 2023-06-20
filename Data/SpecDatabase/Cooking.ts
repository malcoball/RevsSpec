const Cooking = {
    beans:'Microwave the beans for 30 seconds',
    toast:'Toast the sourdough until golden & spread the button onto it',
    bun : {
        regular : 'Toast the bun',
        GF : 'Toast the bun',
    },
    bacon : 'Re-heat the bacon under the grill.',
    fries : {
        regular : 'Deep fry the fries untill golden, season with salt'
    },
    burger : {
        cheese : {
            regular : 'Top with cheese and put closh over with a splash of water to melt the cheese.',
            blue:'Serve the blue cheese slice on the burger.'
        },
        beef : {
            meat :{
                cajun : ' Season the burger with cajun seasoning, add a little oil on the griddle and cook the burger on both sides so it is well caramelised. Ensure a core temperature of 75°C (82°C in Scotland).',
                regular : 'Season the burger with 4:1 seasoning mix, add a little oil on the griddle and cook the burger on both sides so it is well caramelised. Ensure a core temperature of 75°C (82°C in Scotland)',
                blueCheese : 'Use the closh over it, add a little water underneath and leave for 30 secs to melt the cheese.',
                chilli:'Place the hot chilli on burger with the cheese & melt under a closh with a splash of water.'
            },
            veggie:{
                blueCheese : 'Melt under the salamander',
                chilli:'Place the hot chilli on the cooked burger with the cheese and melt under the salamander',
            },
            vegan:{
                regular:'Pan fry the burger in a pan with a little oil, colouring both sides to get a nice caramelisation',
                cajun:'Pan fry the burger with a little oil, colouring both sides to get nice caramelisation. Season the burger with cajun spice.'
            },
        },
        chilli: 'Re-heat the chilli in the microwave and stir in the chilli flakes.'
        
    },
    hashbrown:{
        single : 'Deep fry the hash brown until golden and crispy',
        multiple : 'Deep fry the hash browns until golden and crispy',
    },
    chicken :{
        breast:{
            cajun:'In a hot pan with no oil, sear the chicken on both sides until blackened, transfer to a tray if not cooked through to finish in the oven',
            fried:'Coat the chicken in the soy yoghurt, coat the chicken in the gluten free breading, fry for 3-4 mins untill golden and crispy.',
            vegan:'Cook the vegan chicken as per the spec. Ensure a core temperature of 75°C (82°C in Scotland)',
            franks:'Toss the chicken in the Franks sauce'
        },
        strips:{
            fried : 'Deep fry the 3 chicken strips as per the spec.'
        }
    },
    gravy:'Re-heat the truffle gravy in the microwave',
    sauce : {
        cheese : 'Re-heat the cheese sauce in the microwave.',
        hollandaise : 'Re-heat the hollandaise in the microwave for 30 secs',
    },
    egg :{
        poached :[
            `Whisk the water, when it is spinning well pour the eggs one
            at a time in to the water. As the water returns to the boil skim
            off the excess white and discard.`,
            `Turn the heat off from under the water and leave the eggs
            for 1-2 minutes depending on size checking them by lifting hem
            out with a slotted spoon, they should be a little bit firm with
            runny yolk.`,
            `Plunge in to ice water if they are not being used straight
            away.`,
        ],
        fried:'Fry the eggs leaving the yolks runny',
    },
    pizza : 'Bake built pizza in oven for 2-3 minutes, turning half way through',
    sausage :{
        meat:'Heat the sausage in the microwave and finish off in the  oven if not up to temperature. Ensure a core temperature of 75°C (82°C in Scotland).',
        vegan:'Heat through the sausages in the oven, colouring all sides brown all over',
    },
    waffle :' Drizzle the waffle with rapeseed oil and bake in the oven until lightly golden.',
    pancake:'. Re-heat the pancakes in the oven for 3-4 minutes until warmed through.',
    veg:{
        mushroom : 'Sautee the mushroom until just cooked in a hot pan',
        tomato:'Cook the tomato under the grill with a little oil and salt'
    }
}
export default Cooking;