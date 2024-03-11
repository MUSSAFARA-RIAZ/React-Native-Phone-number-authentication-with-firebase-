import { View, Text, TouchableOpacity, TextInput } from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
// import { useEffect } from "react";s
// import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;

import { React, useState } from "react";

const Login = () => {
  const [phonenumber, setphonenumber] = useState("");
  const [confirm, setconfirm] = useState(null);
  const [code, setcode] = useState("");
  const navigation = useNavigation();

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phonenumber);
      setconfirm(confirmation);
    } catch (e) {
      console.log(e);
    }
  };
  const confirmcode = async () => {
    try {
      const usercredentils = await confirm.confirm(code);
      console.log(usercredentils);
      const user = usercredentils.user;
      const userDocument = await firestore()
        .collection("users")
        .doc(user.uid)
        .get();
      // navigation.navigate('Dashboard')
      if (userDocument.exists) {
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("Details", { uid: user.uid });
      }
    } catch (e) {
      console.log(e);
    }

  };
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Phone number authentication with firebase
      </Text>
      {!confirm ? (
        <View>
          <TextInput
            placeholder="Enter your phone number"
            value={phonenumber}
            onChangeText={setphonenumber}
            style={{
              borderWidth: 1,
              marginVertical: 10,
              padding: 10,
              borderRadius: 5,
            }}
            keyboardType="phone-pad" // Set keyboardType to 'phone-pad'
            textContentType="telephoneNumber" // Set textContentType to 'telephoneNumber' for autofill
          />

          <TouchableOpacity
            onPress={signInWithPhoneNumber}
            style={{
              backgroundColor: "blue",
              padding: 10,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Send code</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="Enter the code"
            value={code}
            onChangeText={setcode}
            style={{
              borderWidth: 1,
              marginVertical: 10,
              padding: 10,
              borderRadius: 5,
            }}
            keyboardType="number-pad" // Set keyboardType to 'number-pad' for numeric keyboard
            textContentType="oneTimeCode" // Set textContentType to 'oneTimeCode' for OTP autofill
          />

          <TouchableOpacity
            onPress={confirmcode}
            style={{
              backgroundColor: "blue",
              padding: 10,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Confirm code</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Login;
