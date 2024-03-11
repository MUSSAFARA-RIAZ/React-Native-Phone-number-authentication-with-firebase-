import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import Details from './src/Details';


// Add this before any other Firebase code


// import { firebase } from '@react-native-firebase/firestore';
// import { firebase } from 'firebase/compat/auth';
//import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';
const Stack=createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
