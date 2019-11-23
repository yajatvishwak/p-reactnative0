
import {useState} from 'react';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';
import { from } from 'rxjs';
import { isTemplateElement } from '@babel/types';

const App: () => React$Node = () => {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }
  function addGoalHandler(){
    setCourseGoals(currentGoals => [...courseGoals,{key: Math.random().toString(),value: enteredGoal}]); // ... takes elements from old array and adds it to a new array...old course goals will be added to nre course goals
    console.log(enteredGoal);
  }

  return (
    <View style={styles.screen}>
      <View style= {styles.inputContainer}>
        <TextInput 
        placeholder="Course Goals"
        style={styles.addbox}
        onChangeText = {goalInputHandler}
        value = {enteredGoal}
        />
        <Button title = 'Add'
        onPress = {addGoalHandler}
        />
      </View>
      <FlatList 
      //keyExtractor = {(item,index)=>item.key/id/whateverkeyyouareusing}
      data = {courseGoals} renderItem = {itemData => 
        <View style= {styles.listItems}>
          <Text>{itemData.item.value}</Text>
        </View>}
      
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  inputContainer:{
    flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  addbox:{
    width:'80%' , borderColor:'black', borderWidth:1
  },
  listItems : {
    padding: 10, // spcing between content and the border
    marginVertical: 10, //spacing between border and surrounding, here top and bottom not left and right
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
}); 

export default App;
