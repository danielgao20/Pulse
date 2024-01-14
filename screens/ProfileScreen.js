import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const friendsData = [
    { id: '1', name: 'Jane Smith' },
    { id: '2', name: 'Bob Johnson' },
    { id: '3', name: 'Chris Paul' },
    // Add more data as needed
  ];

  const handleViewProfile = (friendName) => {
    // Navigate to the detailed profile screen, passing friendName as a parameter
    navigation.navigate('FriendProfile', { friendName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>
      <View style={styles.profileInfo}>
        <Text>Name: John Doe</Text>
        <Text>Workouts Completed: 10</Text>
        <Text>Hours Worked Out: 20</Text>
        {/* Add more profile information as needed */}
      </View>
      <Button
        title="Start Workout"
        onPress={() => console.log('Start Workout')}
        style={styles.startWorkoutButton}
        titleStyle={styles.startWorkoutButtonText}
      />
      <Button
        title="End Workout"
        onPress={() => console.log('End Workout')}
        style={styles.startWorkoutButton}
        titleStyle={styles.startWorkoutButtonText}
      />

      <Text style={styles.heading}>Friends</Text>
      <FlatList
        data={friendsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text>{item.name}</Text>
            {/* Add a button to view friend's profile */}
            <Button
              title="View Profile"
              onPress={() => handleViewProfile(item.name)}
              style={styles.startWorkoutButton}
              titleStyle={styles.startWorkoutButtonText}
            />
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
  startWorkoutButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
  },
  startWorkoutButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfileScreen;
