const Cooking = {
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
    chicken :{
        breast:{
            cajun:'In a hot pan with no oil, sear the chicken on both sides until blackened, transfer to a tray if not cooked through to finish in the oven',
            fried:'Coat the chicken in the soy yoghurt, coat the chicken in the gluten free breading, fry for 3-4 mins untill golden and crispy.',
            vegan:'Cook the vegan chicken as per the spec. Ensure a core temperature of 75°C (82°C in Scotland)',
            franks:'Toss the chicken in the Franks sauce'
        }
    },
    gravy:'Re-heat the truffle gravy in the microwave',
    sauce : {
        cheese : 'Re-heat the cheese sauce in the microwave.'
    }
}
export default Cooking;