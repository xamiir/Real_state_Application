import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Login} from './src/screens/Login';
import {SignUp} from './src/screens/SignUpScreen';
import {ForgotPassword} from './src/screens/ForgotPasswordScreen';
function App(): React.JSX.Element {
  return (
    <>
      {/* <SignUp /> */}
      <Login />
      {/* <ForgotPassword /> */}
    </>
  );
}

export default App;
