import React from 'react'
import {  TouchableOpacity ,Text} from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Button = ({ bgColor, btnLabel, txtColor,Press }) => {
    return (
        <TouchableOpacity onPress={Press}  style={{ backgroundColor: bgColor, 
         borderRadius: 100, alignItems: 'center', marginVertical:responsiveHeight(2), 
         width: responsiveWidth(75),paddingVertical:6}}>
            <Text style={{ color: txtColor, fontSize: 30, fontWeight: 'bold' }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}
export default Button;