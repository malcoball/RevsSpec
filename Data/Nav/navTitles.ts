import { specType } from "../@types/types"
import Images from "../Images"
type navTitle = {
    title : specType,
    image : any,
}
export const navTitles  : navTitle[]=[
        {title:'burger',image:Images.nav.burger},
        {title:'grazer',image:Images.nav.grazer},
        {title:'sharer',image:Images.nav.other},
        {title:'main',image:Images.nav.other},
        {title:'kids',image:Images.nav.kid},
        {title:'dessert',image:Images.nav.dessert},
        {title:'brunch',image:Images.nav.brunch},
        {title:'pizza',image:Images.nav.pizza},
        {title:'prep',image:Images.nav.spec},
]