import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return( 
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
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
    }
});