import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Pressable } from 'react-native';

const LeaderboardScreen = ({ navigation }) => {
  const leaderboardData = [
    { id: '1', name: 'John Doe', hoursWorkedOut: 15 },
    { id: '2', name: 'Jane Smith', hoursWorkedOut: 12 },
    { id: '3', name: 'Bob Johnson', hoursWorkedOut: 10 },
    // Add more data as needed
  ];

  // Assuming the current user is the first item in the array
  const currentUser = leaderboardData[0];

  const handleStartWorkoutPress = () => {
    // Navigate to the workout page or perform any other action
    navigation.navigate('WorkoutPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, John!</Text>

      {/* Section for Weekly Challenge and Today's Workout */}
      <TouchableOpacity
        style={styles.weeklyChallengeContainer}
        onPress={() => console.log("Weekly Challenge Pressed")}
      >
        <Image
          source={require('../assets/Pulse.png')} // Replace with your image source
          style={styles.weeklyChallengeImage}
        />
        <View style={styles.weeklyChallengeContent}>
          <Text style={styles.sectionHeading}>Weekly Challenge</Text>
          <Text style={styles.sectionDescription}>
            Perform 30 minutes of Cardio{'\n'}
          </Text>
          <Pressable style={styles.startWorkoutButton} onPress={handleStartWorkoutPress}>
            <Text style={styles.startWorkoutButtonText}>Let's do it</Text>
          </Pressable>
        </View>
      </TouchableOpacity>

      {/* Section for Leaderboard */}
      <Text style={styles.leaderboardHeading}>______________________________________________</Text>
      <Text style={styles.leaderboardHeading}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.leaderboardItem,
              index === 0 ? styles.currentUser : null,
            ]}
          >
            <Text style={styles.leaderboardItemText}>{index + 1}</Text>
            <Text style={styles.leaderboardItemText}>{item.name}</Text>
            <Text style={styles.leaderboardItemText}>{item.hoursWorkedOut} hours</Text>
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
  headerImage: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  weeklyChallengeContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white', // White background
    marginHorizontal: 8, // Add horizontal margin
  },
  weeklyChallengeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  weeklyChallengeContent: {
    padding: 16,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 12,
  },
  startWorkoutButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
  },
  startWorkoutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  leaderboardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  currentUser: {
    backgroundColor: '#FFD700',
  },
  leaderboardItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LeaderboardScreen;
