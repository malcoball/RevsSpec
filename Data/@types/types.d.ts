export type appContextType = {
    colorScheme :{ 
        background1 : string,
        background2 : string,
        background3 : string,
        background4 : string,
        text1 : string,
        text2 : string,
        text3 : string,
        text4 : string,
    }
}
export type ingredient = {
    name : string,
    amount : string
}
export type variantType = "vegan" | "vegetarian" | "glutenFree" | "skinny";
export type specType = "burger" | "grazer" | "kids" | "dessert" | "brunch" | "pizza" | "party" | "prep" | "other" | "side" |"main" | "sharer"|"sandwich" | "wrap" |variantType;
type specInput = {
    title:string;
    builds: build[];
    image: any;
    crockery: string[];
    ingredients: ingredient[];
    type : specType | specType[]
}
export type specItem = {
    title : string;
    type : specType[] | specType;
    ingredients : ingredient[];
    crockery : string[];
    image : string;
    builds : build[];
    index: number;
    variants : {vegan : variant,vegetarian : variant, glutenFree : variant, skinny : variant, chilli : variant, veggieChilli : variant};
}
type variant = "active" | "show" | "hide"
export type variants ={
    vegan       : variant,
    vegetarian  : variant,
    glutenFree  : variant,
    skinny      : variant,
    chilli      : variant,
    veggieChilli: variant,
}
export type build = {
    title : buildTypes,
    items : string[] 
}
type buildTypes = "Burger Build" | "Prep"| "Pizza Build" | "Cooking"| "Plating" |"Error";


export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };