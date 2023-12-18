//  Impt! Alert is an object, not a component!
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from 'react';

function StartGameScreen() {
    //  Impt! TextInput will always have string data even if "number-pad"!
    const [enteredNumber, setEnteredNumber] = useState('');

    //  ReactNative adds the enteredText here:
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //  Title, message , button(s)
            Alert.alert(
                'Invalid number!', 
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }

        console.log('Valid number!');
    }

    return( 
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" 
                //  Lets u clear the TextInput n stuff
                value={enteredNumber}
                //  ReactNative ands the enteredText here:
                onChangeText={numberInputHandler}

                //  These are more for letters, idk why he's doing it here:
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,

        //  Android-only:
        elevation: 4,

        //  iOS-only:
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        //  Probably don't want this all the way at 1, shadow is 
        //  much stronger on iOS by default than Android
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        //  Hmm, this both bolds and underlines the text on my 
        //  Android emulator, but on his it just bolds it....
        //  Oh, it only underlines if u type a letter not a number... why?
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});