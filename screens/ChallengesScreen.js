import React from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet } from 'react-native';

const ChallengesScreen = () => {
  const challengesData = [
    { id: '1', name: '30-Day Ab Challenge', description: 'Get strong and defined abs in 30 days', image: require('../assets/planking.jpg'), participants: 150 },
    { id: '2', name: 'Run 5K Every Day Challenge', description: 'Run a 5K every day for a week', image: require('../assets/running.jpg'), participants: 100 },
    { id: '3', name: 'Yoga for Beginners', description: 'Learn basic yoga poses and techniques', image: require('../assets/yoga.jfif'), participants: 200 },
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
            <Image source={item.image} style={styles.challengeImage} />
            <Text style={styles.challengeName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <View style={styles.detailsContainer}>
              <Text>{`${item.participants} participants`}</Text>
              <Button title="Join Challenge" onPress={() => console.log(`Join ${item.name} Challenge`)} />
            </View>
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
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC', // Thin border color
    padding: 16,
  },
  challengeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  challengeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
});

export default ChallengesScreen;
