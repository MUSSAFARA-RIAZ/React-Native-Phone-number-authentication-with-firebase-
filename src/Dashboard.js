import { View, Text, TouchableOpacity , TextInput} from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Dashboard = () => {
    const navigation=useNavigation();
    const handlelogout=async()=>{
        try{
            await auth().signOut()
            navigation.reset({
                index:0,
                routes:[{name:'Login'}]
        })
           // navigation.navigate('Login')
        }
        catch(e){
            console.log(e)
        }
    }
  return (
    <View style={{flex:1, padding:20,backgroundColor:"white"}}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Welcome to Dashboard</Text>
        <TouchableOpacity onPress={handlelogout} style={{backgroundColor:'blue', padding:10, borderRadius:5, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white'}}>Logout</Text>
        </TouchableOpacity>
    </View>

  )
}

export default Dashboard