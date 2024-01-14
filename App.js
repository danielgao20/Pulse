import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LeaderboardScreen from './screens/LeaderboardScreen';
import ChallengesScreen from './screens/ChallengesScreen';
import ProfileScreen from './screens/ProfileScreen';
import FriendProfileScreen from './screens/FriendProfileScreen'; // Import FriendProfileScreen
import { FitnessProvider } from './FitnessContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
    <Stack.Screen options={{ headerShown: false }} name="FriendProfile" component={FriendProfileScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <FitnessProvider>
        <StatusBar style="light" backgroundColor='#000' />
        <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={LeaderboardScreen} />
          <Tab.Screen name="Challenges" component={ChallengesScreen} />
          <Tab.Screen name="Profile" component={MainStack} />
        </Tab.Navigator>
      </FitnessProvider>
    </NavigationContainer>
  );
}
