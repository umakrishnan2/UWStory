import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
  Switch,
  Modal,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Interviewer from './components/Pages/Interviewer';
import Interviewee from './components/Pages/Interviewee';
import PasswordScreen from './components/Pages/PasswordScreen';
import HomeScreen from './components/Pages/HomeScreen';
import DisclaimerPage from './components/Pages/DisclaimerPage';
import Recordings from './components/Pages/Recordings';
import VoiceCapture from './components/Pages/VoiceCapture';
import IntroAudio from './components/Pages/IntroAudio';
import CameraScreen from './components/Pages/CameraScreen';
import CameraRules from './components/Pages/CameraRules';

export default class myapp extends Component {
  render() {
    return <NavigationApp />;
  }
}

<View>
  <HomeScreen />
  <PasswordScreen />
</View>


const NavigationApp = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  PasswordScreen: { screen: PasswordScreen },
  Interviewer: { screen: Interviewer },
  DisclaimerPage: { screen: DisclaimerPage },
  Interviewee: { screen: Interviewee },
  CameraRules: { screen: CameraRules },
  CameraScreen: { screen: CameraScreen },
  IntroAudio: {screen: IntroAudio },
  Recordings: { screen: Recordings },
  VoiceCapture: { screen: VoiceCapture },
  
});



AppRegistry.registerComponent('myapp', () => myapp);
