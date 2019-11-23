import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const GoalItem = prop => {
    return (
        < LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#4b6cb7', '#182848']} style={styles.linearGradient} >
            <Text style={styles.buttonText}>
                {prop.title}
            </Text>
        </LinearGradient >
    ); /*<View style={styles.listItems}>
        <Text>{prop.title}</Text>
    </View>
    */
};
const styles = StyleSheet.create({
    listItems: {
        padding: 10, // spcing between content and the border
        marginVertical: 10, //spacing between border and surrounding, here top and bottom not left and right
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
    linearGradient: {

        padding: 10, // spcing between content and the border
        marginVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default GoalItem;