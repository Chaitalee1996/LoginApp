import React, { ScrollView } from 'react-native'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Background from './Background';
import { darkGreen, textcolor } from './Constant';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import { responsiveFontSize, responsiveHeight, 
    responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage'
import CustomInput from './CustomInput';



let db = openDatabase({ name: 'LoginDatabase.db' })

const Login = (props) => {
    const [data, setData] = useState({
        username: '',
        password: '',
        isValiUser: true,
        isValidPassword: true,
    })

    const [error,setError]=useState({
        userNameError:'',
        passwordError:''
    })
    const toastConfig = {
        warning: ({ text1, props }) => (<View style={{ height: 30, width: "100%", backgroundColor: 'orange' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>),
        done: ({ text1, props }) => (<View style={{ height: 30, width: "100%", backgroundColor: '#1affc6' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>)
    }
    const clearInputText=()=>{
        setData('')
    }

  

    // DataBase Creation
    const navigation = useNavigation();
    useEffect(() => {
        db.transaction(txn => {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='loginUser_table'",
                [],
                (tx, res) => {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS loginUser_table', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS loginUser_table(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), user_email VARCHAR(50), user_password VARCHAR(100))',
                            [],
                        );
                    }
                },
                error => {
                    console.log(error);
                },
            );
        });
    }, []);
    //Data Creation End

    // Insert Query
    const saveData = (props) => {

        // console.log("Login", data.username, data.password)
        // db.transaction(txn => {
        //     txn.executeSql('INSERT INTO loginUser_table(user_email,user_password) VALUES (?,?) ',
        //         [data.username, data.password],
        //         (tx, res) => {
        //             console.log('result', res.rowsAffected)
        //             if (res.rowsAffected == 1) {
                        
        //                 Alert.alert(
        //                     'Success',
        //                     'Login Successfully',
        //                     [
        //                         {
        //                             text: 'Ok',
        //                             onPress: () => navigation.navigate("Profile"),
                                  
        //                         },
        //                     ],
        //                     clearInputText(),
        //                     { cancelable: false },
        //                 );
        //             }
        //             else {
        //                 console.log("inserted rows:", res)
        //                 Toast.done({
        //                     type: 'warning',
        //                     position: 'top',
        //                     topOffset: 0,
        //                     text1: "Login Faild"
        //                 })
                         
        //             }
        //         },
        //         error => {
        //             console.log(error)
        //         }
        //     );
        // });
        
       
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            // const phone = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      
            let type = typeof data.username;
            console.log(type);
      
            
              if (reg.test(data.username) === false) {
                setError({
                    ...error,
                    userNameError:'Please Enter Valid Email'
                });
                return;
              } else {
                setError('');
              }
            
          
        if (data.username && data.password) {
            clearInputText();
            Toast.show({
                type: 'done',
                position: 'top',
                topOffset: 0,
                text1: "Login Successful"
            })
           navigation.navigate('Profile'), console.log("Login", data.username, data.password)

        }
        else {
            console.log('All fields are requried')
            Toast.show({
                type: 'warning',
                position: 'top',
                topOffset: 0,
                text1: "All fields are requried"
            })
        }
    }
    // Insert Query End

    // {Validation start}
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

        const textEmailChange=(val)=>{
            setData({
                            ...data,
                            username: val,
                           
                        })
            if (data.username.length === 0) {
             
                setError({
                    ...error,
                    userNameError:'Please Enter Email/Uername!'
                    
                });
                return;
              }
              if (data.username.length !== 0) {
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                // const phone = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
          
                let type = typeof data.username;
                console.log(type);
          
                {
                  if (reg.test(data.username) === false) {
                    setError({
                        ...error,
                        userNameError:'Please Enter Valid Email'
                    });
                    return;
                  } else {
                    setError('');
                  }
                }
              }
        }
    // const textEmailChange = (val) => {
    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    //     if (reg.test(val) === false) {
    //     
    //         setData({
    //             ...data,
    //             username: val,
    //             isValiUser: false
    //         })

    //     }
    //     else {
    //         setData({
    //             ...data,
    //             username: val,
    //             isValiUser: ture
    //         })
    //     }
    // }
    // Validation End
    return (
        <Background >
            <Toast config={toastConfig} />
            <ScrollView keyboardShouldPersistTaps="handled"/>
            <View style={{ alignItems: 'center', width: responsiveScreenWidth(110) }}>
                <Text style={{ color: "white", fontSize: responsiveFontSize(8), fontWeight: 'bold', marginVertical: responsiveHeight(5) }}>SignIn</Text>
                <View style={{ backgroundColor: 'white', height: responsiveScreenHeight(80), width: responsiveScreenWidth(115), borderTopLeftRadius: responsiveWidth(25) }}>
                    <Text style={{ fontSize: responsiveFontSize(5), color: darkGreen, fontWeight: 'bold', marginLeft: responsiveWidth(20), marginTop: responsiveHeight(10) }}>Welcome!!!</Text>
                    <Text style={{ color: 'grey', fontSize: responsiveFontSize(2), fontWeight: 'bold', marginBottom: responsiveHeight(5), marginLeft: responsiveHeight(10) }}>
                        Login to your account
                    </Text>

                    {/* <Field placeholder="Password" secureTextEntry={true}  passwordValue='password'/>  */}

                    {/* Username Input Text */}
                  
              
                    <CustomInput placeholder='Enter User Name' value={data.username} setValue={txt => textEmailChange(txt)} />
                    {/* {
                        data.isValiUser ? null :
                            <Text style={{ color: 'red', marginLeft: responsiveWidth(9) }} > Please Enter Valid User Name!</Text>
                    } */}
                     <Text style={{color: 'red', marginLeft: responsiveWidth(9)}}>{error.userNameError}</Text>
                    {/* Password InputText */}

                    <CustomInput placeholder='Enter Password ' value={data.password} setValue={txt => handlePasswordChange(txt)} secureTextEntry={true} />
                    {
                        data.isValidPassword ? null :
                            <Text style={{ color: 'red', marginLeft: responsiveWidth(9) }} > Password must be 8 Charachters Long.</Text>

                    }
                    <View style={{ alignItems: "flex-end", width: responsiveWidth(95), marginBottom: responsiveHeight(10) }}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: responsiveFontSize(2) }}> Forget Password?</Text>
                    </View>
                    <View style={{ marginLeft: responsiveWidth(15) }}>
                        <Button txtColor="white" bgColor={darkGreen} btnLabel="SignIn" Press={() => saveData()} />
                        {/* <Button txtColor="white" bgColor={darkGreen} btnLabel="Login" Press={() => saveData()} /> */}
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "bold", color: 'black' }}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: responsiveFontSize(2) }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Background>
    )
}



export default Login;