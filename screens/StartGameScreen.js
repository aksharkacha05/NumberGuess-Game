import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert,useWindowDimensions,KeyboardAvoidingView,ScrollView } from 'react-native';
import PrimaryButton from '../compoantas/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../compoantas/Title';
import Card from '../compoantas/Card';
import Instrucation from '../compoantas/Instrucation';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber,setEnteredNumber]= useState('');

  const {width,height}= useWindowDimensions();

  function numberInputHandler(enteredText){
   setEnteredNumber(enteredText);
  }

  function  resetInputHandler(){ 
    setEnteredNumber('');
  }

  function confirmInputHnadler (){
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber)|| chosenNumber <=0 || chosenNumber>99){
      Alert.alert('Invalid Number!','Number has to be a number between 1 and 99.',[{text:'Okey',style:'destructive',onPress:resetInputHandler}]);
      return;
    }
    onPickNumber(chosenNumber);
  }
  const marginTopDistance = height <380?30:100;
  
  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior='position'>
    <View style={[styles.rootContanier,{marginTop:marginTopDistance}]}>
      <Title>Guess My number</Title>
    <Card style={styles.inputContainer}>
      <Instrucation>Enter a Number</Instrucation>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}/>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}> 
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHnadler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  rootContanier:{
    flex:1,
    alignItems:'center',
    // marginTop:deviceHeight <380 ? 30:100,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color:Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    marginRight: 10,
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
  }
})

export default StartGameScreen
