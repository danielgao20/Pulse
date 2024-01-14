import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const LeaderboardScreen = () => {
  const leaderboardData = [
    { id: '1', name: 'John Doe', hoursWorkedOut: 15 },
    { id: '2', name: 'Jane Smith', hoursWorkedOut: 12 },
    { id: '3', name: 'Bob Johnson', hoursWorkedOut: 10 },
    // Add more data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.leaderboardItem}>
            <Text>{index + 1}</Text>
            <Text>{item.name}</Text>
            <Text>{item.hoursWorkedOut} hours</Text>
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
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default LeaderboardScreen;
