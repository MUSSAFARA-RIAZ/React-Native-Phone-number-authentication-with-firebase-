import { View, Text, TouchableOpacity , TextInput} from 'react-native'
import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react'

const Details = ({route,Navigation}) => {
    const {uid}=route.params;
    const[name,setname]=useState('')
    const [gender,setgender]=useState('')
    const [dob,setdob]=useState('')
    const saveDetails=async()=>{
        try{
            await firestore().collection('users').doc(uid).set({
                name,
                gender,
                dob})
                Navigation.navigate("Dashboard")
        }catch{
            console.log(e)
        }
    }
    return(
        <View style={{flex:1, padding:20,backgroundColor:"white"}}>
            <Text style={{fontWeight:'bold', fontSize:20}}>Enter your details</Text>
            <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setname}
            style={{borderWidth:1, marginVertical:10, padding:10, borderRadius:5}}
            />
            <TextInput
            placeholder = "Enter your date of birth"
            value={dob}
            onChangeText={setdob}
            style={{borderWidth:1, marginVertical:10, padding:10, borderRadius:5}}
            />
            <TextInput
            placeholder="Enter your gender"
            value={gender}
            onChangeText={setgender}
            style={{borderWidth:1, marginVertical:10, padding:10, borderRadius:5}}
            />
            <TouchableOpacity onPress={saveDetails} style={{backgroundColor:'blue', padding:10, borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white'}}>Save Details</Text>
                </TouchableOpacity>

            </View>
            
    )

 
}

export default Details