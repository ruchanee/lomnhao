import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator();

export default function AppNavigator({ user, setUser }) {
  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} setUser={setUser} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {(props) => <MainTabs {...props} user={user} setUser={setUser} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}
