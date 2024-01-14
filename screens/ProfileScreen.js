import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const friendsData = [
    { id: '1', name: 'Friend 1' },
    { id: '2', name: 'Friend 2' },
    { id: '3', name: 'Friend 3' },
    // Add more data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>
      <View style={styles.profileInfo}>
        <Text>Name: John Doe</Text>
        <Text>Workouts Completed: 10</Text>
        <Text>Hours Worked Out: 20</Text>
        {/* Add more profile information as needed */}
      </View>
      <Button title="Start Workout" onPress={() => console.log('Start Workout')} />
      <Button title="End Workout" onPress={() => console.log('End Workout')} />

      <Text style={styles.heading}>Friends</Text>
      <FlatList
        data={friendsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text>{item.name}</Text>
            {/* Add a button to view friend's profile */}
            <Button title="View Profile" onPress={() => console.log(`View ${item.name}'s Profile`)} />
          </View>
        )}
      />
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
    marginBottom: 16,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default ProfileScreen;
