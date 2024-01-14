import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import FriendProfileScreen from './screens/FriendProfileScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
        <Stack.Screen options={{ headerShown: false }} name="FriendProfile" component={FriendProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator