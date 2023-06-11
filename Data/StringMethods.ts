export const StringMethods = {
    case : {
        capitalizeFirstLetter : (stringIn:string):string=>{
            return stringIn.charAt(0).toUpperCase() + stringIn.slice(1);
        }
    },
    swap:{
        byStrings : (stringIn:string,string1:string,string2:string):string=>{
            let split = stringIn.split(" ");
            let index1 = -1; let index2 = -1;
            split.forEach((elm,ind)=>{
                if (string1 === elm) index1 = ind; else 
                if (string2 === elm) index2 = ind;
            })
            if ((index1 !== -1) && (index2 !== -1)){
                let out = "";
                let temp = split[index1];
                split[index1] = split[index2];
                split[index2] = temp;
                split.forEach(elm =>{out += elm+" "});
                out = out.slice(0,out.length - 1);
                return out;
            } else {
                console.error("strings not found bruh")
                return stringIn;
            }
        }
    }
}