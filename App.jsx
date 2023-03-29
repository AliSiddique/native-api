
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SFSymbol } from "react-native-sfsymbols";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/Home';
import SettingsScreen from './src/Settings';

const Tab = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home"
          options={{
            tabBarLabel:() => {return null},
            tabBarIcon: () => (
              <SFSymbol
              name="house"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={true}
              style={{ width: 32, height: 32 }}
            />
            ),
          }}
        component={HomeScreen} />
        <Tab.Screen name="Settings"
          options={{
            tabBarLabel:() => {return null},
            tabBarIcon: () => (
              <SFSymbol
              name="gear"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={false}
              style={{ width: 32, height: 32 }}
            />
            ),
          }}
        component={SettingsScreen} />
        <Tab.Screen name="Search"
          options={{
            tabBarLabel:() => {return null},
            tabBarIcon: () => (
              <SFSymbol
              name="creditcard"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={false}
              style={{ width: 32, height: 32 }}
            />
            ),
          }}
           component={SettingsScreen} />
        <Tab.Screen name="Account"
          options={{
            tabBarLabel:() => {return null},

            tabBarIcon: () => (
              <SFSymbol
              name="person"
              weight="semibold"
              scale="large"
              color="black"
              size={16}
              resizeMode="center"
              multicolor={false}
              style={{ width: 32, height: 32 }}
            />
            ),
          }}
        component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
