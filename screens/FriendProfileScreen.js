import React from 'react';
import { View, Text } from 'react-native';

const FriendProfileScreen = ({ route }) => {
  const { friendName } = route.params;

  return (
    <View>
      <Text>{friendName}'s Profile</Text>
        <Text>Workouts Completed: 10</Text>
        <Text>Hours Worked Out: 20</Text>
    </View>
  );
};

export default FriendProfileScreen;
