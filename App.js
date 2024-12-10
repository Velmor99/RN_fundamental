import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function toggleModal() {
    setIsModalVisible(!isModalVisible)
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.length === 0) return
    setCourseGoals(prevState => [...prevState, { text: enteredGoalText, id: Math.random().toString() }])
    toggleModal()
  }

  function onDeleteGoal(id) {
    setCourseGoals(prevState => {
      return prevState.filter(item => item.id !== id)
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.addGoalButton}>
          <Button title="Add goal" color={"#a065ec"} onPress={toggleModal} />
        </View>
        <GoalInput isModalVisible={isModalVisible} onCloseModal={toggleModal} onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={itemData => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteHandler={onDeleteGoal} />
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4,
  },
  addGoalButton: {
    margin: 16
  }
});
