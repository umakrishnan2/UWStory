import React, { Component } from 'react';
import {View, ImageBackground,StyleSheet, Text,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class DisclaimerPage extends Component {

render() {
    const { navigate } = this.props.navigation;
    return (
      //uploading the watermark image and creating the styleSheet for it
      <ImageBackground 
        source = {require('./Images/watermark.png')}
        style = {styles.container}>
          <View style={styles.disclaimerContainer}>
          <Text style={styles.titleText}>
          Please read this statement out loud to the interviewee:
          </Text>
          
          <Text style={styles.bodyText}>
            "By consenting to this interview, I am agreeing to share my story and my picture with United Way of Metro Chicago, who may feature it on their website or in other marketing materials. I understand that my personal information will not be shared except to contact me with further questions."
          </Text>
          </View>


            {/*Creation of the Agree Button */}
            {/*Creating the button styleSheet required for the Agree button*/}
            <View style={styles.buttonContainer}>
            {/*the users background will change to white when the agree button is pressed by using the TouchableHighlight*/}
            <TouchableOpacity onPress={() => navigate('Interviewee')}>
            {/*Creating the button styleSheet responsible for the agree button color and button text*/}
            <View style={styles.button}>
            <Text style={styles.buttonText}>AGREE</Text>
            </View>
            </TouchableOpacity>
            </View>


            {/*Creation of the disagree Button */}
            {/*Creating the button styleSheet required for the disagree button*/}
            <View style={styles.disButtonContainer}>
            {/*the users background will change to white when the disagree button is pressed by using the TouchableHighlight*/}
            <TouchableOpacity onPress={() => navigate('HomeScreen')}>
            {/*Creating the button styleSheet responsible for the disagree button color and button text*/}
            <View style={styles.disButton}>
            <Text style={styles.buttonText}>DISAGREE</Text>
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
  container:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  //bodyText
  bodyText: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: 'black',
    fontStyle: 'italic'
  },
  //Title Text
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'black',
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
    marginBottom: 100,
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