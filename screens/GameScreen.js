import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import { useState } from 'react';

//  exclude prevents the phone from guessing the number right away
function generateRandomBetween(min, max, exclude) {
    //  Math.floor() rounds the number down to the nearest whole #
    //  since would get a decimal otherwise. Then need to add min
    //  again since could get 0 otherwise but want the lowest number to be 1.
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        //  Recursion!
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({userNumber}) {
    //  Biggest number should be 99 but need to go one higher for the Math.floor():
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                {/* + - */}
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
});