import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList, Alert } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return alert('Add a title');
    }
    setCourseGoals(currentGoals => [...currentGoals, {
      id: Math.random().toString(),
      value: goalTitle
    }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = theGoal => {
    Alert.alert(
      'Delete Goal',
      `Are you sure you want to delete ${theGoal.title}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete', style: 'destructive', onPress: () => setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== theGoal.id);
          })
        },
      ]
    );
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        cancel={cancelGoalAdditionHandler}
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
