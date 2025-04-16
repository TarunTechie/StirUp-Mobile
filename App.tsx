import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen.tsx';
import RegisterScreen from './screens/registerScreen.tsx';
import Header from './components/header.tsx';
import HomeScreen from './screens/homeScreen.tsx';
import ProfileScreen from './screens/profileScreen.tsx';
import RecipeScreen from './screens/recipeScreen.tsx';
import RandomScreen from './screens/randomScreen.tsx';
import NutritionScreen from './screens/nutritionScreen.tsx';
import IngredientsScreen from './screens/ingridientsScreen.tsx';
export default function App(): React.JSX.Element {
  const Stack=createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{header:()=><Header/>}}/>
        <Stack.Screen name="Ingridients" component={IngredientsScreen}/>
        <Stack.Screen name="Nutrition" component={NutritionScreen}/>
        <Stack.Screen name="Suprise" component={RandomScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

