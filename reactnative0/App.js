
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
import GoalItem from  './components/GoalItem';
import GoalInput from './components/GoalInput';
import { from } from 'rxjs';
import { isTemplateElement } from '@babel/types';

const App: () => React$Node = () => {
  
  const [courseGoals, setCourseGoals] = useState([]);
  
  function addGoalHandler(title){
    setCourseGoals(currentGoals => [...courseGoals,{key: Math.random().toString(),value: title}]); // ... takes elements from old array and adds it to a new array...old course goals will be added to nre course goals
    //console.log(enteredGoal);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal ={addGoalHandler} />
      <FlatList 
      //keyExtractor = {(item,index)=>item.key/id/whateverkeyyouareusing}
      data = {courseGoals} renderItem = {itemData => <GoalItem title = {itemData.item.value} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen:{
    padding:50
  }
}); 

export default App;
