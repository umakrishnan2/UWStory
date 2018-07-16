import React, { Component } from 'react';
import {View, ImageBackground,StyleSheet, Text,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation'
import { 
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons';
export default class DisclaimerPage extends Component {

render() {
    const { navigate } = this.props.navigation;
    return (
      //uploading the watermark image and creating the styleSheet for it
      <ImageBackground 
        style = {styles.container}>
          <View style={styles.disclaimerContainer}>
          <Text style={styles.titleText}>
          Good Picture Guidelines:
          </Text>
          
          <Text style={styles.bodyText}>
          Try to get a good picture of your subject. Use natural light when possible, and consider the background surrounding the subject.  
          </Text>
          </View>

          <View style={styles.disclaimerContainer}>
          <Text style={styles.titleText}>
          Picture Taking Instructions:
          </Text>
          
          <Text style={styles.bodyText}>
               1. Press "Continue" </Text>
          <Text style={styles.bodyText}>
               2. Take Picture of Subject </Text>
          <Text style={styles.bodyText}>
               3. Review Picture by pressing   <Foundation name="thumbnails" size={25} color="black" />  </Text>
          <Text style={styles.bodyText}>
               4. Select Image </Text>
          <Text style={styles.bodyText}>
               5. Press "Save selected to gallery" </Text>
          <Text style={styles.bodyText}>
               6. Confirm Image was saved</Text>
          <Text style={styles.bodyText}>
               7. Exit Camera and Press "Return"</Text>
          </View>

          <View style={styles.row}>
            {/*Creation of the Agree Button */}
            {/*Creating the button styleSheet required for the Agree button*/}
            
            {/*the users background will change to white when the agree button is pressed by using the TouchableHighlight*/}
            <TouchableOpacity onPress={() => navigate('CameraScreen')}>
            {/*Creating the button styleSheet responsible for the agree button color and button text*/}
            <View style={styles.button}>
            <Text style={styles.buttonText}>CAMERA</Text>
            </View>
            </TouchableOpacity>
          


            {/*Creation of the disagree Button */}
            {/*Creating the button styleSheet required for the disagree button*/}
            {/*the users background will change to white when the disagree button is pressed by using the TouchableHighlight*/}
            <TouchableOpacity onPress={() => navigate('Interviewee')}>
            {/*Creating the button styleSheet responsible for the disagree button color and button text*/}
            <View style={styles.disButton}>
            <Text style={styles.buttonText}>RETURN</Text>
            </View>
            </TouchableOpacity>
            </View>
      </ImageBackground>
    );
  }
}

//responsible for the aesthetic of the app
const styles = StyleSheet.create({
  //ImageBackground
  row: {
  flexDirection: 'row',
  paddingTop: 30
  },
  container:{
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  //bodyText
  bodyText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'black',
    padding: 10
  },
  //Title Text
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'black',
    padding: 10,
  },
  //Agree Button Position on the screen
  buttonContainer: {
    paddingTop: 60,
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
    left: 100,
  },
  //Disagree button position on the screen
  disButtonContainer: {
    paddingTop: 60,
    alignItems: 'center',
    position: 'absolute',
    bottom: -60,
    left: 100,
  },
  //Agree button color
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#F57814',
    
  },
  //Disagree button color
  disButton: {
    marginBottom: 100,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#969696',
    
  },
  //button text for both the agree and disagree button
  buttonText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight:'bold',
  },
  disclaimerContainer: {
    backgroundColor: 'white'
  }
});