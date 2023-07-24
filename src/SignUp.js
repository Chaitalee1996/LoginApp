import React from 'react'
import { Text, View, TextInput,ScrollView } from 'react-native'
import Background from './Background'
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import Button from './Button';
import { useState } from 'react';
import { darkGreen, textcolor } from './Constant';
const SignUp = (props) => {

    const handlePasswordChange = (val) => {
        let passwordReg = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
        if (passwordReg.test(val) === true) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            })
        }
        else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            })
        }

    }

    const textEmailChange = (val) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(val) === true) {
            setData({
                ...data,
                username: val,
                isValiUser: true
            })

        }
        else {
            setData({
                ...data,
                username: val,
                isValiUser: false
            })
        }
    }
    handleMobileChange=(val)=>{
        return(
            console.log('MobileNO:',data.MobileNo)
        )
    }
    saveData=()=>{
        if (data.username && data.email && data.MobileNo && data.confirmPassword && data.password){
            if(data.password===data.confirmPassword)
            console.log('Registraion Success')
        }
        else{
            console.log('Regitrastion faild')
        }
    }
   
    const [data, setData] = useState({
        username: '',
        email:'',
        password: '',
        confirmPassword: '',
        MobileNo: '',
        tc:'',
        isValiUser: true,
        isValidPassword: true,
    })
    return (
        <Background>
              <ScrollView keyboardShouldPersistTaps="handled"/>
            
            <View style={{ alignItems: 'center', width: responsiveScreenWidth(110) }}>
                <Text style={{ color: "white", fontSize: responsiveFontSize(8), fontWeight: 'bold', marginVertical: responsiveHeight(5) }}>SignUp</Text>
                <View style={{
                    backgroundColor: 'white', height: responsiveScreenHeight(80),
                    width: responsiveScreenWidth(115),
                    borderTopLeftRadius: responsiveWidth(25)
                }}>
                    <Text style={{ fontSize: responsiveFontSize(5), color: darkGreen, fontWeight: 'bold', marginLeft: responsiveWidth(20), marginTop: responsiveHeight(10) }}>Welcome!!!</Text>
                    <Text style={{ color: 'grey', fontSize: responsiveFontSize(2), fontWeight: 'bold', marginBottom: responsiveHeight(5), marginLeft: responsiveHeight(10) }}>
                        Signup to your account
                    </Text>

                    {/* <Field placeholder="Password" secureTextEntry={true}  passwordValue='password'/>  */}

                    {/* Username Input Text */}
                    <TextInput
                        style={{
                            borderRadius: 100, marginLeft: responsiveWidth(8),
                            color: darkGreen, paddingHorizontal: responsiveWidth(5),
                            width: responsiveWidth(90), backgroundColor: textcolor,
                            marginVertical: responsiveHeight(1)
                        }}
                        placeholder='Enter Name'
                        placeholderTextColor={darkGreen}
                        value={data.username}
                        onChangeText={txt => textEmailChange(txt)}
                    ></TextInput>

                    <TextInput
                        style={{
                            borderRadius: 100, marginLeft: responsiveWidth(8),
                            color: darkGreen, paddingHorizontal: responsiveWidth(5),
                            width: responsiveWidth(90), backgroundColor: textcolor,
                            marginVertical: responsiveHeight(1)
                        }}
                        placeholder='Enter Email Id'
                        placeholderTextColor={darkGreen}
                        value={data.username}
                        onChangeText={txt => textEmailChange(txt)}
                    ></TextInput>


                    {/* Mobile No */}
                    <TextInput
                        style={{
                            borderRadius: 100, marginLeft: responsiveWidth(8),
                            color: darkGreen, paddingHorizontal: responsiveWidth(5),
                            width: responsiveWidth(90), backgroundColor: textcolor,
                            marginVertical: responsiveHeight(1)
                        }}
                        placeholder='Enter Mobile Number'
                        placeholderTextColor={darkGreen}
                        secureTextEntry={true}
                        value={data.MobileNo}
                        onChangeText={txt => handleMobileChange(txt)}
                    ></TextInput>
                    {/* Password InputText */}
                    <TextInput
                        style={{
                            borderRadius: 100, marginLeft: responsiveWidth(8),
                            color: darkGreen, paddingHorizontal: responsiveWidth(5),
                            width: responsiveWidth(90), backgroundColor: textcolor,
                            marginVertical: responsiveHeight(1)
                        }}
                        placeholder='Enter Password'
                        placeholderTextColor={darkGreen}
                        secureTextEntry={true}
                        value={data.password}
                        onChangeText={txt => handlePasswordChange(txt)}
                    ></TextInput>
                    {/* Confirm Password */}
                    <TextInput
                        style={{
                            borderRadius: 100, marginLeft: responsiveWidth(8),
                            color: darkGreen, paddingHorizontal: responsiveWidth(5),
                            width: responsiveWidth(90), backgroundColor: textcolor,
                            marginVertical: responsiveHeight(1)
                        }}
                        placeholder='Enter Confirm Password'
                        placeholderTextColor={darkGreen}
                        secureTextEntry={true}
                        value={data.confirmPassword}
                        onChangeText={txt => handlePasswordChange(txt)}
                    ></TextInput>
                    {/* <CheckBox value={tc} onValueChange={setData} color={tc?'green':undefined}></CheckBox> */}

                    <View style={{ marginLeft: responsiveWidth(15) }}>
                        <Button txtColor="white" bgColor={darkGreen} btnLabel="SignUp" Press={() => saveData()} />
                        {/* <Button txtColor="white" bgColor={darkGreen} btnLabel="Login" Press={() => saveData()} /> */}
                    </View>
                </View>
            </View>

        </Background>
    )
}
export default SignUp;