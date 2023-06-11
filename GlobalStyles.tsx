import { StyleSheet } from "react-native";
// This should be shared styles that don't change.
// So fontFamily is good, color is bad as color is subject to change by the user.
const GlobalStyles = StyleSheet.create({
    titleFont : {
        fontFamily:'Sansita'
    }
})

export default GlobalStyles;