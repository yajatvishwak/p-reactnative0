import React from 'react';
import { useState } from 'react';
import {
    TextInput,
    Text,
    Button,
    View,
    StyleSheet
} from 'react-native';

const GoalInput = prop => {
    const [enteredGoal, setEnteredGoal] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter Something..."
                style={styles.addbox}
                onChangeText={goalInputHandler}
                value={enteredGoal}

            />
            <Button title='Add'
                style={{ borderRadius: 10 }}
                onPress={() => prop.onAddGoal(enteredGoal)} // entergoal variable will be passed on to the app.js
            //onPress = {prop.onAddGoal.bind(this,enteredGoal)} //this binds the function with extra parameters and passes it on whenever called
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    addbox: {
        width: '80%', borderColor: 'black', borderWidth: 1, borderRadius: 10
    }
});
export default GoalInput;