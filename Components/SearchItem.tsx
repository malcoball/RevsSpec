import { Text, TouchableOpacity } from "react-native"

const SearchItem = (props:{title:string,clickFunc:(target:string)=>void})=>{
    const {title,clickFunc} = props;
    return (
        <TouchableOpacity onPress={()=>{clickFunc(title)}}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default SearchItem;