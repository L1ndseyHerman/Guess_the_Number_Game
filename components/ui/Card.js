import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
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
});