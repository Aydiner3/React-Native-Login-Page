import React from 'react';
import {StyleSheet, View} from 'react-native';

import Logo from './copmponents/logo/Logo'
import Input from './copmponents/inputArea/InputArea'
import WelcomingText from './copmponents/welcomingText/WelcomingText'
import Button from './copmponents/button/Button'



const App = () => (
  <>
    <Logo />

    <WelcomingText/>

    <Input />
    
    <Button />
  </>
)



export default App;