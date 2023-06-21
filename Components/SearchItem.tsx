import { Text, TouchableOpacity } from "react-native"

const SearchItem = (props:{title:string})=>{
    return (
        <TouchableOpacity>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default SearchItem;