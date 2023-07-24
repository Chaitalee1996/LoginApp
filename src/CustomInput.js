import React from 'react-native'
import { View, TextInput,StyleSheet} from 'react-native'

import { darkGreen, textcolor } from './Constant';

import {  responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const CustomInput=({value,placeholder,setValue,secureTextEntry})=>{
    return(
            <View>
                <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={darkGreen}
                />

                
            </View>
    )
}
const styles=StyleSheet.create({
    input:{
    
        borderRadius: 100, marginLeft: responsiveWidth(8),
        color: darkGreen, paddingHorizontal: responsiveWidth(5),
        width: responsiveWidth(90), backgroundColor: textcolor,
        marginVertical: responsiveHeight(1)
    }
})
export default CustomInput;
