import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <AppNavigator user={user} setUser={setUser} />
    </NavigationContainer>
  );
}
