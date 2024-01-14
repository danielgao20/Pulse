import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ChallengesScreen = () => {
  const challengesData = [
    { id: '1', name: '30-Day Ab Challenge', description: 'Get strong and defined abs in 30 days' },
    { id: '2', name: 'Run 5K Every Day Challenge', description: 'Run a 5K every day for a week' },
    { id: '3', name: 'Yoga for Beginners', description: 'Learn basic yoga poses and techniques' },
    // Add more data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fitness Challenges</Text>
      <FlatList
        data={challengesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.challengeItem}>
            <Text style={styles.challengeName}>{item.name}</Text>
            <Text>{item.description}</Text>
            {/* Add a button to join the challenge */}
            <Button title="Join Challenge" onPress={() => console.log(`Join ${item.name} Challenge`)} />
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
  challengeItem: {
    marginBottom: 16,
  },
  challengeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default ChallengesScreen;
