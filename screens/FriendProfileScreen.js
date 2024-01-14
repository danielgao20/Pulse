import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FriendProfileScreen = ({ route }) => {
  const { friendName } = route.params;
  let hoursWorkedOut = 0, workoutsCompleted = 0;

  // Set hours worked out based on friendName
  if (friendName === 'Jane Smith') {
    hoursWorkedOut = 12;
    workoutsCompleted = 9;
  } else if (friendName === 'Bob Johnson') {
    hoursWorkedOut = 10;
    workoutsCompleted = 8;
  } else {
    hoursWorkedOut = 5;
    workoutsCompleted = 3;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{friendName}'s Profile</Text>
      <Text style={styles.profileInfo}>Workouts Completed: {workoutsCompleted}</Text>
      <Text style={styles.profileInfo}>Hours Worked Out: {hoursWorkedOut}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileInfo: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default FriendProfileScreen;
