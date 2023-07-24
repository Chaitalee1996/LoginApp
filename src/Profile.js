import React, { useEffect,useState } from 'react'
import {View,Text} from 'react-native'
import Background from './Background'
import { responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions'
import Button from './Button'
import { darkGreen } from './Constant'
import { openDatabase } from 'react-native-sqlite-storage'
let db = openDatabase({ name: 'LoginDatabase.db' })
const Profile=(props)=>{
    const [loginUser,setLoginUser]=useState([]);
    useEffect(()=>{
db.transaction(txn=>{
    txn.executeSql('SELECT * FROM loginUser_table',[]
    ,(tx,res)=>{
        let temp=[];
        for(let i=0;i<res.rows.length;++i){
            console.log("Profile Data",res.rows.item(i));
             temp.push(res.rows.item(i));
        }
        setLoginUser(temp);
    });
});
    },[])
    return(
        <Background>
                         
                           <Text style={{color:"white",fontSize:responsiveFontSize(5),fontWeight:'bold'}}>Mr.Shubham M</Text>
                           <View style={{marginLeft:responsiveWidth(15)}}>
                            <Button txtColor="white" bgColor={darkGreen} btnLabel="Logout" Press={()=> props.navigation.navigate("Login")}/>
                           </View>
            </Background>
    )
}
export default Profile