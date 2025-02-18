import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen.tsx';
import RegisterScreen from './screens/registerScreen.tsx';
import Header from './components/header.tsx';
import HomeScreen from './screens/homeScreen.tsx';
import ProfileScreen from './screens/profileScreen.tsx';
import RecipeScreen from './screens/recipeScreen.tsx';
export default function App(): React.JSX.Element {
  const Stack=createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{header:()=><Header/>}}/>
        <Stack.Screen name="Recipe" component={RecipeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

