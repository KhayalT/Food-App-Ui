import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialIcons, AntDesign} from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import DetailScreen from '../screens/DetailScreen';
import Colors from '../../constant/colors';

const Stack = createStackNavigator ();

function HomeStact () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Food Detail',
          headerTitleAlign: 'center',
        }}
        name="Details"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}

function BuyingStack () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function SearchStack () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function LikedStack () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function CartStack () {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator ();

function FoodTab () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.grey,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStact}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Buy"
          component={BuyingStack}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="shopping-bag" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  marginBottom: 50,
                  backgroundColor: '#fff',
                  borderRadius: 60,
                  width: 60,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: Colors.primary,
                  borderWidth: 2,
                }}
              >
                <MaterialIcons name="search" size={35} color={Colors.primary} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Liked"
          component={LikedStack}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="heart" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="shopping-cart" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default FoodTab;
