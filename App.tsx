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
import MealScreen from './screens/mealScreen.tsx';
import IngredientsScreen from './screens/ingridientsScreen.tsx';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
export default function App(): React.JSX.Element {
  const Stack = createStackNavigator()
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{header: () => <Header />}}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Ingridients" component={IngredientsScreen} />
          <Stack.Screen name="Biteplan" component={MealScreen} />
          <Stack.Screen name="Suprise" component={RandomScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

