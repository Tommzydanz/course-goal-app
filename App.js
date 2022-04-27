import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, 
      //for example if you have id to represent key on API we can resolve to this instead
      {text: enteredGoalText, id: Math.random().toString()}]);
      // when the add goal is tapped, to close the modal we set this in this function.
      endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal)=>
        goal.id !== id);
    });
  };

  // to open the modal
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.appContainer} >
        <Button title="Add New Goal"
        color='#9646ff'
        onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal={addGoalHandler}
        visibility={modalIsVisible}
        onCancel={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return(
              <GoalItem text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
              id={itemData.item.id}
              /> 
            );
          }}
          alwaysBounceVertical={false}
          //for example if you have id to represent key on API we can resolve to this instead
          keyExtractor= {(item, index) => {
           return item.id;
          }}
          />
        </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#5e0acc',
  },
  goalsContainer: {
    flex: 5,
    marginTop: 16,
    width: '100%',
  },
});
