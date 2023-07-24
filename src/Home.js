import React from "react";
import {View,Image, StyleSheet} from 'react-native';
import Background from "./Background";
import Button from "./Button";
import {  responsiveHeight, responsiveScreenWidth, responsiveWidth, } from 'react-native-responsive-dimensions';

import { darkGreen, green } from "./Constant";
import {
    responsiveScreenHeight,
 
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const Home=(props)=>{
    return(
        <Background>
            <View style={styles.root}> 
           <Image style={styles.logo} source={require('../src/asset/logo.jpg')}/>
            <Button bgColor={green} txtColor='white' btnLabel="SignIn" Press={()=>props.navigation.navigate("Login")} />
            <Button bgColor='white' txtColor={darkGreen} btnLabel="SignUp"  Press={()=>props.navigation.navigate("SignUp")}  />
            </View>
        </Background>
    )
}
const styles=StyleSheet.create({
    root:{
        marginHorizontal:40,
        marginVertical:100
    },
    logo:{
        width:responsiveWidth(80),
        height:responsiveHeight(30),
        justifyContent:'center',
        alignItems:'center',
        marginVertical:responsiveWidth(15)
    }
})

export default Home;
