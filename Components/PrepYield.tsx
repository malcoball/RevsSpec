import { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native"
import { AppContext } from "../Data/Context/AppContext";

const PrepYield = (props:{multiply:{data:string,setData:React.Dispatch<React.SetStateAction<string>>},yieldTotal:number|string})=>{
    // const [data,setData] = useState("1");

    const context = useContext(AppContext);

    const styles = StyleSheet.create({
        container:{
            backgroundColor:context.colorScheme.background3,
            borderTopRightRadius:16,
            width:'45%',
            alignItems:'center'
        },
        textTitle:{
            textAlign:'center',
            fontSize: 18,
            color:context.colorScheme.text1
        },
        textBody:{
            // width:'50%',
            alignSelf:'center',
            textAlign:'center',
            color:context.colorScheme.text2
        },
        inputContainer:{
            borderColor:context.colorScheme.background2,borderWidth:1,borderStyle:'dashed',
            width:'50%',
            flexDirection:'row',
            justifyContent:'center',
            paddingLeft:6
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Yield</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textBody}
                    onChangeText={props.multiply.setData}
                    value={props.multiply.data}
                    placeholder="0"
                    keyboardType="numeric"
                />
                <Text style={styles.textBody}>x</Text>
            </View>
            <Text style={styles.textBody}>{props.yieldTotal}</Text>
        </View >
    )
}



export default PrepYield;