import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";

import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
      }}
    >
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "#fff",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
